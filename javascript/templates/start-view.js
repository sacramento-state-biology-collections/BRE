// Author: Brian A. & Joey M.
// For subtask: GG-42, GG-51, GG-44, GG-45

Vue.component("start-view", {
  /*html*/
  template: `
    <div id="start-view" v-show="isVisible">
      <h2>Select Collection Below for Quick Search Options</h2>
      <div id="start-view-container">
        <button id="start-button" v-for="(value, key, index) in collections" @click="loadContent(key)">
          {{key}}
          <div id="start-view-sub-container">
            <button id="sub-start-button" v-for="item in value" v-show="isContentVisible[key]" @click="nextView(item, key)">{{item}}</button>
          </div>
        </button>
      </div>
    </div>resqudaled
  `,
  data: function () {
    return {
      collections: {
        Animals: ["Amphibians", "Arthropods", "Mammals", "Reptiles", "Birds", "Fish"],
        Birds: ["Birds"],
        Fish: ["Fish"],
        Invertebrates: ["Invertebrates"],
        Mammals: ["Mammals"],
        Plants: ["Plants"],
        Reptiles: ["Reptiles"],
      },
      isContentVisible: {
        Animals: false,
        Birds: false,
        Fish: false,
        Invertebrates: false,
        Mammals: false,
        Plants: false,
        Reptiles: false,
      },
      isVisible: true,
    };
  },
  methods: {
    loadContent: function (collection) {
      this.isContentVisible[collection] = !this.isContentVisible[collection];
      for (const [key, value] of Object.entries(this.isContentVisible)) {
        if (key != collection) {
          this.isContentVisible[key] = false;
        }
      }
    },
    nextView: function (item, key) {
      console.log("loading view");
      this.isVisible = false;
      this.$root.$emit("load-search", {
        collection: key,
        search: item,
      });
    },
  },
  mounted: function () {
    this.$root.$on("start-view", (data) => {
      this.isVisible = data.isVisible;
    });
  },
});
