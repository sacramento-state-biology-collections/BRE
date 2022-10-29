class FourEntries {
  constructor(Col_1, Col_2, Col_3, Col_4) {
    this.Col_1 = Col_1;
    this.Col_2 = Col_2;
    this.Col_3 = Col_3;
    this.Col_4 = Col_4;
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
          <td><button class="preview" v-on:click="nextView(entry)">Preview</button></td>
        </tr>
      </table>
    </div>
  `,
  data: function () {
    return {
      Headers: new FourEntries("Header 1", "Header 2", "Header 3", "Header 4"),
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
      this.Rows = [
        new FourEntries(
          "Row 1 Col 1",
          "Row 1 Col 2",
          "Row 1 Col 3",
          "Row 1 Col 4"
        ),
      ];
      this.isVisible = true;
    });
  },
});
