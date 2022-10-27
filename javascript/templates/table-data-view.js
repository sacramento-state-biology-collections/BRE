class Entry {
  constructor(Col_1, Col_2, Col_3, Col_4) {
    this.Col_1 = Col_1;
    this.Col_2 = Col_2;
    this.Col_3 = Col_3;
    this.Col_4 = Col_4;
  }
}

Vue.component("table-data-view", {
  template: `
  <div>
  <table>
      <tr>
          <th>{{Headers.Col_1}}</th>
          <th>{{Headers.Col_2}}</th>
          <th>{{Headers.Col_3}}</th>
          <th>{{Headers.Col_4}}</th>
          <th>Preview Buttons</th> 
      </tr>
      <tr v-model="Rows" v-for="entry in Rows">
          <td>{{entry.Col_1}}</td>
          <td>{{entry.Col_2}}</td>
          <td>{{entry.Col_3}}</td>
          <td>{{entry.Col_4}}</td>
          <td><button class="preview" v-on:click="loadView">Preview</button></td>
      </tr>
  </table>
</div>
  `,
  data: function () {
    return {
      Headers: new Entry("Header 1", "Header 2", "Header 3", "Header 4"),
      Rows: [
        new Entry("Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3", "Row 1 Col 4"),
        new Entry("Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3", "Row 2 Col 4"),
        new Entry("Row 3 Col 1", "Row 3 Col 2", "Row 3 Col 3", "Row 3 Col 4"),
        new Entry("Row 4 Col 1", "Row 4 Col 2", "Row 4 Col 3", "Row 4 Col 4"),
      ],
    };
  },
  methods: {},
});
