<template>
  <div class="space-y-6 pb-20">
    <!-- Üst Bilgi -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-6 shadow-xl space-y-2">
      <h2 class="text-xl font-black text-white flex items-center space-x-2">
        <i class="fa-solid fa-cloud-arrow-up text-orange-500"></i>
        <span>Kendi Bulut Depolamanı Bağla</span>
      </h2>
      <p class="text-xs text-gray-400">AWS S3, GitHub Releases veya WebDAV sunucularını entegre ederek uygulamalarını kendi altyapından yayınla.</p>
    </div>

    <!-- Bağlantı Formu -->
    <div class="bg-flame-card border border-flame-border rounded-2xl p-5 shadow-xl space-y-4">
      <h3 class="font-bold text-xs text-white flex items-center space-x-2">
        <i class="fa-solid fa-link text-orange-500"></i>
        <span>Yeni Depolama Sağlayıcısı Ekle</span>
      </h3>

      <div class="space-y-3">
        <div>
          <label class="block text-[10px] font-bold text-gray-400 mb-1">Sağlayıcı Tipi</label>
          <select class="w-full bg-flame-dark border border-flame-border rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 outline-none transition">
            <option>AWS S3 / Cloudflare R2</option>
            <option>GitHub Releases API</option>
            <option>Özel WebDAV Sunucusu</option>
            <option>Google Drive Service Account</option>
          </select>
        </div>

        <div>
          <label class="block text-[10px] font-bold text-gray-400 mb-1">Bucket veya Endpoint URL</label>
          <input type="text" placeholder="https://my-storage.s3.amazonaws.com" class="w-full bg-flame-dark border border-flame-border rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 outline-none transition" />
        </div>

        <div>
          <label class="block text-[10px] font-bold text-gray-400 mb-1">API Key / Secret Token</label>
          <input type="password" placeholder="************************" class="w-full bg-flame-dark border border-flame-border rounded-xl px-3 py-2.5 text-xs text-white focus:border-orange-500 outline-none transition" />
        </div>

        <button @click="$emit('notify', 'Bulut Senkronizasyonu', 'Depolama alanı başarıyla bağlandı ve doğrulandı!', 'fa-solid fa-cloud-circle-check')" class="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-black text-xs py-3 rounded-xl shadow-lg shadow-orange-600/30 transition">
          Depolamayı Bağla ve Test Et
        </button>
      </div>
    </div>

    <!-- Aktif Bağlantılar Listesi -->
    <div class="bg-flame-card border border-orange-500/30 rounded-2xl p-5 shadow-xl space-y-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <i class="fa-solid fa-server text-emerald-400 text-xs"></i>
          <span class="font-bold text-xs text-white">AWS S3 (Production Bucket)</span>
        </div>
        <span class="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 font-bold">Aktif</span>
      </div>
      <div class="flex justify-between text-[10px] text-gray-400 pt-2 border-t border-flame-border">
        <span>Kullanılan Alan: 4.2 GB / 100 GB</span>
        <button @click="$emit('notify', 'Senkronizasyon', 'Dosyalar yeniden tarandı.', 'fa-solid fa-rotate')" class="text-orange-400 font-bold hover:underline">Manuel Senkronize Et</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloudStorageView'
}
</script>
