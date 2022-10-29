Vue.component("all-data-view", {
  /*html*/
  template: `
    <div id="all-data-view" v-show="isVisible">
        <img v-bind:src="animalPhoto" alt="photo">
        <p>Name: {{animalName}}</p>
        <p v-for="(value, name, index) in data"><b>{{name}}:</b> {{value}}</p>
        <button class="back" v-on:click="prevView">Back</button> 
    </div>
  `,
  data: function () {
    return {
      animalPhoto: "./styles/stylephotos/no_image_image.svg",
      animalName: "Animal Name",
      data: {
        "Scientific Name": "Scientific Name",
        "Common Name": "Common Name",
      },
      isVisible: false,
    };
  },
  methods: {
    prevView: function () {
      console.log("loading view");
      this.$root.$emit("search-bar", {
        isVisible: true,
      })
      this.$root.$emit("table-data-view", {
        isVisible: true,
      })
      this.isVisible = false;
    },
  },
  mounted: function () {
    this.$root.$on("all-data-view", (data) => {
      this.isVisible = data.isVisible;
    });
  },
});
