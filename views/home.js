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
import image13 from "url:../assets/Screenshot 2025-01-29 at 11.26.01 AM.png"




export default state => html`<main>

<div class="h-hero">


    <img src="${image1}" width="200"  height="outo" alt="logo">


    <div class="h-content">







       <h1>Your Favorite Meals, Ready When You Are</h1>
      <p>“Fast, Simple, and Convenient Pre-Ordering for Busy Foodies”</p>
      <a href="/browse" class="btn">See Resturants </a>



  </div>


</div>

<section class="h-search">
  <div class="h-search-bar">
    <input type="text" placeholder="Search for restaurants or cuisines">

  </div>
</section>


<section class="popularCuisines">

  <aside class="h-aside">
    <h2>Popular Cuisines</h2>

  </aside>
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
      <a href="/resturant4">
        <h3>Click Here</h3>

      </a>
    </div>
    <div class="h-p-card">
      <div class="H-able-5">
        <img src="${image11}" width="100"  height="outo" alt="logo">
      </div>
      <a href="/resturant5">
        <h3>Click Here</h3>

      </a>
    </div>
    <div class="h-p-card">
      <div class="H-able-6">
        <img src="${image12}" width="100"  height="outo" alt="logo">
      </div>
      <a href="/resturant3">
        <h3>Click Here</h3>

      </a>
    </div>
  </div>
  <br>
</section>



<section class="HomeAdd-Section">
  <h1>ALL NEW <br>Chinese Cuisine---></h1>
  <div class="home-iframe-stuff">
    <iframe

      src="https://www.youtube.com/embed/Qc_NsaUzBDA?autoplay=1&mute=1&loop=1&playlist=Qc_NsaUzBDA&controls=0&modestbranding=1&rel=0
"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
</div>
<div class="add-banner-home">
  <img src="${image3}" width="100"  height="" alt="logo">

  <img src="${image13}" width="500"  height="200" alt="logo">
  <div class="home-banner">


    <a class="button-homer2 " href="/resturant5"><--CHECK US OUT</a>
    <p>"A haven for lovers of authentic and diverse Chinese Food"</p>


  </div>




</div>






</section>









<section class="testimonial">
  <h1>HERE IS WHAT PEOPLE ARE SAYING ABOUT FOODAHEAD</h1>
  <div class="image-slider">
    <div class="image-item">
      <img src="${image6}" alt="image1">
    </div>
    <div class="image-item">
      <img src="${image7}" alt="image1">
    </div>
    <div class="image-item">
      <img src="${image8}" alt="image1">
    </div>
    <div class="image-item">
      <img src="${image9}" alt="image1">
    </div>
    <div class="image-item">
      <img src="${image10}" alt="image1">
    </div>
  </div>


</section>





<div class="dotted-line">50% off on first Orders</div>
</main>`;
