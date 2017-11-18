<template>
  <div class="date">
    <span></span>

    <p>Finde Entsorgungstermine für <strong>Potsdam</strong>.</p>
    <select v-model="selectedStreet" @change="showDatesFor($event)">
      <option v-text="street" v-for="street in streets"></option>
    </select>

  <div class="dates">
    <ul>
      <li v-text="date" v-for="date in shownDates.months"></li>
    </ul>
  </div>

  </div>
</template>

<script>
export default {
  name: 'date',
  data () {
    return {
      date: this.options.data
    }
  },
  props: [
    'options'
  ],
  methods: {
    init: function() {

    },
    showDatesFor (event) {

    }
  },
  computed: {
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
