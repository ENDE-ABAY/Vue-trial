<template>
  <div id="app">
    <router-view name="header" @search="handleSearch" />
    <router-view />
    <!-- <router-view name="graphql" /> -->
    <router-view />
    <router-view name="footer" />

    <router-view v-if="searchedKeyword" name="hello" :msg="searchedKeyword" />
  </div>
</template>

<script>
import { ref } from "vue";
import GraphQl from "./components/GraphQl.vue";
import router from "./router";

const searchedKeyword = ref("");

const handleSearch = (keyword) => {
  searchedKeyword.value = keyword;
};

export default {
  setup() {
    return {
      searchedKeyword,
      handleSearch,
    };
  },
};
</script>

<style>
/* Global styles */
</style>
