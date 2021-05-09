import { baseUrl } from "./settings/api.js";
import displayError from "./components/displayError.js";
import { saveToken, saveUser } from "./utils/saveFunctions.js";
import { tokenKey, userKey } from "./settings/constant.js";
import { menuCreator } from "./components/menuCreator.js";

const form = document.querySelector("form");
const message = document.querySelector(".message-container");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

menuCreator();

form.addEventListener("submit", submitForm);


function submitForm(event) {
  event.preventDefault();
  message.innerHTML = "";
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayError(
      "warning",
      "Please Provide values",
      ".message-container"
    );
  }
  grantAccess(usernameValue, passwordValue);
}

async function grantAccess(username, password) {
  const url = baseUrl + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();
  

    if (json.user) {
      displayError(
        "success",
        "You are logged in successfully.",
        ".message-container"
      );
      saveToken(json.jwt);
      saveUser(json.user);
      location.href = "/";
    }
    if (json.error) {
      displayError(
        "error",
        "Please provide valid credentials",
        ".message-container"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
