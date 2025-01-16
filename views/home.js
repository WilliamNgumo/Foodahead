import html from "html-literal";
import heroVideo from "url:../assets/3296402-uhd_4096_2160_25fps.mp4";
import image1 from "url:../assets/Untitled_design-removebg-preview.png";
import image2 from "url:../assets/Red Illustrative Burger Food Logo.jpg";
import image3 from "url:../assets/Screenshot 2025-01-15 at 11.39.27 AM.png"


export default state => html`<main>

<!-- <h3>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
  </h3> -->
<div class="h-hero">

  <!-- <video autoplay muted loop playsinline class="hero-video">
      <source src="${heroVideo}" type= video/mp4 />
      <source src="assets/3296402-uhd_4096_2160_25fps.mp4" type="video/webm">
      Your browser does not support the video tag.
    </video> -->
    <img src="${image1}" width="200"  height="outo" alt="logo">


    <div class="h-content">

    <!-- <video class="h-video" autoplay muted loop controls>
      <source src="assets/3296402-uhd_4096_2160_25fps.mp4" type="video/mp4">

      </video> -->





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
      <!-- <div class="r2-cartdimg"> -->
        <a href="/resturant2">
          <h3>Restaurant Name</h3>
          <p>Description or details here</p>
        </a>
      <!-- </div> -->
    </div>
    <div class="h-p-card">
      <img src="${image2}" width="100"  height="outo" alt="logo">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>
        <p>Description or details here</p>

      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>
        <p>Description or details here</p>
      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>
        <p>Description or details here</p>
      </a>
    </div>
  </div>
</section>
<br>

<section class="HomeAdd-Section">
  <h1>ALL NEW <br>BURGER JOINT---></h1>
  <div class="home-iframe-stuff">
    <iframe

      src="https://www.youtube.com/embed/tomtZEiwRUQ?autoplay=1&mute=1&loop=1&playlist=tomtZEiwRUQ&controls=0&modestbranding=1&rel=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
</div>
<div class="add-banner-home">
  <img src="${image2}" width="100"  height="" alt="logo">


  <div class="home-banner">
    <img src="${image3}" width="600"  height="400" alt="logo">
    <a class="button-homer2 " href="/resturant2"><--CHECK US OUT</a>
    <p>"Best Burgers in Town Order Ahead Now"</p>


  </div>




</div>






</section>









<section class="topRatedRes">
  <h2>Top Rated Order Ahead Restaurants</h2>
  <div class="h-card">
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>
        <p>Description or details here</p>
      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>
        <p>Description or details here</p>
      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>
        <p>Description or details here</p>
      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>
        <p>Description or details here</p>
      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>
        <p>Description or details here</p>
      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>
        <p>Description or details here</p>
      </a>
    </div>
  </div>
</section>





<div class="dotted-line">50% off on first Orders</div>
</main>`;
