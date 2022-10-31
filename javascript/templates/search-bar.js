Vue.component("search-bar", {
  /*html*/
  template: `
    <div id="search-header" v-show="isVisible">
        <header>
            <h1>{{title}}</h1>
            <div id="search-cluster">
                <button class="home" v-on:click="loadHome"><img id="home-button-img" src="./styles/stylephotos/Home_Button.svg" alt="Home"></button>
                <input type="text" v-model="searchText" v-bind:placeholder="placeholder"/>
                <select title="Collections" name="Collections" id="Collections" v-on:change="update">
                    <option v-for="option in options" v-bind:value="option">{{option}}</option>
                </select>
                <button class="search" v-on:click="nextView"><img id="search-button-img" src="./styles/stylephotos/Search_Button.svg" alt="Search"></button>
            </div>
        </header>
    </div>     
  `,
  data: function () {
    return {
      title: "Biology Research Engine",
      options: ["All", "Mammals", "Birds", "Reptiles", "Amphibians", "Fish"],
      searchText: "",
      collection: "All",
      placeholder: "Search All",
      isVisible: true,
    };
  },
  methods: {
    update: function (event) {
      this.collection = event.target.value;
      this.placeholder = "Search " + event.target.value;
    },
    loadHome: function () {
      this.$root.$emit("start-view", {
        isVisible: true,
      });
      this.$root.$emit("table-data-view", {
        isVisible: false,
      });
      this.$root.$emit("preview-data-view", {
        isVisible: false,
      });
    },
    nextView: function () {
      console.log("loading view");
      this.$root.$emit("load-search", {
        search: this.searchText,
        collection: this.collection,
      });
      this.$root.$emit("start-view", {
        isVisible: false,
      });
    },
  },
  mounted: function () {
    this.$root.$on("search-bar", (data) => {
      this.isVisible = data.isVisible;
    });
  },
});
