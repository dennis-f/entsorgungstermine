<template>
  <div class="terminfinder">
    <p>Finde Entsorgungstermine für <strong>Potsdam</strong>.</p>
    <select v-model="selectedStreet" @change="showDatesFor($event)">
      <option v-text="street" v-for="street in streets"></option>
    </select>

  <div class="dates" v-for="value in filteredMonths">
    <ul>
      <li v-for="date in value.values">
        <span v-text="date.date"></span>
        <span v-text="date.values"></span>
      </li>
    </ul>
  </div>

  </div>
</template>

<script>
import Date from '@/components/Date';

export default {
  name: 'TerminFinder',
  data () {
    return {
      selectedStreet: '',
      dates: {},
      filteredMonths: [],
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
        self.filteredMonths = self.filterMonths(response.data);
        console.log('self.filteredMonths', self.filteredMonths);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    filterMonths (dates) {
      return dates.months.filter(m => m.values.length > 0)
    }
  },
  computed: {
    streets: function() {
      return this.$store.getters.getStreets;
    }
  },
  created () {
    this.init();
  },
  components: {
    'date': Date
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
  margin: 10px 0;
}

a {
  color: #42b983;
}
</style>
