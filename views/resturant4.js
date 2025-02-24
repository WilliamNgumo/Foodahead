import html from "html-literal";

import Image1 from "url:../assets/pexels-plantsandgraphics-7449105.jpg";
import image2 from "url:../assets/pexels-marvin-ozz-1297854-2474661.jpg";
import image3 from "url:../assets/pexels-everest-tandoori-1591826630-28125427.jpg";
import image4 from "url:../assets/pexels-rohanbatra-20642812.jpg";
import image5 from "url:../assets/pexels-divigraphy-8788869.jpg";
import image6 from "url:../assets/pexels-lara-jameson-8887054.jpg";
import image7 from "url:../assets/pexels-asphotograpy-96620.jpg";
import image8 from "url:../assets/pexels-designbyja-1113500-2109099.jpg";
import image9 from "url:../assets/pexels-timur-weber-8679554.jpg";
import image10 from "url:../assets/Green And Maroon Retro Royal Indian Food Restaurant Batch Logo (1).jpg";
import image11 from "url:../assets/pexels-thirdman-8489798.jpg";



export default state => html`<main>

  <div class="r4-resturant-hero">
    <div class="r4-Hero-text">
    <img src="${image10}" width="300"  height="auto"  alt="italina logo">
      <h3>↓ View Menu Below ↓</h3>
    </div>
  </div>

  <div  class="r4-AboutyUs">
  <h1>About Us</h1>
  <p>Wills INDI Cuisine is Known for its authentic recipes and warm hospitality,
    the resturant offers a diverse menu <br>that caters to every palate. From aromatic
    biryanis and creamy butter chicken to flavorful vegetarian delights
  </p>

</div>


<section class="r4-backback">
  <div class="">

  </div>

  <div class="r4-main">

  <div class="r4-section-title">
    <h2>Our Menu</h2>
    <p>Restaurant Italian cuisine</p>
  </div>
  <div class="r4-menus">
    <img src="${image11}" width="300"  height="500px"  alt="Italian logo">
    <div class="r4-menu-column">
      <h4>food</h4>
      <div class="r4-single-menu">
        <img src="${image2}" alt="">
        <div class="r4-menu-content">
          <h5>Bread With Soup <span>$10.99</span></h5>
          <p> Bread With Soup special</p>
        </div>
      </div>
      <div class="r4-single-menu">
        <img src="${image3}" alt="">
        <div class="r4-menu-content">
          <h5>Tarkari plate<span>$25</span></h5>
          <p> delicious Naan Roti & Tarkari </p>
        </div>
      </div>
      <div class="r4-single-menu">
        <img src="${image4}" alt="">
        <div class="r4-menu-content">
          <h5>Rice with Chicken <span>$15.99</span></h5>
          <p>Yellow Rice With Crispy Chicken</p>
        </div>
      </div>
    </div>

    <!-- just to knoiw the new column -->

    <div class="r4-menu-column">
      <h4>Desserts</h4>
      <div class="r4-single-menu">
        <img src="${Image1}" alt="">
        <div class="r4-menu-content">
          <h5>Gulab Jamun<span>$12.89</span></h5>
          <p>Deep-fried milk balls soaked in sugar syrup.</p>
        </div>
      </div>
      <div class="r4-single-menu">
        <img src="${image5}" alt="">
        <div class="r4-menu-content">
          <h5>Rasgulla <span>6.99</span></h5>
          <p>Spongy cheese balls in light sugar syrup.</p>
        </div>
      </div>
      <div class="r4-single-menu">
        <img src="${image6}" alt="">
        <div class="r4-menu-content">
          <h5>Jalebi<span>$5.15</span></h5>
          <p> Crispy, syrup-soaked spiral-shaped dessert.</p>
        </div>
      </div>
    </div>


    <!-- New section start -->


     <div class="r4-menu-column">
          <h4>Drinks</h4>
          <div class="r4-single-menu">
            <img src="${image7}" alt="">
            <div class="r4-menu-content">
              <h5>Orange Juice<span>$2.99</span></h5>
              <p> Refresh yourself with a Great Tasting orange juice.</p>
            </div>
          </div>
          <div class="r4-single-menu">
            <img src="${image8}" alt="">
            <div class="r4-menu-content">
              <h5>LEMONADE<span>$2.99</span></h5>
              <p> SQUEEZED WITH FRESH LEMONS</p>
            </div>
          </div>
          <div class="r4-single-menu">
            <img src="${image9}" alt="">
            <div class="r4-menu-content">
              <h5>SPRITE <span>$2.99</span></h5>
              <p> NICE COLD SPRITE</p>
            </div>
          </div>
        </div>




  </div>
</section>


</div>













</main>`;
