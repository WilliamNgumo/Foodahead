import html from "html-literal";
import pictureOfMe from "../assets/IMG_3825.jpeg";
import logo from "url:../assets/Untitled_design-removebg-preview.png";



export default () => html`<main>

<div class="Statement">
<div class="sonk">

    <img src="${logo}" alt="picture of me" width="100" height="auto">
    <p>“Find Your Perfect Meal, OrderAhead, Enjoy”</p>

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
<p>William has been Pationate about building a website that Eases the Stress
  of dining in at your favorite high-end resturant. <br>Revolutionizing
  the food industry, brining convenience and quality together to create
  an amazing experience for food lovers <br> EVERYWHERE.
</p>
 </div>

 <div class="dotted-line">50% off on first Orders</div>
</main>`;
