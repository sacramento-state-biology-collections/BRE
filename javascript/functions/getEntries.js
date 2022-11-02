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
function getSearch(Search, Collection){
    let entries = {};
    
    //Should return everything if no search or column is specified
    //Has Neither
    if(Search.length == 0){
        for (let i = 0; i < data.length; i++) {
            entries[i] = {
                "Catalog .": data[i]["Catalog ."],
                "Common Name": data[i]["Common Name"],
                "Scientific Name": data[i]["Scientific Name"],
                "Prep Type": data[i]["Prep Type"],
                "Drawer .": data[i]["Drawer ."],
            };
    }

}else if(Search.length > 0){
    for (let i = 0; i < data.length; i++) {     
        // Ability to search for substring and forces all things to be lower case, so case no longer matter
        if (((data[i]["Common Name"]).toLowerCase()).includes(Search.toLowerCase())){
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
        entries[0] = {
            "Catalog .": "Catalog .",
            "Common Name": "Common Name",
            "Scientific Name": "Scientific Name",
            "Prep Type": "Prep Type",
            "Drawer .": "Drawer .",

        };
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
