import { baseUrl } from "../settings/api.js";
import { getToken } from "../utils/saveFunctions.js";
import displayError from "./displayError.js";

export default function deleteArticles(id) {
  const container = document.querySelector(".delete-can");
  container.innerHTML = `<button type = "button" class= "delete">Delete</button>`;

  const deleteBtn = document.querySelector(".delete");

  deleteBtn.onclick = async function () {
      const readyToClean = confirm("Are you sure want to delete this article?");
      console.log(readyToClean)

    if (readyToClean) {
      const url = baseUrl + "articles/" + id;
      const token = getToken();
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const resonse = await fetch(url, options);
        const json = await resonse.json();
          location.href = "/";
      } catch (error) {
        console.log(error);
      }
    }
  };
}
