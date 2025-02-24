import html from "html-literal";



import pic2 from "url:../assets/Red Illustrative Burger Food Logo.jpg"
import pic3 from "url:../assets/pexels-valeriya-580612.jpg"
import pic4 from "url:../assets/pexels-gezerasph-23910872.jpg"
import pic5 from "url:../assets/pexels-jonathanborba-2983104.jpg"
import pic6 from "url:../assets/pexels-sandeep-joy-478521273-15838896.jpg"
import pic7 from "url:../assets/pexels-tom-davis-2148511154-30146296.jpg"
import pic8 from "url:../assets/pexels-jonathanborba-2983101.jpg"
import pic9 from "url:../assets/pexels-designbyja-1113500-2109099.jpg"
import pic10 from "url:../assets/pexels-timur-weber-8679554.jpg"
import pic11 from "url:../assets/pexels-enginakyurt-1672304.jpg"



export default state => html`<main class= "r2-main-Back">


<div class="r2-resturant-hero">

  <div class="r2-Hero-text">
    <img src="${pic2}" width="200"  height="auto"  alt="logo">

    <h1>"i'm into fitness...fitness whole burger in my mouth."</h1>
    <h3>↓ View Menu Below ↓</h3>

  </div>
</div>

<div class="r2-AboutyUs">

  <h1>About Us</h1>
  <p>Williams Burger Joint is a casual and vibrant eatery dedicated to serving up mouthwatering burgers and
     fresh fries. Known for its warm, inviting atmosphere,
     Williams Burger Joint is the go-to spot for anyone craving a hearty meal and a welcoming vibe.
  </p>

</div>

<div>
  <!-- <video autoplay muted loop class="r1-vid">
    <source src="assets/8030857-hd_1920_1080_30fps.mp4" type="video/mp4">
  </video> -->



</div>








<div class="r2-main">
  <div class="r2-section-title">
    <h2>Our Menu</h2>
    <p>Williams Burger Joint</p>
  </div>
  <div class="r2-menus">
    <div class="r2-menu-column">
      <h4>BURGERS</h4>
      <div class="r2-single-menu">
        <img src="${pic3}" alt="">
        <div class="r2-menu-content">
          <h5>The Side Chick<span>$32</span></h5>
          <p> HOT SMOKEY AND WILL GET YOU IN TROUBLE!</p>
        </div>
      </div>
      <div class="r2-single-menu">
        <img src="${pic4}" alt="">
        <div class="r2-menu-content">
          <h5>The Real Man<span>$50</span></h5>
          <p> HAND  PATTIED SO HIGH YOU MIGHT CHOKE!.</p>
        </div>
      </div>
      <div class="r2-single-menu">
        <img src="${pic5}" alt="">
        <div class="r2-menu-content">
          <h5>The Hell Is That <span>$44</span></h5>
          <p>REFRESH YOUR SELF WITH...THE HELL IS THAT?</p>
        </div>
      </div>
    </div>

    <!-- just to knoiw the new column -->

    <div class="r2-menu-column">
      <h4>SIDES</h4>
      <div class="r2-single-menu">
        <img src="${pic6}" alt="">
        <div class="r2-menu-content">
          <h5>LOADED FRIES<span>$12.99</span></h5>
          <p>LOADED FRIES WITH CHEESE, ONIONS, KETCHUP AND MORE</p>
        </div>
      </div>
      <div class="r2-single-menu">
        <img src="${pic7}" alt="">
        <div class="r2-menu-content">
          <h5>LOADED BAKED POTATO<span>$12.99</span></h5>
          <p> LOADED BAKED POTATO with EVERYTHING</p>
        </div>
      </div>
      <h4>THE SPECIAL MEAL</h4>
      <div class="r2-single-menu">
        <img src="${pic8}" alt="">
        <div class="r2-menu-content">
          <h5>THE TOTAL PACKAGE<span>$50</span></h5>
          <p> GET THE BURGER AND THE FRIES FOR LESS YUP THATS TRUE.....SIKE</p>
        </div>
      </div>
    </div>


    <!-- New section start -->


    <div class="r2-menu-column">
      <h4>DRINKS</h4>
      <div class="r2-single-menu">
        <img src="${pic9}" alt="">
        <div class="r2-menu-content">
          <h5>LEMONADE<span>$2.99</span></h5>
          <p>SQUEEZED WITH FRESH LEMONS</p>
        </div>
      </div>
      <div class="r2-single-menu">
        <img src="${pic10}" alt="">
        <div class="r2-menu-content">
          <h5>SPRITE<span>$2.99</span></h5>
          <p> NICE COLD SPRITE.</p>
        </div>
      </div>
      <div class="r2-single-menu">
        <img src="${pic11}" alt="">
        <div class="r2-menu-content">
          <h5>THE FRENEMY<span>$6.99</span></h5>
          <p> NICE COLD BUDLIGHT.</p>
        </div>
      </div>
    </div>




  </div>



</div>











</main>`;
