class TwoEntries {
  constructor(Col_1, Col_2) {
    this.Col_1 = Col_1;
    this.Col_2 = Col_2;
  }
}

Vue.component("preview-data-view", {
  /*html*/
  template: `
    <div id="preview-data-view" v-show="isVisible">
      <div id="right">
        <button class="back" v-on:click="prevView">Back</button>
      </div>
      <div id="left">
        <img v-bind:src="animalPhoto" alt="photo">
        <p>Name: {{animalName}}</p>
      </div>
      <div id="center">
        <h1 id="data">Description</h1>
        <p v-for="(value, name, index) in description"><b>{{name}}:</b> {{value}}</p>
      </div>
      <div id="bottom">
        <button class="moreInfo" v-on:click="nextView">All Info</button>
      </div>
    </div>
  `,
  data: function () {
    return {
      animalPhoto: "./styles/stylephotos/no_image_image.svg",
      animalName: "Animal Name",
      data: {
        "Scientific Name": "Scientific Name",
        "Common Name": "Common Name",
      },
      isVisible: false,
    };
  },
  methods: {
    nextView: function () {
      console.log("loading view");
      this.$root.$emit("search-bar",{
        isVisible: false,
      })
      this.$root.$emit("table-data-view",{
        isVisible: false,
      })
      this.$root.$emit("preview-data-view",{
        isVisible: false,
      })
      this.$root.$emit("all-data-view",{
        isVisible: true,
      })
    },
    prevView: function () {
      console.log("loading view");
      this.isVisible = false;
    },
  },
  mounted: function () {
    this.$root.$on("preview-data-view", (data) => {
      this.isVisible = data.isVisible;
    });
  },
});
