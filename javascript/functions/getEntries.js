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