<template>
    <div class="1st div">
        <h1>3rd View</h1>
        <ul>
            <li>i</li>
            <li>j</li>
            <li>k</li>
            <li>l</li>
        </ul>
        <button v-on:click="redirect">{{getFirstTime}}</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'View-three',
  computed: {
    ...mapGetters(['getFirstTime']),
  },
  methods: {
      redirect() {
          this.$router.push({name: 'home'});
      },
  },
};
</script>
