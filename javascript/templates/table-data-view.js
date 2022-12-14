//Authors: Brian A. and Joey M.
//Subtasks: GG-47, GG-49

class FiveEntries {
  constructor(Col_1, Col_2, Col_3, Col_4, Col_5) {
    this.Col_1 = Col_1;
    this.Col_2 = Col_2;
    this.Col_3 = Col_3;
    this.Col_4 = Col_4;
    this.Col_5 = Col_5;
  }
}

Vue.component("table-data-view", {
  /*html*/
  template: `
    <div id="table-data-view" v-show="isVisible">
      <table>
        <tr>
          <th>{{Headers.Col_1}}</th>
          <th>{{Headers.Col_2}}</th>
          <th>{{Headers.Col_3}}</th>
          <th>{{Headers.Col_4}}</th>
          <th></th> 
        </tr>
        <tr v-for="entry in Rows">
          <td>{{entry.Col_1}}</td>
          <td>{{entry.Col_2}}</td>
          <td>{{entry.Col_3}}</td>
          <td>{{entry.Col_4}}</td>
          <td><button class="preview" v-on:click="nextView(entry.Col_5)">Preview</button></td>
        </tr>
      </table>
    </div>
  `,
  data: function () {
    return {
      Headers: new FiveEntries(
        "Common Name",
        "Scientific Name",
        "Prep Type",
        "Location",
        ""
      ),
      Rows: [],
      isVisible: false,
    };
  },
  methods: {
    nextView: function (key) {
      console.log("loading preview for " + key);
      this.$root.$emit("preview-data-view", {
        entry: key,
        isVisible: true,
      });
    },
  },
  mounted: function () {
    this.$root.$on("table-data-view", (data) => {
      this.isVisible = data.isVisible;
    });
    this.$root.$on("load-search", (item) => {
      console.log(`table view of ${item.search} in ${item.collection}`);
      let entries = getSearch();
      let fourEntries = [];
      // handle the promise from getSearch
      entries.onsuccess = function () {
        entries = entries.result;
        for (const [key, value] of Object.entries(entries)) {
          if (
            value.Common_Name.toLowerCase().includes(item.search.toLowerCase())
          ) {
            fourEntries.push(
              new FiveEntries(
                value.Common_Name,
                value.Scientific_Name,
                value.Prep_Type,
                value.Location,
                value.catalog
              )
            );
          } else if (item.search == "") {
            fourEntries.push(
              new FiveEntries(
                value.Common_Name,
                value.Scientific_Name,
                value.Prep_Type,
                value.Location,
                value.catalog
              )
            );
          }
        }
      };
      this.Rows = fourEntries;
      this.isVisible = true;
    });
  },
});
