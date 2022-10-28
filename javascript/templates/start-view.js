Vue.component("start-view", {
  /*html*/
  template: `
    <div id="start-view" v-show="isVisible">
      <button id="start-button" v-for="(value, key, index) in collections" @click="loadContent(key)">{{key}}
        <div id="button-subContainer" v-show="isContentVisible[key]">
          <button v-for="item in value" @click="nextView(item)">{{item}}</button>
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
      console.log("loading " + collection);
      this.isContentVisible[collection] = !this.isContentVisible[collection];
    },
    nextView: function (item) {
      console.log("loading view");
      this.$root.$emit("next-table-view", item);
      this.isVisible = false;
    },
  },
});
