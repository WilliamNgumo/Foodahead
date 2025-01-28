import html from "html-literal";
import * as store from "../store";

export default state => html`<main>
<table id="">
  <tr>
    <th>itemName</th>
    <th>price</th>
  </tr>
  ${state.completedOrder
    .map(MenuItem => {
      return `<tr><td>${MenuItem.itemName}</td><td>${MenuItem.price}</td><td>`;
    })
    .join("")}


</table>




<!-- <div class="dotted-line">50% off on first Orders</div> -->
</main>`;
