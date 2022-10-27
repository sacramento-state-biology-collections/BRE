Vue.component("search-bar", {
  template: `
    <div id="search-header">
        <header>
            <h1>{{title}}</h1>
            <div id="search-cluster">
                <button class="home">home</button>
                <input type="text" v-model="searchText" v-bind:placeholder="placeholder"/>
                <select name="Collections" id="Collections" v-on:change="update">
                    <option v-for="option in options" v-bind:value="option">{{option}}</option>
                </select>
                <button class="search" v-on:click="search">search</button>
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
  },
});
