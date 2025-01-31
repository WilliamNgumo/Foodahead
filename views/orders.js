import html from "html-literal";
import * as store from "../store";

function countdown() {
  let timeLimitInMinutes = 10;
  let timeLimitInSeconds = timeLimitInMinutes * 60;
  console.log("checking for timeLimiotsInMinutes", timeLimitInMinutes);

  function startTimer() {
    console.log("checking");

    timeLimitInSeconds--;
    let minutes = Math.floor(timeLimitInSeconds / 60);
    let seconds = timeLimitInSeconds % 60;

    if (timeLimitInSeconds < 0) {
      clearInterval(timerInterval);
      return '00:00';
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    let timerString = minutes + " &#58; " + seconds;
    console.log(timerString);
    return (timerString.toString());
  }
  let timerInterval = setInterval(startTimer, 1000);

}




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
      <td> ${state.totalMinutes} </td>
      <td><span id="timer">${countdown()}</span></td>

    </tr>



</table>




<!-- <div class="dotted-line">50% off on first Orders</div> -->
</main>`;
