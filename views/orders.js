import html from "html-literal";
import * as store from "../store";

// let minuteCountDown = store.orders.totalMinutes;
// let secondCountDown = minuteCountDown * 60;
// let timer = document.getElementById('timer');
// console.log(timer);
// setInterval(()=> {
//   secondCountDown--;
//   let minutes = Math.floor(secondCountDown / 60)
//   let seconds = secondCountDown % 60;
//   console.log(typeof minutes);
//   if (minutes < 10) {
//     minutes = '0' + minutes;
//   }
//   if (seconds < 10) {
//     seconds = '0' + seconds;
//   }
//   timer.textContent = minutes + ':' + seconds;

// }, 1000)



export default state => html`<main>
<table id="table-s">
  <tr>
    <th>itemName</th>
    <th>price</th>
  </tr>
  ${state.completedOrder
    .map(MenuItem => {
      return `<tr><td>${MenuItem.itemName}</td><td>${MenuItem.price}</td><td>`;
    })
    .join("")}

    <tr>
     <th>total</th>
     <th>totalMinutes</th>
    </tr>

    <tr>

      <td> ${state.total} </td>
      <td><span id="timer"></span></td>

    </tr>



</table>




<!-- <div class="dotted-line">50% off on first Orders</div> -->
</main>`;
