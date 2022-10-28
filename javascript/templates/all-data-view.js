Vue.component("all-data-view", {
  /*html*/
  template: `
    <div id="all-data-view" v-show="isVisible">
        <img v-bind:src="animalPhoto" alt="photo">
        <p>Name: {{animalName}}</p>
        <p v-for="(value, name, index) in description"><b>{{name}}:</b> {{value}}</p>
    </div>
  `,
  data: function () {
    return {
      animalPhoto: "./styles/stylephotos/no_image_image.svg",
      animalName: "Animal Name",
      description: {
        "Scientific Name": "Scientific Name",
        "Common Name": "Common Name",
      },
      isVisible: false,
    };
  },
  methods: {
    nextView: function () {
      console.log("loading view");
    },
    prevView: function () {
      console.log("loading view");
    },
  },
});
