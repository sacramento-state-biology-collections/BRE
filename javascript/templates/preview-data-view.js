class TwoEntries {
  constructor(Col_1, Col_2) {
    this.Col_1 = Col_1;
    this.Col_2 = Col_2;
  }
}

Vue.component("preview-data-view", {
  template: `
  <div id="preview-data-view">
        <div id="left">
            <img src={{animalPhoto}}></img>
            <p>Name: {{animalName}}</p>
        </div>
        <div id="right">
            <h1 id="description">
                Description
                <button class="back">Back</button>
            </h1>
            <p>{{description}}</p>
            <p>
                <button class="moreInfo">All Info</button>
            </p>
        </div>
    </div>
  `,
  data: function () {
    return {
      Headers: new TwoEntries("Header 1", "Header 2"),
      Rows: [
        new TwoEntries("Row 1 Col 1", "Row 1 Col 2"),
        new TwoEntries("Row 2 Col 1", "Row 2 Col 2"),
        new TwoEntries("Row 3 Col 1", "Row 3 Col 2"),
      ],
      isVisable: false,
    };
  },
  methods: {},
});
