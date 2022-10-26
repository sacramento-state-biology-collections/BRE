Vue.component("search-bar", {
  template: `
  <header>
    <h1>{{title}}</h1>
    <button class="home">home</button>
    <input type="text" placeholder="search collection" v-model="searchQuery"></header>
    <select name="collections" id="selection">
        <option v-for="option in options" :value="option">{{option}}</option>
    </select>
    <button class="search" @click="search"></button>
  </header>     
    `,
  data: function () {
    return {
      search: "",
    };
  },
  methods: {
    search: function () {
      this.$emit("search", this.search);
    },
  },
});
