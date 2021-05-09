import { getUsername } from "../utils/saveFunctions.js";
import signOut from "./signOut.js";


export function menuCreator() {
  const { pathname } = document.location;
  const username = getUsername();

  let authorizedLink = `<li class="nav-item">
    <a class="nav-link navbar-brand ${
      pathname === "/login.html" ? "active" : ""
    }" href="login.html">SignIn</a>
</li>`;
  if (username) {
    authorizedLink = `<button type="button" class="btn btn-secondary signOut">Logout ${username}</button>`;
  }

  const menu = document.querySelector(".menu-container");
  menu.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
    <div class="container">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link  navbar-brand ${
                  pathname === "/" || pathname === "/index.html" ? "active" : ""
                }" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link navbar-brand ${
                  pathname === "/favourites.html" ? "active" : ""
                }" href="favourites.html">Favourites</a>
            </li>
            <li class="nav-item">
            <a class="nav-link navbar-brand ${
              pathname === "/add-article.html" ? "active" : ""
            }" href="add-article.html">Add-Article</a>
        </li>
            ${authorizedLink}
        </ul>
        <input class="search " placeholder="Search by title.." />
    </div>
</nav>`;
  signOut();
}
