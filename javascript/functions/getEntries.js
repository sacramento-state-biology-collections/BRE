function getEntries() {
    Papa.parse("./data/mammals-collection.csv", {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function(results) {
          data = results.data;
        }
    });
}