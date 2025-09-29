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
      <h1 class="text-4xl font-bold text-blue-600 mb-8 text-center">メンバー一覧</h1>
      
      <!-- 役職・メンバーカードグリッド -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- 部長 -->
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 class="text-xl font-bold text-blue-700 mb-3 flex items-center">
            <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-3">部長</span>
          </h2>
          <p class="text-lg font-semibold text-gray-800">平田(5E)</p>
        </div>

        <!-- 副部長 -->
        <div class="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 class="text-xl font-bold text-purple-700 mb-3 flex items-center">
            <span class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm mr-3">副部長</span>
          </h2>
          <p class="text-lg font-semibold text-gray-800">片岡(4E)</p>
        </div>

        <!-- 技術チーフ/監視員 -->
        <div class="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 class="text-xl font-bold text-purple-700 mb-3 flex items-center">
            <span class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm mr-3">技術チーフ</span>
          </h2>
          <p class="text-lg font-semibold text-gray-800">藤井(5E)</p>
        </div>
      </div>

      <!-- サバゲーユニット詳細 -->
      <div class="mt-8">
        <h2 class="text-3xl font-bold text-blue-600 mb-6 text-center">サバゲーユニット</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- 左カラム -->
          <div class="space-y-6">
            <!-- 銃本体開発班 -->
            <div class="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-6 shadow-sm">
              <h3 class="text-xl font-bold text-red-700 mb-3 flex items-center">
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm mr-3">銃本体開発班</span>
              </h3>
              <ul class="text-lg text-gray-800 space-y-1">
                <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>藤井(5E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>藤田(3E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>田原(3E，オブザーバー)</li>
              </ul>
            </div>

            <!-- ヘッドセット開発班 -->
            <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 rounded-lg p-6 shadow-sm">
              <h3 class="text-xl font-bold text-indigo-700 mb-3 flex items-center">
                <span class="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm mr-3">ヘッドセット開発班</span>
              </h3>
              <ul class="text-lg text-gray-800 space-y-1">
                <li class="flex items-center"><span class="w-4 mr-2"></span>坂田(4E，オブザーバー)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>後藤(2S)</li>
              </ul>
            </div>

            <!-- ネットワーク構築班 -->
            <div class="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 rounded-lg p-6 shadow-sm">
              <h3 class="text-xl font-bold text-cyan-700 mb-3 flex items-center">
                <span class="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm mr-3">ネットワーク構築班</span>
              </h3>
              <ul class="text-lg text-gray-800 space-y-1">
                <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>平田(5E)</li>
              </ul>
            </div>
          </div>

          <!-- 右カラム -->
          <div class="space-y-6">
            <!-- 予約システム開発班 -->
            <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 rounded-lg p-6 shadow-sm">
              <h3 class="text-xl font-bold text-yellow-700 mb-3 flex items-center">
                <span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">予約システム開発班</span>
              </h3>
              <ul class="text-lg text-gray-800 space-y-1">
                <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>平田(5E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>日詰(3S)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>松宮(2E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>竹内(2E)</li>
              </ul>
            </div>

            <!-- 会場モニタリング班 -->
            <div class="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 rounded-lg p-6 shadow-sm">
              <h3 class="text-xl font-bold text-pink-700 mb-3 flex items-center">
                <span class="bg-pink-500 text-white px-3 py-1 rounded-full text-sm mr-3">会場モニタリング班</span>
              </h3>
              <ul class="text-lg text-gray-800 space-y-1">
                <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>六田(4E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>西川(3S)</li>
                <li class="flex items-center"><span class="text-blue-500 mr-2">🎓</span>平田(5E，メンター)</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">🔧</span>日詰(3S，サポート要員)</li>
              </ul>
            </div>

            <!-- ゲート開発班 -->
            <div class="bg-gradient-to-r from-teal-50 to-teal-100 border-l-4 border-teal-500 rounded-lg p-6 shadow-sm">
              <h3 class="text-xl font-bold text-teal-700 mb-3 flex items-center">
                <span class="bg-teal-500 text-white px-3 py-1 rounded-full text-sm mr-3">ゲート開発班</span>
              </h3>
              <ul class="text-lg text-gray-800 space-y-1">
                <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>藤井(5E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>甲斐(3E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>北村(2E)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- その他のユニット -->
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- 総合演出ユニット -->
        <div class="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-lg p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-emerald-600 mb-4 text-center">総合演出ユニット</h2>
          
          <div class="space-y-4">
            <!-- サバゲー構築班 -->
            <div class="bg-white bg-opacity-50 rounded-lg p-4">
              <h3 class="text-lg font-bold text-emerald-700 mb-2">サバゲー構築班</h3>
              <ul class="text-gray-800 space-y-1">
                <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>辻本(3E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>谷村(3E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>松田(1E)</li>
              </ul>
            </div>

            <!-- 少人数教室班 -->
            <div class="bg-white bg-opacity-50 rounded-lg p-4">
              <h3 class="text-lg font-bold text-emerald-700 mb-2">少人数教室班</h3>
              <ul class="text-gray-800 space-y-1">
                <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>森本(4E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>𥸮原(4E)</li>
                <li class="flex items-center"><span class="w-4 mr-2"></span>鈴谷(3E)</li>
              </ul>
            </div>

            <!-- お客様対策チーム -->
            <div class="bg-white bg-opacity-50 rounded-lg p-4">
              <h3 class="text-lg font-bold text-emerald-700 mb-2">お客様対策チーム</h3>
              <div class="text-gray-600 italic">Coming soon...</div>
            </div>
          </div>
        </div>

        <!-- 的当てユニット -->
        <div class="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-orange-600 mb-4 text-center">的当てユニット</h2>
          
          <div class="bg-white bg-opacity-50 rounded-lg p-4">
            <h3 class="text-lg font-bold text-orange-700 mb-2">ハード班/ソフト班</h3>
            <ul class="text-gray-800 space-y-1">
              <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>白波瀬(4E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>半林(4E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>俵(3E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>丹下(1E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>湯浅(1E)</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-600 mb-4 text-center">シューティングユニット</h2>
          
          <div class="bg-white bg-opacity-50 rounded-lg mb-4 p-4">
            <h3 class="text-lg font-bold text-slate-700 mb-2">ハード班</h3>
            <ul class="text-gray-800 space-y-1">
              <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>中川(4E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>保井(1E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>眞弓(1E)</li>
            </ul>
          </div>

          <div class="bg-white bg-opacity-50 rounded-lg p-4">
            <h3 class="text-lg font-bold text-slate-700 mb-2">ソフト班</h3>
            <ul class="text-gray-800 space-y-1">
              <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>渡邉(4E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>片岡(4E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>高崎(1E)</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-lg p-6 shadow-sm">
          <h2 class="text-2xl font-bold text-amber-600 mb-4 text-center">景品ユニット</h2>
          <div class="bg-white bg-opacity-50 rounded-lg p-4">
            <h3 class="text-lg font-bold text-amber-700 mb-2">モデリング/やすり係</h3>
            <ul class="text-gray-800 space-y-1">
              <li class="flex items-center"><span class="text-yellow-500 mr-2">★</span>塚本(3E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>鈴谷(1S)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>川上(1E)</li>
              <li class="flex items-center"><span class="w-4 mr-2"></span>宮本(1E)</li>
            </ul>
          </div>
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