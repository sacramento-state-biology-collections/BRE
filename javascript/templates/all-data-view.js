//Authors: Brian A. and Joey M.
//Subtasks: GG=47, GG-49

class FortyOneEntries {
  constructor(
    Col_1,
    Col_2,
    Col_3,
    Col_4,
    Col_5,
    Col_6,
    Col_7,
    Col_8,
    Col_9,
    Col_10,
    Col_11,
    Col_12,
    Col_13,
    Col_14,
    Col_15,
    Col_16,
    Col_17,
    Col_18,
    Col_19,
    Col_20,
    Col_21,
    Col_22,
    Col_23,
    Col_24,
    Col_25,
    Col_26,
    Col_27,
    Col_28,
    Col_29,
    Col_30,
    Col_31,
    Col_32,
    Col_33,
    Col_34,
    Col_35,
    Col_36,
    Col_37,
    Col_38,
    Col_39,
    Col_40,
    Col_41
  ) {
    this.Col_1 = Col_1;
    this.Col_2 = Col_2;
    this.Col_3 = Col_3;
    this.Col_4 = Col_4;
    this.Col_5 = Col_5;
    this.Col_6 = Col_6;
    this.Col_7 = Col_7;
    this.Col_8 = Col_8;
    this.Col_9 = Col_9;
    this.Col_10 = Col_10;
    this.Col_11 = Col_11;
    this.Col_12 = Col_12;
    this.Col_13 = Col_13;
    this.Col_14 = Col_14;
    this.Col_15 = Col_15;
    this.Col_16 = Col_16;
    this.Col_17 = Col_17;
    this.Col_18 = Col_18;
    this.Col_19 = Col_19;
    this.Col_20 = Col_20;
    this.Col_21 = Col_21;
    this.Col_22 = Col_22;
    this.Col_23 = Col_23;
    this.Col_24 = Col_24;
    this.Col_25 = Col_25;
    this.Col_26 = Col_26;
    this.Col_27 = Col_27;
    this.Col_28 = Col_28;
    this.Col_29 = Col_29;
    this.Col_30 = Col_30;
    this.Col_31 = Col_31;
    this.Col_32 = Col_32;
    this.Col_33 = Col_33;
    this.Col_34 = Col_34;
    this.Col_35 = Col_35;
    this.Col_36 = Col_36;
    this.Col_37 = Col_37;
    this.Col_38 = Col_38;
    this.Col_39 = Col_39;
    this.Col_40 = Col_40;
    this.Col_41 = Col_41;
  }
}

Vue.component("all-data-view", {
  /*html*/
  template: `
    <div id="all-data-view" v-show="isVisible">
      <div id="left">
        <button class="back" v-on:click="prevView">Back</button>
      </div>
      <div id="center">
        <p v-for="item in data">
          Catalog: {{item.Col_1}} <br><br> 
          Common Name: {{item.Col_2}} <br><br> 
          Scientific Name: {{item.Col_3}} <br><br> 
          Prep Type: {{item.Col_4}} <br><br> 
          Drawer: {{item.Col_5}} <br><br> 
          Age: {{item.Col_6}} <br><br> 
          Available: {{item.Col_7}} <br><br> 
          Body Width: {{item.Col_8}} <br><br> 
          Cabinet: {{item.Col_9}} <br><br> 
          City: {{item.Col_10}} <br><br> 
          Collection Circumstance: {{item.Col_11}} <br><br> 
          Collection Date: {{item.Col_12}} <br><br> 
          Collector Address: {{item.Col_13}} <br><br> 
          Collector Name: {{item.Col_14}} <br><br> 
          Comments: {{item.Col_15}} <br><br> 
          Condition: {{item.Col_16}} <br><br> 
          Country: {{item.Col_17}} <br><br> 
          County: {{item.Col_18}} <br><br> 
          Ear Notch: {{item.Col_19}} <br><br> 
          Ear Tag Leg band: {{item.Col_20}} <br><br> 
          Exact Locality: {{item.Col_21}} <br><br> 
          Exchange: {{item.Col_22}} <br><br> 
          Family: {{item.Col_23}} <br><br> 
          Forearm: {{item.Col_24}} <br><br> 
          HMB 107 Bone Room: {{item.Col_25}} <br><br> 
          HMB 107 Cabinets: {{item.Col_26}} <br><br> 
          HMB 107 Skin Room: {{item.Col_27}} <br><br> 
          HMB 124: {{item.Col_28}} <br><br> 
          Hind Foot: {{item.Col_29}} <br><br> 
          Last Inventoried: {{item.Col_30}} <br><br> 
          Location: {{item.Col_31}} <br><br> 
          Order: {{item.Col_32}} <br><br> 
          Prep Date: {{item.Col_33}} <br><br> 
          Preparator: {{item.Col_34}} <br><br> 
          SQU105 Display: {{item.Col_35}} <br><br> 
          SQU 105 Teaching: {{item.Col_36}} <br><br> 
          Sex: {{item.Col_37}} <br><br> 
          State: {{item.Col_38}} <br><br> 
          Tail Length: {{item.Col_39}} <br><br> 
          Total Length: {{item.Col_40}} <br><br> 
          Weight: {{item.Col_41}} <br><br> 
        </p>
      </div>
      <div id="right">
        <img v-bind:src="animalPhoto" alt="photo">   
      </div>   
    </div>
  `,
  data: function () {
    return {
      animalPhoto: "./styles/stylephotos/no_image_image.svg",
      data: [],
      isVisible: false,
    };
  },
  methods: {
    prevView: function () {
      console.log("loading view");
      this.$root.$emit("search-bar", {
        isVisible: true,
      });
      this.$root.$emit("table-data-view", {
        isVisible: true,
      });
      this.isVisible = false;
    },
  },
  mounted: function () {
    this.$root.$on("all-data-view", (data) => {
      let entry = getEntry(data.entry);
      let fortyTwoEntries = [];
      entry.onsuccess = function (event) {
        entry = entry.result;
        fortyTwoEntries.push(
          new FortyOneEntries(
            entry.catalog,
            entry.Common_Name,
            entry.Scientific_Name,
            entry.Prep_Type,
            entry.Drawer,
            entry.Age,
            entry.Available,
            entry.Body_Width,
            entry.Cabinet,
            entry.City,
            entry.Collection_Circumstance,
            entry.Collection_Date,
            entry.Collector_Address,
            entry.Collector_Name,
            entry.Comments,
            entry.Condition,
            entry.Country,
            entry.County,
            entry.Ear_Notch,
            entry.Ear_Tag_Leg_band,
            entry.Exact_Locality,
            entry.Exchange,
            entry.Family,
            entry.Forearm,
            entry.HMB_107_Bone_Room,
            entry.HMB_107_Cabinets,
            entry.HMB_107_Skin_Room,
            entry.HMB_124,
            entry.Hind_Foot,
            entry.Last_Inventoried,
            entry.Location,
            entry.Order,
            entry.Prep_Date,
            entry.Preparator,
            entry.SQU105_Display,
            entry.SQU_105_Teaching,
            entry.Sex,
            entry.State,
            entry.Tail_Length,
            entry.Total_Length,
            entry.Weight
          )
        );
      };
      this.data = fortyTwoEntries;
      this.isVisible = data.isVisible;
    });
  },
});
