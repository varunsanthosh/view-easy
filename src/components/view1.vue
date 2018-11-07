<template>
    <div class="1st div">
        <h1>Let me guess this was what you entered last</h1>
        <h2>{{getFirstTime}}</h2>
        <button v-on:click='redirect'>Next View</button>
        <button v-on:click='redirectBack'>Previous View</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'View-one',
  computed: {
    ...mapGetters(['getFirstTime']),
  },
  methods: {
      redirect() {
          this.$router.push({name: 'view2'});
      },
      redirectBack() {
          this.$router.push({name: 'home'});
      },
  },
};
</script>
