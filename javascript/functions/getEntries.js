Papa.parse("./data/mammals-collection.csv", {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results.data;
    }
});

const indexedDB = 
    window.indexedDB ||
    window.mozIndexedDB || 
    window.webkitIndexedDB || 
    window.msIndexedDB || 
    window.shimIndexedDB

const request = indexedDB.open("MammalDatabase", 1);

request.onerror = function (event) {
    console.error("An error occurred with IndexedDB")
    console.error(event);
};

request.onupgradeneeded = function () {
    db = request.result;
    const store = db.createObjectStore("mammals",{keyPath: "catalog"});
    //store.createIndex("Common_Name", ["Common Name"], {unique: false});
    //store.createIndex("Scientific_Name", ["Scientific name"], {unique: false});
};

request.onsuccess = function (){
    db = request.result;
    const transaction = db.transaction("mammals", "readwrite");

    const store = transaction.objectStore("mammals");
    //const commonIndex = store.index("common_name");
    //const scientificIndex = store.index("scientific_name");

    let temp = 0;
    entries = {}
    
    for(let i = 0; i < data.length; i++)
    {   
        //console.log(data[i]["Catalog ."])
        temp =  parseInt(data[i]["Catalog ."], 10)
        //console.log(temp)
        try{
        store.put({ catalog: temp, Common_Name: data[i]["Common Name"], Scientific_Name: data[i]["Scientific Name"], Prep_Type: data[i]["Prep Type"], Drawer: data[i]["Drawer ."]});
        } catch (error) 
        {}
    }
}

function getEntries() {
    // Make a transaction to the database
    const transaction = db.transaction("mammals", "readonly");
    // Get the store
    const store = transaction.objectStore("mammals");
    // Get all the entries results synchronously
    const results = store.getAll();
    // Return the results
    return results;
}

function getSearch(Search, Column, Collection){    
    // entries variable is a dictionary of dictionaries
    // Update getEntries() with a collection parameter later
    let entries = getEntries();

    // Search is not specified
    // Needs update when we have more collections
    if(Search == "")
        return entries;

    // Preemptively remove entries that have undefined values in the search column
    for (const [key, value] of Object.entries(entries)) {
        if(value[Column] == undefined)
        delete entries[key];
    }

    // Filter by Collection Column
    // Needs update when we have more collections
    switch(Collection){
        case "All":
            for (const [key, value] of Object.entries(entries)) {
                if(!value[Column].toLowerCase().includes(Search.toLowerCase()))
                    delete entries[key];
            }
            break;
        case "Mammals":
            for (const [key, value] of Object.entries(entries)) {
                if(!value[Column].toLowerCase().includes(Search.toLowerCase()))
                    delete entries[key];
            }
            break;
    }
    
    // Return the filtered entries
    return entries;
}

//Parameters:
//Catalog:

// Just takes in the Catalog Number and returns the 
function getPreview(Catalog){
    return(Catalog);
}
