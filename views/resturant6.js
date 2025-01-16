import html from "html-literal";

import image1 from "url:../assets/pexels-cristian-rojas-8448331.jpg";
import image2 from "url:../assets/pexels-rachel-claire-5531160.jpg";
import image3 from "url:../assets/pexels-the-castlebar-3902897-19120336.jpg";
import image4 from "url:../assets/pexels-abhinavcoca-291528.jpg";
import image5 from "url:../assets/pexels-polina-tankilevitch-5848496.jpg";
import image6 from "url:../assets/pexels-infonautica-3533865.jpg";
import image7 from "url:../assets/pexels-asphotograpy-96620.jpg";
import image8 from "url:../assets/pexels-designbyja-1113500-2109099.jpg";
import image9 from "url:../assets/pexels-timur-weber-8679554.jpg";
import image10 from "url:../assets/Brown Beige Circle Chinese Food Logo.jpg"
import image11 from "url:../assets/pexels-anntarazevich-6937457.jpg";



export default state => html`<main>

  <div class="r6-resturant-hero">
    <div class="r6-Hero-text">
    <img src="${image10}" width="300"  height="outo"  alt="italina logo">
      <h3>↓ View Menu Below ↓</h3>
    </div>
  </div>

  <div  class="r6-AboutyUs">
    <h1>About Us</h1>
    <p>Williams Chinese resturant is a haven for lovers of authentic and diverse
       Chinese cuisine. <br> Offering a menu that captures the essence of regional specialties
    </p>

  </div>


  <section class="r6-secsec">
  <div class="r6-main">
  <div class="r6-section-title">
    <h2>Our Menu</h2>
    <p>restaurant Italian cuisine</p>
  </div>
  <div class="r6-menus">
    <div class="r6-menu-column">
      <h4>foods</h4>
      <div class="r6-single-menu">
        <img src="${image1}" alt="">
        <div class="r6-menu-content">
          <h5>Tacos <span>$18</span></h5>
          <p> Corn or flour tortillas filled with a variety of meats
            (beef, chicken, pork, or fish), vegetables, and salsas</p>
        </div>
      </div>
      <div class="r6-single-menu">
        <img src="${image2}" alt="">
        <div class="r6-menu-content">
          <h5>Enchiladas<span>$15</span></h5>
          <p> Rolled tortillas filled with meat, cheese, or beans, then
            covered in a chili sauce and baked.
          </p>
        </div>
      </div>
      <div class="r6-single-menu">
        <img src="${image3}" alt="">
        <div class="r6-menu-content">
          <h5>Mexican Rice <span>$4.99</span></h5>
          <p>combo plate with any</p>
        </div>
      </div>
    </div>

    <!-- just to knoiw the new column -->

    <div class="r6-menu-column">
              <h4>Drinks</h4>
              <div class="r6-single-menu">
                <img src="${image7}" alt="">
                <div class="r6-menu-content">
                  <h5>Orange Juice<span>$2.99</span></h5>
                  <p> Refresh your self with a Great Tasting orange juice.</p>
                </div>
              </div>
              <div class="r6-single-menu">
                <img src="${image8}" alt="">
                <div class="r6-menu-content">
                  <h5>LEMONADE<span>$2.99</span></h5>
                  <p> SQUEEZED WITH FRESH LEMONS</p>
                </div>
              </div>
              <div class="r6-single-menu">
                <img src="${image9}" alt="">
                <div class="r6-menu-content">
                  <h5>SPRITE <span>$2.99</span></h5>
                  <p> NICE COLD SPRITE</p>
                </div>
              </div>
            </div>


    <!-- New section start -->


    <div class="r6-menu-column">
      <h4>Desserts</h4>
      <div class="r6-single-menu">
        <img src="assets/pexels-tonyleong81-2092906.jpg" alt="">
        <div class="r6-menu-content">
          <h5>Shrimp Linguine<span>$60</span></h5>
          <p> covered in a lemon butter sauce that will have you licking your plate clean!</p>
        </div>
      </div>
      <div class="r6-single-menu">
        <img src="assets/pexels-enginakyurt-2260561.jpg" alt="">
        <div class="r6-menu-content">
          <h5>Garden Fresh Pizza <span>$22.99</span></h5>
          <p> All your favorite veggies together on a delightfully delicious pizza.</p>
        </div>
      </div>
      <div class="r6-single-menu">
        <img src="${image4}" alt="">
        <div class="r6-menu-content">
          <h5>Chocolate Cake<span>$11</span></h5>
          <p> Spiced with cinnamon and often served with churros</p>
        </div>
      </div>
    </div>




  </div>



</div>
</section>











</main>`;
