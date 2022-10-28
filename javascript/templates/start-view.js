Vue.component("start-view", {
  /*html*/
  template: `
    <div id="start-view" v-show="isVisible">
      <div id="button-container" v-for="(value, key, index) in collections">
        <button id="start-button" @click="loadContent(key)">{{key}}</button>
        <div id="button-subContainer" v-show="isContentVisible[key]">
          <button id="start-button" v-for="item in value" @click="nextView(item)">{{item}}</button>
        </div>
      </div>
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
