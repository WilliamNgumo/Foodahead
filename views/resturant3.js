import html from "html-literal";

import image1 from "url:../assets/pexels-shameel-mukkath-3421394-17320982.jpg";
import image2 from "url:../assets/pexels-change-c-c-974768353-30120290.jpg";
import image3 from "url:../assets/pexels-1155579-2410602.jpg";
import image4 from "url:../assets/pexels-vanmalidate-842142.jpg";
import image5 from "url:../assets/pexels-valeriya-1148086.jpg";
import image6 from "url:../assets/pexels-pixabay-248444.jpg";
import image7 from "url:../assets/pexels-asphotograpy-96620.jpg";
import image8 from "url:../assets/pexels-designbyja-1113500-2109099.jpg";
import image9 from "url:../assets/pexels-timur-weber-8679554.jpg";
import image10 from "url:../assets/Red and Black Illustration Typography Lobster Seafood Restaurant Logo.jpg"








export default state => html`<main>


<div class="r3-resturant-hero">
  <div class="r3-Hero-text">
  <img src="${image10}" width="300"  height="auto"  alt="italina logo">
    <h3>↓ View Menu Below ↓</h3>
  </div>
</div>

<div  class="r3-AboutyUs">
  <h1>About Us</h1>
  <p>Williams Seafood Cuisine is a culinary haven specializing in fresh,
     flavorful seafood dishes that celebrate the ocean's bounty.<br> Known for
      its exquisite attention to detail and creative menu, the restaurant
      offers a wide variety of dishes, from classic favorites like grilled
      salmon and shrimp scampi to innovative creations that blend global flavors.
  </p>

</div>



<section class="r3-clcl">
  <div class="r3-main">
    <div class="r3-section-title">
      <h2>Our Menu</h2>
      <p>restaurant Italian cuisine</p>
    </div>
    <div class="r3-menus">
      <div class="r3-menu-column">
        <h4>Specials</h4>
        <div class="r3-single-menu">
          <img src="${image1}" alt="">
        <div class="r3-menu-content">
          <h5>SEAFOOD CUP <span>$25.99</span></h5>
          <p>Enjoy The Cup With Amazing taste.</p>
        </div>
      </div>
      <div class="r3-single-menu">
        <img src="${image2}" alt="">
        <div class="r3-menu-content">
          <h5>SEAFOOD OVERLOAD <span>$50</span></h5>
          <p> Spicy Seafood Soup with Fresh Shellfish.</p>
        </div>
      </div>
      <div class="r3-single-menu">
        <img src="${image3}" alt="">
        <div class="r3-menu-content">
          <h5>SEAFOOD BOIL <span>$70</span></h5>
          <p>Refresh yourself with some yummy Seafood BOIL.</p>
        </div>
      </div>
    </div>

    <!-- just to know the new column -->

    <div class="r3-menu-column">
      <h4>FISH-BASED</h4>
      <div class="r3-single-menu">
        <img src="${image4}" alt="">
        <div class="r3-menu-content">
          <h5>Grilled Salmon<span>$30</span></h5>
          <p> Grilled Salmon Fish on Top of Grilled Vegetables</p>
        </div>
      </div>
      <div class="r3-single-menu">
        <img src="${image5}" alt="">
        <div class="r3-menu-content">
          <h5>SUSHI<span>$23.99</span></h5>
          <p> THREE Suchi Rolls</p>
        </div>
      </div>
      <div class="r3-single-menu">
        <img src="${image6}" alt="">
        <div class="r3-menu-content">
          <h5>SUSHI PLATE <span>$24.99</span></h5>
          <p> Delicious Sushi BlowUp plate!</p>
        </div>
      </div>
    </div>


    <!-- New section start -->


    <div class="r3-menu-column">
      <h4>Drinks</h4>
      <div class="r3-single-menu">
        <img src="${image7}" alt="">
        <div class="r3-menu-content">
          <h5>Orange Juice<span>$2.99</span></h5>
          <p> Refresh your self with a Great Tasting orange juice.</p>
        </div>
      </div>
      <div class="r3-single-menu">
        <img src="${image8}" alt="">
        <div class="r3-menu-content">
          <h5>LEMONADE<span>$2.99</span></h5>
          <p> SQUEEZED WITH FRESH LEMONS</p>
        </div>
      </div>
      <div class="r3-single-menu">
        <img src="${image9}" alt="">
        <div class="r3-menu-content">
          <h5>SPRITE <span>$2.99</span></h5>
          <p> NICE COLD SPRITE</p>
        </div>
      </div>
    </div>




  </div>



</div>
</section>











</main>`;
