import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios"


const router = new Navigo("/");
let cart = [];


function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
    ${header(state)}
    ${nav(store.nav)}
    ${main(state)}
    ${footer()}
  `;

}

const addItemToCart = (itemName, price) => {
  const existingItem = cart.find(item => item.name === itemName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: itemName, price: price, quantity: 1 });
  }
  alert(`${itemName} added to cart`);
  updateCartDisplay(); // Called to update the cart UI (see below)
};

const updateCartDisplay = () => {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalContainer = document.getElementById("cartTotal");

  if (!cartItemsContainer || !cartTotalContainer) return; // Ensure cart elements exist

  cartItemsContainer.innerHTML = ""; // Clear current cart items
  let total = 0;

  cart.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItemsContainer.appendChild(listItem);
    total += item.price * item.quantity;
  });

  cartTotalContainer.textContent = `Total: $${total.toFixed(2)}`;
};


router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View
      case "home":
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`)
          .then(response => {
            store.home.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main
            };
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;

      // Add a case for each view that needs data from an API
      case "":


          break;
      default :

        // We must call done for all views so we include default for the views that don't have cases above.
        done();
        // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });

    // Add cart functionality
    if (view === "resturant5") {
      document.getElementById("friedRice").addEventListener("click", () => {
        addItemToCart("Fried Rice", 10.99);
      });
      document.getElementById("loMein").addEventListener("click", () => {
        addItemToCart("Lo Mein", 9.99);
      });
      document.getElementById("dumplings").addEventListener("click", () => {
        addItemToCart("Dumplings", 7.99);
      });
      document.getElementById("moonCakes").addEventListener("click", () => {
        addItemToCart("Moon Cakes", 5.99);
      });
      document.getElementById("sesameBalls").addEventListener("click", () => {
        addItemToCart("Sesame Balls", 3.99);
      });
      document.getElementById("mangoPudding").addEventListener("click", () => {
        addItemToCart("Mango Pudding", 4.99);
      });
      document.getElementById("orangeJuice").addEventListener("click", () => {
        addItemToCart("Orange Juice", 2.99);
      });
      document.getElementById("lemonade").addEventListener("click", () => {
        addItemToCart("Lemonade", 2.99);
      });
      document.getElementById("sprite").addEventListener("click", () => {
        addItemToCart("Sprite", 1.99);
      });
    }

  }
});
// render();

// render();



router
.on({
  "/": () => render(),
  ":view": (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view in store) {
      render(store[view]);
    } else {
      render(store.viewNotFound);
      console.log(`View ${view} not defined`);
    }
  },
})
.resolve();



