// App
var app = new Vue({
  el: "#app",
  data: {
    results: [],
  },
  methods: {
    search: function (search) {
      this.search = search;
    },
  },
});
