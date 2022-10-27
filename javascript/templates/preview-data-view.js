class Entry {
  constructor(Col_1, Col_2) {
    this.Col_1 = Col_1;
    this.Col_2 = Col_2;
  }
}

Vue.component("preview-data-view", {
  template: `
  <div id="preview-data-view">
      <div id="left">
          <img src="./stylephotos/Home_Button.png"></img>
          <body>Name: animal</body>
      </div>
      <div id="right">
          <header>
              Description
              <button class="back">Back</button>
          </header>
          <body>insert description here</body>
          <footer>
              <button class="moreInfo">All Info</button>
          </footer>
      </div>
  </div>
  `,
  data: function () {
    return {
      Headers: new Entry("Header 1", "Header 2"),
      Rows: [
        new Entry("Row 1 Col 1", "Row 1 Col 2"),
        new Entry("Row 2 Col 1", "Row 2 Col 2"),
        new Entry("Row 3 Col 1", "Row 3 Col 2"),
      ],
      isVisable: false,
    };
  },
  methods: {},
});
