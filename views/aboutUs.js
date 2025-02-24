import html from "html-literal";
import pictureOfMe from "../assets/IMG_3825.jpeg";
import logo from "url:../assets/Untitled_design-removebg-preview.png";



export default () => html`<main>

<div class="Statement">
<div class="sonk">

    <img src="${logo}" alt="logo" width="100" height="auto">
    <p>“Find Your Perfect Meal, Order Ahead, and Enjoy”</p>

</div>


   <h1>About Us</h1>

  <p> FoodAhead lets you skip the wait and order ahead from
   top-rated 4-star restaurants, ensuring your meal is ready
   exactly when you arrive. <br>With personalized recommendations,
   dietary options, and real-time tracking, we make dining faster,
   easier, and more enjoyable <br>—on your schedule.

  </p>
</div>

</div>
<div class="CEO">
<h3>William Ngumo</h3>
<p>Founder & CEO</p>
<img class="pictureOfMe" src="${pictureOfMe}" />
<p>William has been passionate about building a website that eases the stress
  of dining at your favorite high-end restaurant. <br>Revolutionizing
  the food industry, he is bringing convenience and quality together to create
  an amazing experience for food lovers <br> everywhere.
</p>
 </div>

 <div class="dotted-line">50% off your first order</div>
</main>`;
