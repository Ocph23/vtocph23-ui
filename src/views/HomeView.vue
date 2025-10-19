<template>
  <MainLayout>
    <div class="p-6 max-w-4xl mx-auto space-y-6">
      <h1 class="text-3xl font-bold">vtocph23-ui</h1>
      <p class="text-gray-700">
        vtocph23-ui adalah library komponen UI berbasis Flowbite dan Tailwind CSS yang dikembangkan khusus untuk Vue.js
        3
        (Composition API).
        Library ini dirancang untuk mempercepat pengembangan antarmuka pengguna dengan komponen siap pakai yang
        konsisten,
        responsif, dan mudah dikustomisasi.
      </p>

      <section>
        <h2 class="text-2xl font-semibold mb-2">🚀 Fitur Utama</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Dibangun di atas Flowbite + Tailwind CSS</li>
          <li>Mendukung Vue 3 (Composition API)</li>
          <li>Komponen interaktif seperti tombol, form, tabel, modal, dan lainnya</li>
          <li>Integrasi penuh dengan tema Flowbite (light/dark mode)</li>
          <li>Struktur modular & mudah digunakan</li>
          <li>Dapat disesuaikan melalui konfigurasi Tailwind</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">📦 Instalasi</h2>
        <p class="mb-2">Pastikan proyek Anda menggunakan Vue 3 dan Tailwind CSS.</p>
        <pre class="bg-gray-100 p-3 rounded mb-2"><code>npm install vtocph23-ui</code></pre>
        <p>Atau menggunakan yarn:</p>
        <pre class="bg-gray-100 p-3 rounded"><code>yarn add vtocph23-ui</code></pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">⚙️ Konfigurasi Awal</h2>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto"><code>module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
      "./node_modules/vtocph23-ui/**/*.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin'),
      require('vtocph23-ui/plugin'),
    ],
  }</code></pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">🧩 Penggunaan Dasar</h2>
        <p>Import komponen ke dalam file Vue Anda:</p>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto"><code>&lt;script setup&gt;
  import { VtButton } from 'vtocph23-ui'
  &lt;/script&gt;
  
  &lt;template&gt;
    &lt;VtButton color="primary"&gt;Klik Saya&lt;/VtButton&gt;
  &lt;/template&gt;
  
  &lt;style&gt;
  @import 'flowbite';
  @import 'vtocph23-ui/dist/style.css';
  &lt;/style&gt;</code></pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">🧱 Contoh Komponen</h2>
        <h3 class="font-semibold">Tombol (Button)</h3>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto"><code>&lt;VtButton color="success" @click="onSave"&gt;
    Simpan Data
  &lt;/VtButton&gt;</code></pre>

        <h3 class="font-semibold mt-2">Modal</h3>
        <pre class="bg-gray-100 p-3 rounded overflow-x-auto"><code>&lt;VtModal v-model="showModal" title="Konfirmasi"&gt;
    &lt;p&gt;Apakah Anda yakin ingin melanjutkan?&lt;/p&gt;
    &lt;template #footer&gt;
      &lt;VtButton color="secondary" @click="showModal = false"&gt;Batal&lt;/VtButton&gt;
      &lt;VtButton color="primary" @click="confirm"&gt;Ya&lt;/VtButton&gt;
    &lt;/template&gt;
  &lt;/VtModal&gt;</code></pre>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">🎨 Kustomisasi Tema</h2>
        <p>
          Anda dapat menyesuaikan warna, ukuran, atau gaya global dengan memodifikasi konfigurasi Tailwind atau menimpa
          variabel CSS yang disediakan oleh Flowbite dan vtocph23-ui.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">🧪 Kompatibilitas</h2>
        <table class="table-auto border border-gray-300 w-full">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2 border">Dependensi</th>
              <th class="px-4 py-2 border">Versi Minimum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border">Vue.js</td>
              <td class="px-4 py-2 border">3.x</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border">Tailwind CSS</td>
              <td class="px-4 py-2 border">3.x</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border">Flowbite</td>
              <td class="px-4 py-2 border">2.x</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">🛠️ Kontribusi</h2>
        <p>Kontribusi sangat diterima! Silakan fork repo ini, buat branch baru (<code>feature/nama-fitur</code>), lalu
          ajukan pull request.</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-2">📄 Lisensi</h2>
        <p>Proyek ini dilisensikan di bawah MIT License.</p>
        <p>Dibuat dengan oleh Ocph23 & Victor </p>
        <p>Berbasis pada ekosistem Flowbite & Tailwind CSS.</p>
      </section>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/views/MainLayout.vue'
</script>

<style scoped>
pre {
  font-family: 'Fira Code', monospace;
}
</style>
