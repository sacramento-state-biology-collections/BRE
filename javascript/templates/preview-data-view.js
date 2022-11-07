//Authors: Brian A. and Joey M.
//Subtasks: GG-47, GG-49

class SevenEntries {
  constructor(Col_1, Col_2, Col_3, Col_4, Col_5, Col_6, Col_7) {
    this.Col_1 = Col_1;
    this.Col_2 = Col_2;
    this.Col_3 = Col_3;
    this.Col_4 = Col_4;
    this.Col_5 = Col_5;
    this.Col_6 = Col_6;
    this.Col_7 = Col_7;
  }
}

Vue.component("preview-data-view", {
  /*html*/
  template: `
    <div id="preview-data-view" v-show="isVisible">
      <div id="top">
        <button class="back" v-on:click="prevView">X</button>
      </div>
      <div id="left">
        <img v-bind:src="animalPhoto" alt="photo">
      </div>
      <div id="right">
        <h1 id="data">Description</h1>
        <p v-for="item in data">
          Common Name: {{item.Col_1}} <br><br>
          Scientific Name: {{item.Col_2}} <br><br>
          Prep Type: {{item.Col_3}} <br><br>
          Drawer: {{item.Col_4}} <br><br>
          Available: {{item.Col_5}} <br><br>
          Age: {{item.Col_6}} <br><br>
          Cabinet: {{item.Col_7}}
        </p>
      </div>
      <div id="bottom">
        <button class="moreInfo" v-on:click="nextView">All Info</button>
      </div>
    </div>
  `,
  data: function () {
    return {
      animalPhoto: "./styles/stylephotos/no_image_image.svg",
      data: [],
      isVisible: false,
      entry: null,
    };
  },
  methods: {
    nextView: function () {
      console.log("loading view");
      this.$root.$emit("search-bar", {
        isVisible: false,
      });
      this.$root.$emit("table-data-view", {
        isVisible: false,
      });
      this.$root.$emit("preview-data-view", {
        isVisible: false,
      });
      this.$root.$emit("all-data-view", {
        entry: this.entry,
        isVisible: true,
      });
    },
    prevView: function () {
      console.log("loading view");
      this.isVisible = false;
    },
  },
  mounted: function () {
    this.$root.$on("preview-data-view", (data) => {
      if (data.entry != null) {
        let entry = getEntry(data.entry);
        let sevenEntries = [];
        entry.onsuccess = function () {
          entry = entry.result;
          sevenEntries.push(
            new SevenEntries(
              entry.Common_Name,
              entry.Scientific_Name,
              entry.Prep_Type,
              entry.Drawer,
              entry.Available,
              entry.Age,
              entry.Cabinet
            )
          );
        };
        this.data = sevenEntries;
        this.isVisible = data.isVisible;
        this.entry = data.entry;
      } else {
        this.isVisible = data.isVisible;
      }
    });
  },
});
