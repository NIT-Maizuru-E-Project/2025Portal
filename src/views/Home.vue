<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
      Welcome to 2025 Portal
    </h1>
    
    <div class="flex justify-center mb-8">
      <div class="flex h-screen items-center justify-center bg-white dark:bg-gray-800">
        <button
          class="py-4 px-6 w-96 font-bold font-mono rounded-md transition-all text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:text-black dark:bg-blue-400 dark:hover:bg-blue-500 dark:active:bg-blue-600"
        >
          Hello Tailwind
        </button>
      </div>
    </div>

    <div class="text-center">
      <router-link 
        to="/about" 
        class="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
      >
        About Page
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Home page component
</script>

<style scoped>
/* Add any component-specific styles here */
</style>