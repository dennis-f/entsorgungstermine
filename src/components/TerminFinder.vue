<template>
  <div class="terminfinder">
    <p>Finde Entsorgungstermine für <strong>Potsdam</strong>.</p>
    <select>
      <option v-text="street" v-for="street in streets"></option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'TerminFinder',
  data () {
    return {
      msg: 'Entsorgungstermine finden'
    }
  },
  methods: {
    init: function() {
      this.$store.dispatch('LOAD_CONFIG');
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
