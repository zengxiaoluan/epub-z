import localForage from "localforage";

let key = "key-of-font-size";
export function getFontSize() {
  return +localStorage.getItem(key) || 16;
}

export function setFontSize(size) {
  localStorage.setItem(key, size);
}

export function isMobile() {
  return /mobile/i.test(navigator.userAgent);
}
