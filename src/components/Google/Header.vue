<template>
  <nav class="flex-row">
    <div v-if="!searched">
      <div
        class="flex flex-grow space-x-5 lg:justify-end sm:justify-start"
      ></div>
      <router-link
        to="/"
        class="flex justify-center items-center mt-3 space-x-2"
      >
        <input
          type="text"
          @keyup.enter="handleSearch"
          placeholder="Search Google or type URL"
          class="bg-gray-100 rounded-3xl w-3/4 px-6 py-2 focus:outline-none"
        />
        <font-awesome-icon icon="search" class="text-gray-400" />
      </router-link>
      <div class="flex justify-end mt-1">
        <menu class="flex items-center space-x-4">
          <label for="">Gmail</label>
          <label for="">Images</label>
          <menu class="ml-auto">
            <font-awesome-icon
              icon="th-large"
              class="text-black-500 text-2 mr-2"
            />
            <font-awesome-icon :icon="['fas', 'grid-round']" />
          </menu>
          <button class="bg-blue-800 rounded-sm text-white">Sign In</button>
        </menu>
      </div>

      <!-- Using flex, justify-center, and items-center to center the content -->
      <div class="flex flex-col mt-28">
        <div class="flex justify-center items-center my-4">
          <!-- Adding margin-y of 4 -->
          <p class="text-6xl">
            <span class="text-red-500">G</span>
            <span class="text-yellow-500">o</span>
            <span class="text-blue-500">o</span>
            <span class="text-green-500">g</span>
            <span class="text-yellow-500">l</span>
            <span class="text-red-500">e</span>
          </p>
        </div>
        <div class="flex justify-center items-center my-4">
          <!-- Adding margin-y of 4 -->
          <div class="flex justify-center items-center h-8">
            <input
              type="text"
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              placeholder="Search Google or type URL"
              class="bg-gray-200 rounded-full w-96 py-4 px-2 focus:outline-none"
            />
          </div>
        </div>
        <div class="flex-row justify-center items-center my-4">
          <!-- Adding margin-y of 4 -->
          <h2 class="flex justify-center items-center">
            Google Search I'm Lucky
          </h2>
          <h4 class="text-center flex justify-center items-center mt-4">
            Google offered In:
            <p class="text-blue-700">
              Amharic, Tigeregn, Soommalia, Afaan Oroomo
            </p>
          </h4>
        </div>
      </div>
    </div>
    <HelloWorld v-else :msg="searchQuery" />
  </nav>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCog, faBars, faThLarge } from "@fortawesome/free-solid-svg-icons";
library.add(faCog, faBars, faThLarge);

import { ref } from "vue";
import { useRouter } from "vue-router";

import HelloWorld from "../Load/HelloWorld.vue";

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

<style scoped>
/* Scoped styles */
</style>
