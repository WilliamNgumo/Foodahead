import html from "html-literal";
import image1 from "url:../assets/Untitled_design-removebg-preview.png";
import image2 from "url:../assets/Red Illustrative Burger Food Logo.jpg";
import image3 from "url:../assets/Brown Beige Circle Chinese Food Logo.jpg";
import image4 from "url:../assets/Navy Blue and Cream Italian Restaurant Logo (1).jpg"
import image5 from "url:../assets/Green And Maroon Retro Royal Indian Food Restaurant Batch Logo (1).jpg"
import image6 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post .jpg"
import image7 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post  (1).jpg"
import image8 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post  (2).jpg"
import image9 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post  (3).jpg"
import image10 from "url:../assets/White Elegant Minimalist Testimonial For Women's Business Instagram Post  (4).jpg"
import image11 from "url:../assets/Orange White Modern Tacos Illustrative Mexican Food Logo.jpg"
import image12 from "url:../assets/Red and Black Illustration Typography Lobster Seafood Restaurant Logo.jpg"




export default () => html`<main>
  <div class="browse-container">
      <h1>--->See Popular !Resturants!
    </h1>

      <!-- <aside class="b-filter">
        <label for="b-category">Filter:</label>
        <select id="b-category">
          <option value="italian">Italian</option>
          <option value="steak-houses">Steak Houses</option>
          <option value="etc">Etc</option>
        </select>

      </aside> -->

      <section class="b-card">
        <div class="h-card">
            <div class="h-p-card">
              <div class="H-able-1">
              <img src="${image4}" width="100"  height="outo" alt="logo">
              </div>
              <a href="/resturant1">
                  <h3>Click Here</h3>

                </a>
            </div>
            <div class="h-p-card">
              <div class="H-able-2">
                <img src="${image2}" width="100"  height="outo" alt="logo">
              </div>
              <a href="/resturant2">

                <h3>Click here</h3>

              </a>
            </div>

            <div class="h-p-card">
              <div class="H-able-3">
                <img src="${image3}" width="100"  height="outo" alt="logo">
              </div>
              <a href="/resturant5">
                <h3>Click Here</h3>

              </a>
            </div>
            <div class="h-p-card">
              <div class="H-able-4">
                <img src="${image5}" width="100"  height="outo" alt="logo">

              </div>
              <a href="/resturant2">
                <h3>Click Here</h3>

              </a>
            </div>
            <div class="h-p-card">
              <div class="H-able-5">
                <img src="${image11}" width="100"  height="outo" alt="logo">
              </div>
              <a href="/resturant2">
                <h3>Click Here</h3>

              </a>
            </div>
            <div class="h-p-card">
              <div class="H-able-6">
                <img src="${image12}" width="100"  height="outo" alt="logo">
              </div>
              <a href="/resturant2">
                <h3>Click Here</h3>

              </a>
            </div>
          </div>



      </section>









    </div>









<div class="dotted-line">50% off on first Orders</div>
</main>`;
