import html from "html-literal";
import image1 from "url:../assets/Untitled_design-removebg-preview.png";
import image2 from "url:../assets/Red Illustrative Burger Food Logo.jpg";
import image3 from "url:../assets/Brown Beige Circle Chinese Food Logo.jpg";
import image4 from "url:../assets/Navy Blue and Cream Italian Restaurant Logo (1).jpg"
import image5 from "url:../assets/Green And Maroon Retro Royal Indian Food Restaurant Batch Logo (1).jpg"




export default state => html`<main>

<!-- <h3>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
  </h3> -->
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
      <a href="/resturant2">
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
  </div>
  <br>
</section>



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

      </a>
    </div>
    <div class="h-p-card">

      <a href="/resturant2">
        <h3>Restaurant Name</h3>

      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>

      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>

      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>

      </a>
    </div>
    <div class="h-p-card">
      <a href="/resturant2">
        <h3>Restaurant Name</h3>

      </a>
    </div>
  </div>
</section>





<div class="dotted-line">50% off on first Orders</div>
</main>`;
