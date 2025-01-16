import html from "html-literal";

import logo from "url:../assets/Untitled_design-removebg-preview.png";

export default state => html`
<header>
    <h1>${state.header}</h1>
<img class="logo" src="${logo}" alt="logo" width="100" height="auto">
</header>`;
