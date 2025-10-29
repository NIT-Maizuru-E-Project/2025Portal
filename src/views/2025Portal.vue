<template>
  <div class="home min-h-screen bg-gray-50 flex flex-col items-start px-4">
    <div class="mx-auto w-full max-w-3xl bg-white border border-gray-200 rounded-lg text-center p-6 my-4">
      <h1 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">This is just a warning, no error.</h1>
      <p class="text-base text-gray-600 max-w-2xl mx-auto">各種サイトへのリンク集兼ポータルサイトです．<br />みんな楽しんで開発しましょう！</p>
      
      <!-- カウントダウン -->
  <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg inline-block">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">
            <span v-if="timeLeft.expired">&nbsp;</span>
            <span v-else>高専祭まで</span>
          </h2>
          <div class="text-2xl font-mono font-semibold text-gray-900 tracking-tight">
            <span v-if="timeLeft.expired" class="text-green-700">開発期間終了！</span>
            <span v-else class="space-x-1">
              <span><span class="text-blue-600">{{ timeLeft.days }}</span>日</span>
              <span><span class="text-gray-800">{{ timeLeft.hours }}</span>時間</span>
              <span><span class="text-gray-800">{{ timeLeft.minutes }}</span>分</span>
              <span><span class="text-gray-800">{{ timeLeft.seconds }}</span>秒</span>
            </span>
          </div>
        </div>
    </div>



  <router-link to="/Member" class="group block w-full rounded transition-colors">
  <div class="mx-auto w-full max-w-3xl bg-white border border-gray-200 rounded-lg p-6 my-4 hover:bg-gray-50">
    <h2 class="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">組織構成・メンバー一覧</h2>
    <p class="text-sm text-gray-600">組織構成およびメンバー一覧をご覧になれます．</p>
  </div>
  </router-link>

    <div class="mx-auto w-full max-w-3xl bg-white border border-gray-200 rounded-lg p-6 my-4">
      <h2 class="text-xl font-semibold text-gray-900 mb-1">資料共有（PDF）</h2>
      <p class="text-sm text-gray-600 mb-4">共有資料の一覧です。</p>

      <div class="border border-gray-200 rounded-lg overflow-hidden">
        <ul class="divide-y divide-gray-200">
          <li v-if="documents.length === 0" class="px-4 sm:px-6 py-8 text-gray-500">現在、共有中の資料はありません。</li>
          <li v-for="doc in documents" :key="doc.path" class="group">
            <div class="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 hover:bg-gray-50 transition-colors">
              <div class="flex-1 min-w-0">
                <a :href="doc.path" target="_blank" rel="noopener" class="text-[15px] sm:text-base font-medium text-blue-600 hover:underline">
                  {{ doc.title }}
                </a>
                <div class="mt-1 text-sm text-gray-500">更新日: {{ doc.date }}</div>
              </div>
              <div class="flex items-center gap-2 sm:gap-3">
                <a :href="doc.path" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                  閲覧
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-500">
                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a :href="doc.path" :download="doc.download || ''" class="inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-black">
                  ダウンロード
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                    <path d="M3 14a1 1 0 011-1h3v-3a1 1 0 112 0v3h3a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    <path d="M7 8a1 1 0 011.707-.707l1.586 1.586 1.586-1.586A1 1 0 0114 8v5a1 1 0 11-2 0V9.414l-.293.293a1 1 0 01-1.414 0L10 9.414V13a1 1 0 11-2 0V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- チームリンク-->
    <div class="mx-auto w-full max-w-3xl bg-white border border-gray-200 rounded-lg p-6 my-4">
      <h2 class="text-xl font-semibold text-gray-900 mb-1">チームリンク</h2>
      <p class="text-sm text-gray-600 mb-4">開発・運営でよく使うサービスへのショートカットです。</p>
      <ul class="divide-y divide-gray-200">
        <li v-if="quickLinks.length === 0" class="px-4 sm:px-6 py-8 text-gray-500">現在、表示するリンクはありません。</li>
        <li v-for="link in quickLinks" :key="link.href">
          <a :href="link.href" target="_blank" rel="noopener" class="flex items-center gap-3 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-700">
              <!-- 汎用アイコン（フォルダ/コード/ドキュメント） -->
              <svg v-if="link.icon === 'folder'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                <path d="M2 6a2 2 0 012-2h3l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
              <svg v-else-if="link.icon === 'code'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                 <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
              </svg>
              <svg v-else-if="link.icon === 'doc'" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0013.414 6L10 2.586A2 2 0 008.586 2H4z" />
              </svg>
            </span>
            <div class="flex-1 min-w-0">
              <div class="text-[15px] sm:text-base font-medium text-gray-900">{{ link.title }}</div>
              <div class="text-sm text-gray-500">{{ link.desc }}</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-400">
              <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </a>
        </li>
      </ul>
    </div>

  <div class="mx-auto w-full max-w-3xl bg-white border border-gray-200 rounded-lg p-6 my-4">
    <h2 class="text-xl font-semibold text-gray-900 mb-1">サバゲー班予約システム</h2>
    <p class="text-sm text-gray-600">予約システムおよび管理者アプリへのリンクです</p>
      <ul class="divide-y divide-gray-200">
        <li v-if="svgLinks.length === 0" class="px-4 sm:px-6 py-8 text-gray-500">現在、表示するリンクはありません。</li>
        <li v-for="link in svgLinks" :key="link.href">
          <a :href="link.href" target="_blank" rel="noopener" class="flex items-center gap-3 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-700">
              <!-- 汎用アイコン（フォルダ/コード/ドキュメント） -->
              <svg v-if="link.icon === 'folder'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                <path d="M2 6a2 2 0 012-2h3l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
              <svg v-else-if="link.icon === 'code'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                 <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
              </svg>
              <svg v-else-if="link.icon === 'doc'" class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0013.414 6L10 2.586A2 2 0 008.586 2H4z" />
              </svg>
            </span>
            <div class="flex-1 min-w-0">
              <div class="text-[15px] sm:text-base font-medium text-gray-900">{{ link.title }}</div>
              <div class="text-sm text-gray-500">{{ link.desc }}</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 text-gray-400">
              <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </a>
        </li>
      </ul>
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
    title: '高専祭当日パンフレット',
    date: '2025-10-30',
    path: './2025pamphlet.pdf',
    download: '2025pamphlet.pdf'
  },
  {
    title: 'サバゲーユニットシフト',
    date: '2025-10-30',
    path: './shift_v5.pdf',
    download: 'shift_v5.pdf'
  },
  {
    title: '物品貸出・大移動に関する情報(用度部)',
    date: '2025-10-30',
    path: './buppin_daiidou.pdf',
    download: 'buppin_daiidou.pdf'
  },
  {
    title: '学校マスコットキャラクター使用許可',
    date: '2025-10-30',
    path: './mascot_ok.pdf',
    download: 'mascot_ok.pdf'
  },
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

// チームリンク（Google Drive / GitHub / Google Forms など）
const quickLinks = ref([
  {
    title: 'Google Drive（共有フォルダ）',
    desc: '基本的なファイルの管理用',
    href: 'https://drive.google.com/drive/folders/1y487sxJZDObBPFi4plgsRXLNzOy24XzS?usp=sharing',
    icon: 'folder'
  },
  {
    title: 'GitHub Organizationアカウント',
    desc: 'ソースコード管理用',
    href: 'https://github.com/NIT-Maizuru-E-Project',
    icon: 'code'
  },
  {
    title: 'GitHub利用申請フォーム',
    desc: 'Organizationアカウント申請用',
    href: 'https://forms.gle/4wXp4SsXiakqtNSK7',
    icon: 'doc'
  }
])

// チームリンク（Google Drive / GitHub / Google Forms など）
const svgLinks = ref([
  {
    title: '予約システム(お客さん向け)',
    desc: 'お客さん向けの予約システムです',
    href: 'https://e-pro2025svg-reserve.web.app/',
    icon: 'folder'
  },
  {
    title: '管理者システム(学校Googleアカウントログイン必須)',
    desc: '部員向け予約システムの管理ページです',
    href: 'https://e-pro2025-svgadmin.web.app/',
    icon: 'folder'
  }
])
</script>

<style scoped>

</style>