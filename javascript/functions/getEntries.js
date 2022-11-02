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
// Column is a user selected Column


//Has 3 conditions, 
//Search & column are empty strings
//has search, but column is empty
// Has both Search and Column
// Nothing has been tested
function getSearch(Search, Column){
    let entries = {};
    
    //Should return everything if no search or column is specified
    //Has Neither
    if(Search.length == 0  && Column.length == 0){
        for (let i = 0; i < data.length; i++) {
            entries[i] = {
                "Catalog .": data[i]["Catalog ."],
                "Common Name": data[i]["Common Name"],
                "Scientific Name": data[i]["Scientific Name"],
                "Prep Type": data[i]["Prep Type"],
                "Drawer .": data[i]["Drawer ."],
            };
    }

    //Should search every element looking for a specific String, and adding only if it finds it

    //** currently has a magic number
    //Has Search
    }else if(Search.length > 0 && Column.length == 0){
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; i++) {
                if (((data[i][j]).toLowerCase()).includes(Search.toLowerCase())){
                entries[i] = {
                    "Catalog .": data[i]["Catalog ."],
                    "Common Name": data[i]["Common Name"],
                    "Scientific Name": data[i]["Scientific Name"],
                    "Prep Type": data[i]["Prep Type"],
                    "Drawer .": data[i]["Drawer ."],
                };
        }
    }
}
    // Has both
    }else if(Search.length > 0 && Column.length > 0){
    for (let i = 0; i < data.length; i++) {     
        // Ability to search for substring and forces all things to be lower case, so case no longer matter
        if (((data[i][Column]).toLowerCase()).includes(Search.toLowerCase())){
            entries[i] = {
                "Catalog .": data[i]["Catalog ."],
                "Common Name": data[i]["Common Name"],
                "Scientific Name": data[i]["Scientific Name"],
                "Prep Type": data[i]["Prep Type"],
                "Drawer .": data[i]["Drawer ."],

            };
    }
    }
    //This just exsists for troubleshooting Can put whatever to test is it triggers the ifs correctly
    }else{
    return("Gasp!");   
    }
    return entries;
}

//Parameters:
//Catalog:

// Just takes in the Catalog Number and returns the 
function getPreview(Catalog){
    return(Catalog);
}
