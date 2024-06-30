<template></template>

<script setup>
import { ref } from "vue";
import HelloWorld from "../Load/HelloWorld.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchQuery = ref("");
const searched = ref(false);

const handleSearch = () => {
  // Navigate to the same route with the search query
  router.push({ path: "/", query: { search: searchQuery.value } });
  searched.value = true;
};

// Check if the search query is present in the route
if (router.currentRoute.value.query.search) {
  searchQuery.value = router.currentRoute.value.query.search;
  searched.value = true;
}
</script>
