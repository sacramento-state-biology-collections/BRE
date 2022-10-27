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
            <img src="./styles/stylephotos/no_image_image.svg"></img>
            <body>Name: animal</body>
        </div>
        <div id="right">
            <h1>Description</h1><button class="back">Back</button>
            <body>insert description here</body>
        </div>
        <div id="bottom">
            <button class="moreInfo">All Info</button>
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
