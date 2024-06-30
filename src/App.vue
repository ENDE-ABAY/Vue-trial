<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCog, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faCog, faBars);

defineProps({
  msg: String,
});
</script>

<template>
  <div>
    <div class="menu-icons">
      <font-awesome-icon icon="bars" /> <!-- Menu icon -->
      <font-awesome-icon icon="cog" /> <!-- Setting icon -->
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.menu-icons {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}
</style>
