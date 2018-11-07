<template>
    <div class="1st div">
        <h1>1st View</h1>
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
        </ul>
        <button v-on:click='redirect'>{{getFirstTime}}</button>
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
  },
};
</script>
