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
        Age: data[i]["Age"],
        Available: data[i]["Available?"],
        Body_Width: data[i]["Body Width"],
        Cabinet: data[i]["Cabinet ."],
        City: data[i]["City"],
        Collection_Circumstance: data[i]["Collection Circumstance"],
        Collection_Date: data[i]["Collection Date"],
        Collector_Address: data[i]["Collectors Address"],
        Collector_Name: data[i]["Collectors Name"],
        Comments: data[i]["Comments"],
        Condition: data[i]["Condition"],
        Country: data[i]["Country"],
        County: data[i]["County"],
        Ear_Notch: data[i]["Ear Notch"],
        Ear_Tag_Leg_band: data[i]["Ear Tag/Leg band ."],
        Exact_Locality: data[i]["Exact Locality"],
        Exchange: data[i]["Exchange"],
        Family: data[i]["Family"],
        Forearm: data[i]["Forearm"],
        HMB_107_Bone_Room: data[i]["HMB 107 Bone Room"],
        HMB_107_Cabinets: data[i]["HMB 107 Cabinets"],
        HMB_107_Skin_Room: data[i]["HMB 107 Skin Room"],
        HMB_124: data[i]["HMB 124"],
        Hind_Foot: data[i]["Hind Foot"],
        Last_Inventoried: data[i]["Last Inventoried"],
        Location: data[i]["Locations"],
        Order: data[i]["Order"],
        Prep_Date: data[i]["Prep Date"],
        Preparator: data[i]["Preparator"],
        SQU105_Display: data[i]["SQU105 Display"],
        SQU_105_Teaching: data[i]["SQU 105 Teaching"],
        Sex: data[i]["Sex"],
        State: data[i]["State"],
        Tail_Length: data[i]["Tail Length"],
        Total_Length: data[i]["Total Length"],
        Weight: data[i]["Weight"],
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

function getEntry(Catalog) {
  const transaction = db.transaction("mammals", "readonly");
  const store = transaction.objectStore("mammals");
  const getEntry = store.get(Catalog);
  return getEntry;
}
