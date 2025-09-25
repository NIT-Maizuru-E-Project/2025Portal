<template>
  <div class="home min-h-screen bg-gray-50 flex flex-col items-start px-4">
    <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm  text-center p-8 my-4">
      <h1 class="text-4xl font-bold text-blue-600 mb-4">組織構成・メンバー一覧</h1>
      <p class="text-lg text-gray-700 max-w-md mx-auto">E-Project2025の組織構成・メンバー一覧です．<br />みんな楽しんで開発しましょう！</p>
    </div>

    <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm p-8 my-4">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">組織図</h1>
        <p class="text-lg text-gray-700">画像を選択すると拡大表示されます．</p>
        <div class="flex justify-center mb-6">
          <img 
            class="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity" 
            src="../assets/soshiki_v1.png" 
            alt="E-Project2025組織図" 
            @click="openImageModal"
          />
        </div>
        
        <!-- 画像拡大モーダル -->
        <div 
          v-if="showModal" 
          class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-auto"
          @click="closeImageModal"
        >
          <div class="relative w-full h-full flex items-center justify-center">
            <img 
              class="max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] object-contain" 
              src="../assets/soshiki_v1.png" 
              alt="E-Project2025組織図（拡大表示）"
              @click.stop
            />
            <button 
              class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10"
              @click="closeImageModal"
            >
              ✕
            </button>
          </div>
        </div>
    </div>

    <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm p-8 my-4">
      <h1 class="text-4xl font-bold text-blue-600 mb-4">メンバー一覧</h1>
      <h1 class="text-2xl font-bold text-black-600 mt-4">部長</h1>
      <p class="text-lg font-bold text-gray-700">平田(5E)</p>
      <h1 class="text-2xl font-bold text-black-600 mt-4">副部長</h1>
      <p class="text-lg font-bold text-gray-700">片岡(4E)</p>
      <h1 class="text-2xl font-bold text-black-600 mt-4">技術チーフ/監視員</h1>
      <p class="text-lg font-bold text-gray-700">藤井(5E)</p>
      <h1 class="text-2xl font-bold text-black-600 mt-4">サバゲー班</h1>
      <p class="text-lg font-bold text-gray-700">片岡(4E)</p>
      <p class="text-lg font-bold text-gray-700">片岡(4E)</p>

      <!-- 追加コンテンツエリア -->
      <div class="mt-8 p-6 bg-blue-50 border-blue-400 rounded-lg inline-block px-12">
        <h2 class="text-2xl font-bold text-blue-600 mb-3">新機能</h2>
        <div class="text-lg text-gray-800">
          今後の機能追加予定です
        </div>
      </div>
    </div>
        
  </div>
</template>

<script setup>
import { ref } from 'vue'

// モーダル表示状態
const showModal = ref(false)

// 画像モーダルを開く
const openImageModal = () => {
  showModal.value = true
  // モーダル表示時にスクロールを無効にする
  document.body.style.overflow = 'hidden'
}

// 画像モーダルを閉じる
const closeImageModal = () => {
  showModal.value = false
  // モーダル非表示時にスクロールを有効にする
  document.body.style.overflow = 'auto'
}
</script>