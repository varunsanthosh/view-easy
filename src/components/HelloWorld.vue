<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="redirect">Redirect Link</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0,
    };
  },
  methods: {
    redirect() {
      this.counter += 1;
      this.$router.push({name: 'view1'});
    },
  },
};
</script>
