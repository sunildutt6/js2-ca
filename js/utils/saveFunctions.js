import { listKey } from "../settings/constant.js";

export function getFromStorage() {
    const favs = localStorage.getItem(listKey);
     if (!favs) {
      return [];
    } else {
      return JSON.parse(favs);
    }
}
export function saveToStorage(favs) {
  localStorage.setItem(listKey, JSON.stringify(favs));
}
