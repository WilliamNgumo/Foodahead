import html from "html-literal";

import image1 from "url:../assets/pexels-tonliendo-11394966.jpg";
import image2 from "url:../assets/pexels-rdne-6646363.jpg";
import image3 from "url:../assets/pexels-n-voitkevich-9863693.jpg";
import image4 from "url:../assets/pexels-horizon-content-2100060-3727196.jpg";
import image5 from "url:../assets/pexels-polina-tankilevitch-5848496.jpg";
import image6 from "url:../assets/pexels-infonautica-3533865.jpg";
import image7 from "url:../assets/pexels-asphotograpy-96620.jpg";
import image8 from "url:../assets/pexels-designbyja-1113500-2109099.jpg";
import image9 from "url:../assets/pexels-timur-weber-8679554.jpg";
import image10 from "url:../assets/Brown Beige Circle Chinese Food Logo.jpg"
import image11 from "url:../assets/pexels-anntarazevich-6937457.jpg";






export default state => html`<main>
  <div id="loadingPopup" class="loading-popup">
  <div class="loading-content">
    <p>Loading, please wait...</p>
  </div>
</div>



<div class="r5-resturant-hero">
  <div class="r5-Hero-text">
  <img src="${image10}" width="300"  height="auto" loading="lazy" alt="italina logo">
    <h3>↓ View Menu Below ↓</h3>
  </div>
</div>

<div  class="r5-AboutyUs">
  <h1>About Us</h1>
  <p>Williams Chinese resturant is a haven for lovers of authentic and diverse
     Chinese cuisine. <br> Offering a menu that captures the essence of regional specialties
  </p>

</div>


<section class="r5-secsec">
  <div class="r5-main">
  <div class="r5-section-title">
    <h2>Our Menu</h2>
    <p>Restaurant Italian cuisine</p>
  </div>
  <div class="r5-menus">
    <!-- <img src="${image11}" width="300"  height="500px"  alt="italina logo"> -->

    <div class="r5-menu-column">
      <h4>Foods</h4>
      <div class="r5-single-menu">
        <img src="${image4}" loading="lazy" alt="">
        <div class="r5-menu-content">
          <h5> <div id="" >Fried Rice</div> <span>$14</span></h5>
          <p> Stir-fried rice mixed with vegetables, eggs, and sometimes meat or seafood.</p>
          <input id="friedRice" class="menuItem" name="input" type="button" value="Add To Cart"/>

        </div>



      </div>


      <div class="r5-single-menu">
        <img src="${image5}" loading="lazy" alt="">
        <div class="r5-menu-content">
          <h5>Lo Mein  <span>$15</span></h5>
          <p>Stir-fried noodles tossed with vegetables and protein in a savory sauce.</p>
          <input id="loMein" class="menuItem" name="input" type="button" value="Add To Cart"/>
        </div>
      </div>
      <div class="r5-single-menu">
        <img src="${image6}" loading="lazy" alt="">
        <div class="r5-menu-content">
          <h5>Dumplings <span>$12</span></h5>
          <p>Wrappers filled with meat, seafood, or vegetables, either steamed, boiled, or fried.</p>
          <input id="dumplings" class="menuItem" name="input" type="button" value="Add To Cart"/>
        </div>
      </div>

    </div>

    <!-- just to knoiw the new column -->

    <div class="r5-menu-column">
      <h4>Desserts</h4>
      <div class="r5-single-menu">
        <img src="${image3}" loading="lazy" alt="">
        <div class="r5-menu-content">
          <h5>Mooncakes<span>$7</span></h5>
          <p>Traditional pastries with sweet or savory fillings, especially popular during the</p>
          <input id="moonCakes" class="menuItem" name="input" type="button" value="Add To Cart"/>
        </div>
      </div>
      <div class="r5-single-menu">
        <img src="${image2}" loading="lazy" alt="">
        <div class="r5-menu-content">
          <h5>Sesame Balls<span>$7</span></h5>
          <p> Fried balls filled with red bean paste, coated in sesame seeds.</p>
          <input id="sesameBalls" class="menuItem" name="input" type="button" value="Add To Cart"/>
        </div>
      </div>
      <div class="r5-single-menu">
        <img src="${image1}" loading="lazy" alt="">
        <div class="r5-menu-content">
          <h5>Mango Pudding<span>$5.15</span></h5>
          <p> A creamy, sweet dessert made with mango puree and milk.</p>
          <input id="mangoPudding" class="menuItem" name="input" type="button" value="Add To Cart"/>
        </div>
      </div>
    </div>


    <!-- New section start -->


     <div class="r5-menu-column">
          <h4>Drinks</h4>
          <div class="r5-single-menu">
            <img src="${image7}" loading="lazy" alt="">
            <div class="r5-menu-content">
              <h5>Orange Juice<span>$2.99</span></h5>
              <p> Refresh yourself with a Great Tasting orange juice.</p>
              <input id="orangeJuice" class="menuItem" name="input" type="button" value="Add To Cart"/>
            </div>
          </div>
          <div class="r5-single-menu">
            <img src="${image8}" loading="lazy" alt="">
            <div class="r5-menu-content">
              <h5>LEMONADE<span>$2.99</span></h5>
              <p> SQUEEZED WITH FRESH LEMONS</p>
              <input id="lemonade" class="menuItem" name="input" type="button" value="Add To Cart"/>
            </div>
          </div>
          <div class="r5-single-menu">
            <img src="${image9}" loading="lazy" alt="">
            <div class="r5-menu-content">
              <h5>SPRITE <span>$2.99</span></h5>
              <p> NICE COLD SPRITE</p>
              <input id="sprite" class="menuItem" name="input" type="button" value="Add To Cart"/>
            </div>
          </div>
        </div>





  </div>
  <form id="order">

    <input id="submitButton" type="submit" name="submit" value="Submit order" />


  </form>



</section>





</div>












</main>`;
