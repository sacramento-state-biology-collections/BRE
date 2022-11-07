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
    
        



/*function getEntries()
{
    let tactn = db.transaction("mammals", "readonly");
    let osc = tactn.objectStore("mammals").openCursor();
    let entries = {};
    let i = 0;
    osc.onsuccess = function(e) {
        let cursor = e.target.result
        if (cursor) 
		{
            entries[i] = 
            {
                "Catalog .": cursor.value["catalog"],
                "Common Name": cursor.value["Common_Name"],
                "Scientific Name": cursor.value["Scientific_Name"],
                "Prep Type": cursor.value["Prep_Type"],
                "Drawer .": cursor.value["Drawer"],
            };
            cursor.continue()
            i++;
            //console.log(entries[i])
        }    
    } 
    return entries;
}*/


function getEntries() {
    
    let entries = {};
    for (let i = 0; i < data.length; i++) {
        entries[i] = {
            "Catalog .": data[i]["Catalog ."],
            "Common Name": data[i]["Common Name"],
            "Scientific Name": data[i]["Scientific Name"],
            "Prep Type": data[i]["Prep Type"],
            "Drawer .": data[i]["Drawer ."],
        };
    }

    return entries;
}

// Parameters: 
//Search is a user inputed String
// Collection is a user selected Collection


//Has 3 conditions, 
//Search & Collection are empty strings
//has search, but Collection is empty
// Has both Search and Collection
// Nothing has been tested
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
