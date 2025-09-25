<template>
  <div class="home min-h-screen bg-gray-50 flex items-start">
    <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm  text-center p-8 m-4">
      <h1 class="text-4xl font-bold text-blue-600 mb-4">This is just a warning, no error.</h1>
      <p class="text-lg text-gray-700 max-w-md mx-auto">各種サイトへのリンク集兼ポータルサイトです．<br />みんな楽しんで開発しましょう！</p>
      
      <!-- カウントダウン -->
      <div class="mt-8 p-6 bg-orange-100 border-red-400 rounded-lg inline-block px-12">
        <h2 class="text-2xl font-bold text-red-600 mb-3">
            <span v-if="timeLeft.expired"></span>
            <span v-else>
                高専祭まで
            </span>
        </h2>
        <div class="text-3xl font-mono font-bold text-gray-800">
          <span v-if="timeLeft.expired" class="text-green-600">開発期間終了！</span>
          <span v-else>
            <span class="text-red-500">{{ timeLeft.days }}</span>日
            <span class="text-orange-500">{{ timeLeft.hours }}</span>時間
            <span class="text-yellow-500">{{ timeLeft.minutes }}</span>分
            <span class="text-green-500">{{ timeLeft.seconds }}</span>秒
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 高専祭の日時（2025年11月1日 0:00:00）
const festivalDate = new Date('2025-11-01T00:00:00')

// カウントダウンの状態
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expired: false
})

let intervalId = null

// カウントダウンを計算する関数
const updateCountdown = () => {
  const now = new Date()
  const difference = festivalDate.getTime() - now.getTime()

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      expired: false
    }
  } else {
    timeLeft.value = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true
    }
  }
}

// コンポーネントマウント時にカウントダウン開始
onMounted(() => {
  updateCountdown() // 初回実行
  intervalId = setInterval(updateCountdown, 1000) // 1秒ごとに更新
})

// コンポーネントアンマウント時にタイマーをクリア
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>

</style>