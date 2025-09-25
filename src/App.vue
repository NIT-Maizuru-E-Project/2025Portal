<script setup>
// Main App component with Vue Router
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="rounded hover:bg-gray-700 transition-colors">
        <div class="flex items-center space-x-3">
          <img class="h-8 w-auto object-contain" src="./assets/EproIconWhite.png" alt="E-Project2025ロゴ" />
          <h1 class="text-xl font-bold">E-Project2025部員用ポータル</h1>
        </div>
      </router-link>
      </div>
    </nav>

    <!-- Router View -->
    <div class="pt-20">
      <router-view />
    </div>
  </div>
</template>