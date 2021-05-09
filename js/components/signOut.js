import { clearStorage } from "../utils/saveFunctions.js";

export default function signOut() {
    const button = document.querySelector(".signOut")
    if (button) {
        button.onclick = function () {
            const signOut = confirm("Are you sure?");
            if (signOut) {
                clearStorage();
                location.href = "/";
            }
        }
    }
}