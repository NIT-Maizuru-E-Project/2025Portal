<script setup>
// Main App component with Vue Router
</script>

<template>
  <div id="app" class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Navigation -->
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">2025 Portal</h1>
        <div class="space-x-4">
          <router-link 
            to="/2025Portal" 
            class="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            active-class="bg-gray-700"
          >
            Home
          </router-link>
          <router-link 
            to="/2025Portal/About" 
            class="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            active-class="bg-gray-700"
          >
            About
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view />
  </div>
</template>

