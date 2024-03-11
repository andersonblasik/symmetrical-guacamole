const data = {}; // Object to store database data

function set(key, value) {
  data[key] = value;
}

function get(key) {
  return data[key];
}

function deleteItem(key) {
  delete data[key];
}

function clear() {
  data = {}; // Reset the entire database
}

module.exports = {
  set,
  get,
  deleteItem,
  clear,
};
