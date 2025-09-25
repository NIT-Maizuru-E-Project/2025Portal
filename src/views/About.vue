<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
      About 2025 Portal
    </h1>
    
    <div class="max-w-2xl mx-auto">
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
        This is the About page of the 2025 Portal application.
      </p>
      
      <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-6">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Features
        </h2>
        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Vue 3 with Composition API</li>
          <li>• Vue Router for navigation</li>
          <li>• TailwindCSS for styling</li>
          <li>• Vite for fast development</li>
        </ul>
      </div>
      
      <div class="text-center">
        <router-link 
          to="/" 
          class="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// About page component
</script>

<style scoped>
/* Add any component-specific styles here */
</style>