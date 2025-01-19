import html from "html-literal";

import image1 from "url:../assets/pexels-chevanon-312418.jpg"
import image2 from "url:../assets/pexels-pixabay-50593.jpg"
import image3 from "url:../assets/pexels-asphotograpy-96620.jpg"
import image4 from "url:../assets/pexels-layyana-sheridean-1477746-2846337.jpg"
import image5 from "url:../assets/pexels-abhinavcoca-291528.jpg"
import image6 from "url:../assets/pexels-nishantaneja-2955820.jpg"
import image7 from "url:../assets/pexels-tonyleong81-2092906.jpg"
import image8 from "url:../assets/pexels-enginakyurt-2260561.jpg"
import image9 from "url:../assets/pexels-alleksana-5949888.jpg"
import image10 from "url:../assets/Navy Blue and Cream Italian Restaurant Logo (1).jpg"



export default state => html`<main class="doctor">




<div class="resturant-hero">
  <div class="Hero-text">
  <img src="${image10}" width="200"  height="outo"  alt="italina logo">
    <h1>Williams Italian</h1>
    <p>"Questo piatto è magico."</p>
    <h3>↓ View Menu Below ↓</h3>
  </div>
</div>

<div  class="r1-AboutyUs" img src=>
  <h1>About Us</h1>
  <p>William's Italian Restaurant is a true celebration of Italy's rich culinary traditions.
    Nestled in a charming, inviting setting, the restaurant transports diners <br>straight to the
    heart of Italy with its warm ambiance, authentic flavors, and impeccable hospitality. The
    menu is a delightful journey through Italy’s diverse regions, featuring handcrafted pasta,
    wood-fired pizzas, fresh seafood, and decadent desserts, all made with <br>the finest ingredients.
    Whether you're savoring a classic Margherita pizza or indulging in a creamy tiramisu, every
    dish is prepared with passion and precision. Perfect for romantic evenings, family gatherings,
    or casual lunches, William's Italian Restaurant offers an unforgettable dining experience that
    captures the magic of Italian cuisine. Buon appetito!
  </p>

</div>

<div class="iframe-stuff">
    <iframe

      src="https://www.youtube.com/embed/8CYCS8T_g14?autoplay=1&mute=1&loop=1&playlist=8CYCS8T_g14&controls=0&modestbranding=1&rel=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>



</div>

</div>




  <div class="r1-main">
  <div class="r1-section-title">
    <h2>Our Menu</h2>
    <p>restaurant Italian cuisine</p>
  </div>
  <div class="r1-menus">
    <div class="r1-menu-column">
      <h4>Drinks</h4>
      <div class="r1-single-menu">
        <img src="${image1}" alt="">
        <div class="r1-menu-content">
          <h5>coffee <span>$4.99</span></h5>
          <p> Savor nutmeg, cinnamon, ginger, and sweetly spiced pumpkin</p>
        </div>
      </div>
      <div class="r1-single-menu">
        <img src="${image2}" alt="">
        <div class="r1-menu-content">
          <h5>Coca Cola <span>$2.99</span></h5>
          <p> Enjoy the crisp and refreshing taste of Coca‑Cola Original.</p>
        </div>
      </div>
      <div class="r1-single-menu">
        <img src="${image3}" alt="">
        <div class="r1-menu-content">
          <h5>orange juice <span>$1.99</span></h5>
          <p>Refresh your self with a Great Tasting orange juice.</p>
        </div>
      </div>
    </div>

    <!-- just to knoiw the new column -->

    <div class="r1-menu-column">
      <h4>Desserts</h4>
      <div class="r1-single-menu">
        <img src="${image4}" alt="">
        <div class="r1-menu-content">
          <h5>Chocolate Fudge Brownie ice cream<span>$12.99</span></h5>
          <p> chocolate non-dairy frozen dessert with fabulously fudgy chocolate brownies</p>
        </div>
      </div>
      <div class="r1-single-menu">
        <img src="${image5}" alt="">
        <div class="r1-menu-content">
          <h5>Black Forest Cake <span>$35</span></h5>
          <p> rich chocolate ganache, and sweet spiked cherries</p>
        </div>
      </div>
      <div class="r1-single-menu">
        <img src="${image6}" alt="">
        <div class="r1-menu-content">
          <h5>Chocolate Glazed Donuts <span>$5.99</span></h5>
          <p> yeast donuts with chocolate frosting are so chocolatey and delicious!</p>
        </div>
      </div>
    </div>


    <!-- New section start -->


    <div class="r1-menu-column">
      <h4>foods</h4>
      <div class="r1-single-menu">
        <img src="${image7}" alt="">
        <div class="r1-menu-content">
          <h5>Shrimp Linguine<span>$60</span></h5>
          <p> covered in a lemon butter sauce that will have you licking your plate clean!</p>
        </div>
      </div>
      <div class="r1-single-menu">
        <img src="${image8}" alt="">
        <div class="r1-menu-content">
          <h5>Garden Fresh Pizza <span>$22.99</span></h5>
          <p> All your favorite veggies together on a delightfully delicious pizza.</p>
        </div>
      </div>
      <div class="r1-single-menu">
        <img src="${image9}" alt="">
        <div class="r1-menu-content">
          <h5>Lasagna <span>$50</span></h5>
          <p> Layers of pasta sheets with béchamel sauce, meat ragù, and cheese.</p>
        </div>
      </div>
    </div>




  </div>



</div>











</main>`;
