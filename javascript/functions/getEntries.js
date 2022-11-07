Papa.parse("./data/mammals-collection.csv", {
  header: true,
  download: true,
  dynamicTyping: true,
  complete: function (results) {
    data = results.data;
  },
});

const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

const request = indexedDB.open("MammalDatabase", 1);

request.onerror = function (event) {
  console.error("An error occurred with IndexedDB");
  console.error(event);
};

request.onupgradeneeded = function () {
  db = request.result;
  const store = db.createObjectStore("mammals", { keyPath: "catalog" });
  //store.createIndex("Common_Name", ["Common Name"], {unique: false});
  //store.createIndex("Scientific_Name", ["Scientific name"], {unique: false});
};

request.onsuccess = function () {
  db = request.result;
  const transaction = db.transaction("mammals", "readwrite");

  const store = transaction.objectStore("mammals");
  //const commonIndex = store.index("common_name");
  //const scientificIndex = store.index("scientific_name");

  let temp = 0;
  entries = {};

  for (let i = 0; i < data.length; i++) {
    //console.log(data[i]["Catalog ."])
    temp = parseInt(data[i]["Catalog ."], 10);
    //console.log(temp)
    try {
      store.put({
        catalog: temp,
        Common_Name: data[i]["Common Name"],
        Scientific_Name: data[i]["Scientific Name"],
        Prep_Type: data[i]["Prep Type"],
        Drawer: data[i]["Drawer ."],
      });
    } catch (error) {}
  }
};

function getSearch() {
  const transaction = db.transaction("mammals", "readonly");
  const store = transaction.objectStore("mammals");
  const getEntries = store.getAll();
  return getEntries;
}

function getPreview(Catalog) {
  const transaction = db.transaction("mammals", "readonly");
  const store = transaction.objectStore("mammals");
  const getEntry = store.get(Catalog);
  return getEntry;
}

function getView(Catalog) {
  const transaction = db.transaction("mammals", "readonly");
  const store = transaction.objectStore("mammals");
  const getEntry = store.get(Catalog);
  return getEntry;
}
