<template>
  <div class="terminfinder">
    <p>Finde Entsorgungstermine für <strong>Potsdam</strong>.</p>
    <select v-model="selectedStreet" @change="showDatesFor($event)">
      <option v-text="street" v-for="street in streets"></option>
    </select>

  <div class="dates">
    <ul>
      <li v-text="date" v-for="date in shownDates"></li>
    </ul>
  </div>

  </div>
</template>

<script>
export default {
  name: 'TerminFinder',
  data () {
    return {
      selectedStreet: '',
      shownDates: [],
      msg: 'Entsorgungstermine finden'
    }
  },
  methods: {
    init: function() {
      this.$store.dispatch('LOAD_CONFIG');
    },
    showDatesFor (event) {
      let self = this;
      let promise = this.$store.getters.getDatesFor(this.selectedStreet);
      promise.then(function (response) {
        self.shownDates = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  computed: {
    streets: function() {
      return this.$store.getters.getStreets;
    }
  },
  created () {
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
