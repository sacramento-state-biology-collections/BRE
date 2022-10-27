class Entry {
  constructor(Col_1, Col_2) {
    this.Col_1 = Col_1;
    this.Col_2 = Col_2;
  }
}

Vue.component("preview-data-view", {
  template: ``,
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
