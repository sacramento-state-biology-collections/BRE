Vue.component("search-bar", {
  template: `
    <div class="search-bar">
        <input type="text" placeholder="Search" v-model="searchQuery" />
        <button @click="search">Search</button>
    </div>
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
