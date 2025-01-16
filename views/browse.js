import html from "html-literal";



export default () => html`<main>
  <div class="browse-container">
      <h1>--->See Popular !Resturants!
    </h1>

      <aside class="b-filter">
        <label for="b-category">Filter:</label>
        <select id="b-category">
          <option value="italian">Italian</option>
          <option value="steak-houses">Steak Houses</option>
          <option value="etc">Etc</option>
        </select>

      </aside>

      <section class="b-card">

        <a href="/resturant1" class="card">
  <h3>Restaurant Name</h3>
  <p>Description or details here</p>
</a>
<a href="/resturant2" class="card">
  <h3>Restaurant Name</h3>
  <p>Description or details here</p>
</a>
<a href="/resturant3" class="card">
  <h3>Restaurant Name</h3>
  <p>Description or details here</p>
</a>
<a href="/resturant4" class="card">
  <h3>Restaurant Name</h3>
  <p>Description or details here</p>
</a>
<a href="/resturant5" class="card">
  <h3>Restaurant Name</h3>
  <p>Description or details here</p>
</a>
<a href="/resturant6" class="card">
  <h3>Restaurant Name</h3>
  <p>Description or details here</p>
</a>
<div class="card" >
          <h3>Restaurant Name</h3>
          <p>Description or details here</p>
        </div>
        <div class="card">
          <h3>Restaurant Name</h3>
          <p>Description or details here</p>
        </div>
        <div class="card">
          <h3>Restaurant Name</h3>
          <p>Description or details here</p>
        </div>
        <div class="card">
          <h3>Restaurant Name</h3>
          <p>Description or details here</p>
        </div>
        <div class="card">
          <h3>Restaurant Name</h3>
          <p>Description or details here</p>
        </div>
        <div class="card">
          <h3>Restaurant Name</h3>
          <p>Description or details here</p>
        </div>
      </section>









    </div>









<div class="dotted-line">50% off on first Orders</div>
</main>`;
