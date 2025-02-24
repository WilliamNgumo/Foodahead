import html from "html-literal";
import image1 from "url:../assets/Untitled_design-removebg-preview.png";
import image2 from "url:../assets/Red Illustrative Burger Food Logo.jpg";
import image3 from "url:../assets/Brown Beige Circle Chinese Food Logo.jpg";
import image4 from "url:../assets/Navy Blue and Cream Italian Restaurant Logo (1).jpg";
import image5 from "url:../assets/Green And Maroon Retro Royal Indian Food Restaurant Batch Logo (1).jpg";
import image6 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post .jpg";
import image7 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post  (1).jpg";
import image8 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post  (2).jpg";
import image9 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post  (3).jpg";
import image10 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post  (4).jpg";
import image11 from "url:../assets/Orange White Modern Tacos Illustrative Mexican Food Logo.jpg";
import image12 from "url:../assets/Red and Black Illustration Typography Lobster Seafood Restaurant Logo.jpg";
import image13 from "url:../assets/Orange White Modern Tacos Illustrative Mexican Food Logo.jpg";
import image14 from "url:../assets/Red and Black Illustration Typography Lobster Seafood Restaurant Logo.jpg";




export default () => html`<main>

<div class="resturant-browse">
  <!-- <h1>Browsw Our resturants</h1> -->

  <section class="resturant-cards">
  <div class="resturant-card">
      <img src="${image3}" alt="resturant 2">
      <div class="resturant-info">
        <h3>Williams Chinese</h3>
        <p>A haven for lovers of authentic and diverse Food. </p>
        <a href="/resturant5">
        <h3>Click Here</h3>

      </a>
      </div>
    </div>

    <div class="resturant-card">
      <img src="${image2}" alt="resturant 2">
      <div class="resturant-info">
        <h3>William's Burger </h3>
        <p>Dedicated to mouthwatering burgers and fresh fries.</p>
        <a href="/resturant2">
        <h3>Click here</h3>

      </a>
      </div>
    </div>

    <div class="resturant-card">
      <img src="${image5}" alt="resturant 3">
      <div class="resturant-info">
        <h3>Wills Indi Cuisine</h3>
        <p>Known for its authentic recipes and warm hospitality.</p>
        <a href="/resturant4">
        <h3>Click Here</h3>
      </a>
      </div>
    </div>

    <div class="resturant-card">
      <img src="${image4}" alt="resturant 4">
      <div class="resturant-info">
        <h3>William's Italian</h3>
        <p>A true celebration of Italy's rich culinary traditions. </p>
        <a href="/resturant1">
          <h3>Click Here</h3>
        </a>
      </div>
    </div>

    <div class="resturant-card">
      <img src="${image13}" alt="resturant 4">
      <div class="resturant-info">
        <h3>William's Tacoz</h3>
        <p>A haven for lovers of authentic and diverse Mexican cuisine.</p>
        <a href="/resturant6">
        <h3>Click Here</h3>
      </a>
      </div>
    </div>

    <div class="resturant-card">
      <img src="${image12}" alt="resturant 4">
      <div class="resturant-info">
        <h3>Will's SeaFood</h3>
        <p>A seafood lover's paradise, specializing in fresh and flavorful dishes.</p>
        <a href="/resturant3">
        <h3>Click Here</h3>
      </a>
      </div>
    </div>


  </section>


<div class="dotted-line">50% off your first order</div>
</main>`;
