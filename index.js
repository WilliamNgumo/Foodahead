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

    if (view === "resturant5") {

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
      for(let button of addButtons) {
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
        if (button.id === "submitButton"){

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
      console.log("requestData",requestData);
      axios
      .post(`${process.env.FOODAHEAD_API_URL}/orders`, requestData)
      .then(response => {
      console.log("responseData",response.data);
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
      // cartItems = [{ itemName: "lemonade", price: 2.99, minutes: 2 }, { itemName: "friedRice", price: 14, minutes: 12}]
      // const requestData = {
      //   menuItems: cartItems
      // }
      // axios.post(`${process.env.FOODAHEAD_API_URL}/orders`, requestData)
      // .then(response => {
      //   console.log(response)
      // })
    }
    if (view === "contactUs") {
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const inputList = event.target.elements;
        console.log("input Element list",inputList);

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
    // if (view === "orders") {
    //   // Logic to fetch and display the cart
    //   axios
    //     .get(`${process.env.FOODAHEAD_API_URL}/cart`)
    //     .then(response => {
    //       const cart = response.data;

    //       // Find the container elements
    //       const ordersContainer = document.getElementById("ordersList");
    //       const totalContainer = document.getElementById("ordersTotal");

    //       // Render the cart items
    //       ordersContainer.innerHTML = cart
    //         .map(
    //           item => `
    //             <li>${item.name} - $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</li>
    //           `
    //         )
    //         .join("");

    //       // Calculate and display the total
    //       const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    //       totalContainer.textContent = `Total: $${total.toFixed(2)}`;
    //     })
    //     .catch(err => {
    //       console.error("Error fetching cart:", err);
    //     });
    // }
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  }










    // if (view === "orders") {
    //   // Add an event handler for the submit button on the form
    //   document.querySelector("form").addEventListener("submit", event => {
    //     event.preventDefault();

    //     // Get the form element
    //     const inputList = event.target.elements;
    //     console.log("Input Element List", inputList);




    //     // Create a request body object to send to the API
    //     const requestData = {
    //       itemName: inputList.itemName.value,
    //       price: inputList.price.value,
    //       minutes: inputList.minutes.value,
    //     };
    //     // Log the request body to the console
    //     console.log("request Body", requestData);

    //     axios
    //       // Make a POST request to the API to create a new pizza
    //       .post(`${process.env.FOODAHEAD_API_URL}/menuItems`, requestData)
    //       .then(response => {
    //       //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
    //         store.pizza.pizzas.push(response.data);
    //         router.navigate("/orders");
    //       })
    //       // If there is an error log it to the console
    //       .catch(error => {
    //         console.log("It puked", error);
    //       });
    //   });
    // }
    // Add cart functionality
    // if (view === "resturant5") {
    //   document.getElementById("friedRice").addEventListener("click", () => {
    //     addItemToCart("Fried Rice", 14);
    //   });
    //   document.getElementById("loMein").addEventListener("click", () => {
    //     addItemToCart("Lo Mein", 15);
    //   });
    //   document.getElementById("dumplings").addEventListener("click", () => {
    //     addItemToCart("Dumplings", 12);
    //   });
    //   document.getElementById("moonCakes").addEventListener("click", () => {
    //     addItemToCart("Moon Cakes", 7);
    //   });
    //   document.getElementById("sesameBalls").addEventListener("click", () => {
    //     addItemToCart("Sesame Balls", 7);
    //   });
    //   document.getElementById("mangoPudding").addEventListener("click", () => {
    //     addItemToCart("Mango Pudding", 5.15);
    //   });
    //   document.getElementById("orangeJuice").addEventListener("click", () => {
    //     addItemToCart("Orange Juice", 2.99);
    //   });
    //   document.getElementById("lemonade").addEventListener("click", () => {
    //     addItemToCart("Lemonade", 2.99);
    //   });
    //   document.getElementById("sprite").addEventListener("click", () => {
    //     addItemToCart("Sprite", 2.99);
    //   });
    // }

  }

  // const addToCartAPI = (itemName, price) => {
  //   const requestData = {
  //     itemName: itemName,
  //     price: price,
  //     quantity: 1, // Initially set the quantity to 1
  //   };

  //   // API call to store the item in the database or send to the server
  //   axios
  //     .post(`${process.env.FOODAHEAD_API_URL}/orders`, requestData)
  //     .then((response) => {
  //       // If the API request is successful, you can handle the response here
  //       console.log("Item added to cart:", response.data);
  //       alert(`${itemName} added to cart`);
  //       // Optionally, you can update the UI or cart state here as well
  //       updateCartDisplay(); // Update the cart display with the latest data
  //     })
  //     .catch((error) => {
  //       console.log("Error adding item to cart:", error);
  //     });
  // };
);
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



