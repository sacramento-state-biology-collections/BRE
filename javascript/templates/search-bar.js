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
                <button class="search" v-on:click="search"><img id="search-button-img" src="./styles/stylephotos/Search_Button.svg" alt="Search"></button>
            </div>
        </header>
    </div>     
  `,
  data: function () {
    return {
      title: "My Collection",
      options: ["All", "Mammals", "Birds", "Reptiles", "Amphibians", "Fish"],
      searchText: "",
      collection: "",
      placeholder: "Search All",
      isVisible: true,
    };
  },
  methods: {
    update: function (event) {
      this.collection = event.target.value;
      this.placeholder = "Search " + event.target.value;
    },
    search: function () {
      console.log(
        "searching for " + this.searchText + " in " + this.collection
      );
    },
    loadHome: function () {
      console.log("loading home");
    },
  },
});
