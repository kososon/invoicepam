/* ====== Konfigurasi Firebase ======
   Isi dua nilai di bawah dari Firebase Console -> Project settings -> "Your apps" (Web app).
   Nilai ini BUKAN rahasia (memang terlihat di aplikasi web); yang menjaga data adalah login + Firestore Rules.
   Jika apiKey dikosongkan, aplikasi berjalan "lokal" seperti sebelumnya (tanpa login/cloud). */
window.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBzuu2fTCBf3XPzsbLN1g1CNWMc1MoHoOU',            // contoh: 'AIzaSyD...'
  projectId: 'incoice-pam',         // contoh: 'invoice-pam-12345'
  emailDomain: 'pam-invoice.app'  // username "wilson" dipetakan ke wilson@pam-invoice.app (jangan diubah setelah user dibuat)
};
