/**
 * A simple indexeddb wrapper
 */
const localdb = {
  initialize() {
    return new Promise((resolve, reject) => {
      // Delete existing DB
      const deleteDatabase = indexedDB.deleteDatabase("localDB");
      deleteDatabase.onerror = () => reject(deleteDatabase.error);

      // Create new DB
      const DB = indexedDB.open("localDB");
      DB.onupgradeneeded = () => {
        DB.result.createObjectStore("store");
        resolve();
      };
      DB.onerror = () => reject(DB.error);
    });
  },

  get(key) {
    return new Promise((resolve, reject) => {
      const DB = indexedDB.open("localDB");
      DB.onsuccess = () => {
        const transaction = DB.result.transaction("store", "readonly");
        const store = transaction.objectStore("store");
        const request = store.get(key);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      };
      DB.onerror = function() {
        reject(DB.error);
      };
    });
  },

  set(key, value) {
    return new Promise((resolve, reject) => {
      const DB = indexedDB.open("localDB");
      DB.onsuccess = () => {
        const transaction = DB.result.transaction("store", "readwrite");
        const store = transaction.objectStore("store");
        const request = store.put(value, key);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error);
      };
      DB.onerror = () => reject(DB.error);
    });
  },

  remove(key) {
    return new Promise((resolve, reject) => {
      const DB = indexedDB.open("localDB");
      DB.onsuccess = function() {
        const transaction = DB.result.transaction("store", "readwrite");
        const store = transaction.objectStore("store");
        const request = store.delete(key);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error);
      };
      DB.onerror = () => reject(DB.error);
    });
  }
};

export default localdb;
