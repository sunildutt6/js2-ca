import { listKey,tokenKey,userKey } from "../settings/constant.js";


export function saveToken(token) {
  saveToStorageOne(tokenKey,token)
}
export function getToken() {
  return getFromStorageOne(tokenKey)
}

export function saveUser(user) {
  saveToStorageOne(userKey,user)
}

export function getUsername() {
  const user = getFromStorageOne(userKey)
  if (user) {
    return user.username
  }
  return null;
}

export function clearStorage() {
  localStorage.clear();
}


function saveToStorageOne(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  
}
function getFromStorageOne(key) {
  const value = localStorage.getItem(key)
  if (!value) {
    return [];
  }
  else {
    return JSON.parse(value);
  }
}


export function saveToStorage(favs) {
  localStorage.setItem(listKey, JSON.stringify(favs));
}

export function getFromStorage() {
    const favs = localStorage.getItem(listKey);
     if (!favs) {
      return [];
    } else {
      return JSON.parse(favs);
    }
}
