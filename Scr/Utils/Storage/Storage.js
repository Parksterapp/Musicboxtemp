// storage.js

/**
 * Store data in local storage.
 * @param {string} key - The key under which to store the data.
 * @param {any} data - The data to store.
 */
export function setItem(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Retrieve data from local storage.
 * @param {string} key - The key under which the data is stored.
 * @returns {any} - The retrieved data.
 */
export function getItem(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

/**
 * Remove data from local storage.
 * @param {string} key - The key under which the data is stored.
 */
export function removeItem(key) {
  localStorage.removeItem(key);
}

/**
 * Clear all data in local storage.
 */
export function clearStorage() {
  localStorage.clear();
}
