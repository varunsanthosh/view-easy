<template>
    <div class="1st div">
        <h1>2nd View</h1>
        <ul>
            <li>e</li>
            <li>f</li>
            <li>g</li>
            <li>h</li>
        </ul>
        <button v-on:click="redirect">{{getFirstTime}}</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'View-two',
  computed: {
    ...mapGetters(['getFirstTime']),
  },
  methods: {
      redirect() {
          this.$router.push({name: 'view3'});
      },
  },
};
</script>
