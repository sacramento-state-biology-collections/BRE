Papa.parse("./data/mammals-collection.csv", {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results.data;
    }
});

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
