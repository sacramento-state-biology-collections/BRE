Vue.component("start-view", {
  /*html*/
  template: `
    <div id="start-view" v-show="isVisible">
      <button id="start-button" v-for="(value, key, index) in collections" @click="loadContent(key)">{{key}}
        <div id="button-subContainer" v-show="isContentVisible[key]">
          <button v-for="item in value" @click="nextView(item, key)">{{item}}</button>
        </div>
      </button>
    </div>
  `,
  data: function () {
    return {
      collections: {
        Animals: ["Amphibians", "Arthropods", "Mammals", "Reptiles"],
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
