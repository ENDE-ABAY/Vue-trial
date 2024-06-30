<script setup>
import { ref } from "vue";

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

// const countries = ref([]);
const { result } = useQuery(
  gql`
    query {
      countries {
        emoji
        name
        continent {
          name
        }
        code
      }
    }
  `
);
// countries.value = result.value.countries;
</script>

<template>
  <div class="grid grid-cols-9 ml-7">
    <div v-for="country in result?.countries || []" :key="country">
      <div class="w-36 h-36">
        <div class="bg-slate-300 ml-3">
          <p>{{ country.name }}</p>
          <p>{{ country.emoji }}</p>
          <p>{{ country.continent.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
