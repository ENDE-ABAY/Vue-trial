<script setup>
import { ref } from "vue";
defineProps();
</script>

<template>
  <footer class="bg-gray-200 mt-28">
    <p>Ethiopia</p>
    <hr />
    <div class="flex justify-between px-4">
      <div class="flex space-x-8">
        <p class="text-sm">About</p>
        <p class="text-sm">Advertising</p>
        <p class="text-sm">Business</p>
        <p class="text-sm">How Search Work</p>
      </div>

      <div class="flex space-x-3">
        <p class="text-sm">Privacy</p>
        <p class="text-sm">Teams</p>
        <p class="text-sm">Settings</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Add any necessary styling */
</style>
