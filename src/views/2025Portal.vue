<template>
  <div class="home min-h-screen bg-gray-50 flex flex-col items-start px-4">
    <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm  text-center p-8 my-4">
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

    <router-link to="/Member" class="w-full rounded transition-colors">
    <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm p-8 my-4 hover:bg-gray-100">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">組織構成・メンバー一覧</h1>
        <p class="text-lg text-gray-700">組織構成およびメンバー一覧をご覧になれます．</p>
    </div>
    </router-link>

    <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm p-8 my-4">
      <h1 class="text-4xl font-bold text-blue-600 mb-4">資料共有（PDF）</h1>
      <p class="text-lg text-gray-700 mb-6">チームで共有するPDF資料をまとめています。閲覧またはダウンロードを選べます。</p>

      <!-- モバイル（md未満）はカード表示 -->
      <div class="md:hidden space-y-4">
        <div v-if="documents.length === 0" class="text-gray-500">現在、共有中の資料はありません。</div>
        <div v-for="doc in documents" :key="doc.path" class="border border-gray-200 rounded-lg p-4">
          <div class="font-medium text-gray-900">{{ doc.title }}</div>
          <div class="text-sm text-gray-500 mt-1">更新日: {{ doc.date }}</div>
          <div class="mt-3 flex flex-wrap gap-2">
            <a :href="doc.path" target="_blank" rel="noopener" class="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">閲覧</a>
            <a :href="doc.path" :download="doc.download || ''" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">ダウンロード</a>
          </div>
        </div>
      </div>

      <!-- タブレット以上はテーブル表示 -->
      <div class="hidden md:block">
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3 text-left text-sm font-semibold text-gray-700">資料名</th>
                <th scope="col" class="px-4 py-3 text-left text-sm font-semibold text-gray-700">更新日</th>
                <th scope="col" class="px-4 py-3 text-left text-sm font-semibold text-gray-700">操作</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-if="documents.length === 0">
                <td colspan="3" class="px-4 py-4 text-gray-500">現在、共有中の資料はありません。</td>
              </tr>
              <tr v-for="doc in documents" :key="doc.path">
                <td class="px-4 py-3 text-gray-900">{{ doc.title }}</td>
                <td class="px-4 py-3 text-gray-700">{{ doc.date }}</td>
                <td class="px-4 py-3">
                  <div class="flex flex-wrap gap-2">
                    <a :href="doc.path" target="_blank" rel="noopener" class="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">閲覧</a>
                    <a :href="doc.path" :download="doc.download || ''" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">ダウンロード</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="block w-full bg-white border border-gray-200 rounded-lg shadow-sm p-8 my-4">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">サバゲー班予約システム</h1>
        <p class="text-lg text-gray-700">予約システムおよび管理者アプリへのリンクを貼り付け予定</p>
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

// 資料共有（PDF）一覧
// PDF は public/ 配下に置くとビルド後も docs/ にそのままコピーされ、
// 下記のような相対パス（./ファイル名.pdf）で安定して配信されます。
const documents = ref([
  {
    title: '10.17高専祭全体集会文書',
    date: '2025-10-16',
    path: './zentai1017.pdf',
    download: 'zentai1017.pdf'
  },
  {
    title: '高専祭当日のゴミの分別について',
    date: '2025-10-16',
    path: './r7_gomi_bunbetsu.pdf',
    download: 'r7_gomi_bunbetsu.pdf'
  }
  // 追加例:
  // { title: '安全管理マニュアル v1.2', date: '2025-10-10', path: './safety_manual_v1_2.pdf', download: 'safety_manual_v1_2.pdf' }
])
</script>

<style scoped>

</style>