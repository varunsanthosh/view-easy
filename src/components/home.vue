<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Lets test if this is working</h3>
    <input v-model = "inputData" placeholder = "Input something" />
    <h3>Whatever you Input should be shown below</h3>
    <h2>{{inputData}}</h2>
    <br>
    <h3>Lets redirect to next page</h3>
    <button v-on:click="redirect">Click Me</button>
  </div>
</template>

<script>
import {DO_SOMETHING_ACTION} from '@/store/action.types';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputData: '',
      counter: 0,
    };
  },
  methods: {
    redirect() {
      if (this.inputData) {
        this.$store.dispatch(DO_SOMETHING_ACTION, this.inputData);
      }
      this.counter += 1;
      this.$router.push({name: 'view1'});
    },
  },
};
</script>
