Vue.component("search-bar", {
  template: `
    <header>
        <h1>{{title}}</h1>
        <button class="home">home</button>
        <input type="text" v-model="searchText" />
        <select name="Collections" id="Collections" v-on:change="update">
            <option v-for="option in options" v-bind:value="option">{{option}}</option>
        </select>
        <button class="search" v-on:click="search">search</button>
    </header>     
    `,
  data: function () {
    return {
      title: "My Collection",
      options: ["All", "Mammals", "Birds", "Reptiles", "Amphibians", "Fish"],
      searchText: "Search Collection",
      collection: "",
    };
  },
  methods: {
    update: function (event) {
      this.collection = event.target.value;
    },
    search: function () {
      console.log(
        "searching for " + this.searchText + " in " + this.collection
      );
    },
  },
});
