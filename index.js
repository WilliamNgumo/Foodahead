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

const addItemToCart = (itemName, price, minutes) => {
  // const existingItem = cart.find(item => item.name === itemName);
  // if (existingItem) {
  //   existingItem.quantity += 1;
  // } else {
  cart.push({ name: itemName, price: price, minutes: minutes });
  // }
  alert(`${itemName} added to cart`);
  // updateCartDisplay(); // Called to update the cart UI (see below)

  axios
    .post(`${process.env.FOODAHEAD_API_URL}`, { cart })
    .then(() => {
      alert(`${itemName} added to cart`);
    })
    .catch(err => {
      console.error("Error saving cart:", err);
    });
};



router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    switch (view) {
      case "resturant5":

      // New Axios get request utilizing already made environment variable
      axios
        .get(`${process.env.FOODAHEAD_API_URL}/resturant5`)
        .then(response => {
          // Storing retrieved data in state
          // The dot chain variable access represents the following {storeFolder.stateFileViewName.objectAttribute}
          console.log("menu item response", response.data);

          store.resturant5.menuItems = response.data;
          done();
        })
        .catch((error) => {
          console.log("It puked", error);
          done();
        });
        break;
      default:
        done();

    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },


  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view === "resturant5") {
      console.log("hi");
      let cartItems = [];
      let selectedItem = "";

      // ! this will handle the add to cart events from the view
      const addButtons = document.querySelectorAll("input");
      console.log(addButtons);
      for (let button of addButtons) {
        console.log(button);
        button.addEventListener("click", event => {
          // get menu item values from the store or from hard coded values from html
          switch (button.id) {
            case "friedRice":
              selectedItem = store.resturant5.menuItems.find((item) => item.itemName === "Fried Rice");
              break;
            case "loMein":
              selectedItem = store.resturant5.menuItems.find((item) => item.itemName === "Lo Mein");
              break;
            case "dumplings":
              selectedItem = store.resturant5.menuItems.find((item) => item.itemName === "Dumplings");
              break;
            case "moonCakes":
              selectedItem = store.resturant5.menuItems.find((item) => item.itemName === "Mooncakes");
              break;
            case "sesameBalls":
              selectedItem = store.resturant5.menuItems.find((item) => item.itemName === "Sesame Balls");
              break;
            case "mangoPudding":
              selectedItem = store.resturant5.menuItems.find((item) => item.itemName === "Mango Pudding");
              break;
            case "orangeJuice":
              selectedItem = store.resturant5.menuItems.find((item) => item.itemName === "Orange Juice");
              break;
            case "lemonade":
              selectedItem = store.resturant5.menuItems.find((item) => item.itemName === "LEMONADE");
              break;
            case "sprite":
              selectedItem = store.resturant5.menuItems.find((item) => item.itemName === "SPRITE");
              break;
            case "submitButton":
              break;


            default:
              console.log("Item Not Found");
              return;

          }
          if (button.id === "submitButton") {

          }
          else {
            cartItems.push(selectedItem);
            console.log(cartItems);

          }
        });
      }
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        // Create a request body object to send to the API
        const requestData = {
          menuItems: cartItems

        };
        console.log("requestData", requestData);
        axios
          .post(`${process.env.FOODAHEAD_API_URL}/orders`, requestData)
          .then(response => {
            console.log("responseData", response.data);
            store.orders.completedOrder = response.data.menuItems;
            response.data.menuItems.forEach(menuItem => {
              store.orders.total += menuItem.price,
                store.orders.totalMinutes += menuItem.minutes
            });
            console.log("this is the total", store.orders.total);
            console.log("this is the totalMinutes", store.orders.totalMinutes);
            console.log("store completedOrder", store.orders.completedOrder);
            router.navigate("/orders");
          })

          .catch(error => {
            console.log("fail", error)
          });

      })

    }
    if (view === "contactUs") {
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const inputList = event.target.elements;
        console.log("input Element list", inputList);

        // Create a request body object to send to the API
        const requestData = {
          name: inputList.name.value,
          email: inputList.email.value,
          message: inputList.message.value
        };
        axios
          .post(`${process.env.FOODAHEAD_API_URL}/contact`, requestData)
          .then(response => {
            console.log(response)
            if (response.status === 202) {
              alert("Message sent successfully");
              // router.navigate("/contactUs");
            }
            else {
              alert("Message failed to send");
            }
          })
      })
    }

    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  }

});




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



