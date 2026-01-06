const materiData = [
    { 
        id: 1, 
        judul: "Pengantar Sistem Informasi Manajemen", 
        isi: `Sistem Informasi Manajemen (SIM) adalah sebuah sistem yang terpadu antara manusia dan mesin untuk menyajikan informasi guna mendukung fungsi operasi, manajemen, dan pengambilan keputusan dalam organisasi. 
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Peran Strategis SIM:</b> SIM membantu perusahaan mencapai keunggulan operasional, mengembangkan produk baru, meningkatkan hubungan dengan pelanggan, dan memperbaiki pengambilan keputusan.</li>
            <li><b>Data vs Informasi:</b> Data adalah fakta mentah (seperti angka penjualan), sedangkan Informasi adalah data yang telah diolah menjadi bermakna (seperti tren penjualan bulanan).</li>
            <li><b>Komponen SIM:</b> Terdiri dari Hardware (perangkat keras), Software (aplikasi), Database (penyimpanan), Network (jaringan), dan Brainware (manusia yang mengoperasikan).</li>
        </ul>` 
    },
    { 
        id: 2, 
        judul: "Konsep Dasar Sistem & Informasi", 
        isi: `Memahami sistem berarti memahami bagaimana berbagai elemen bekerja sama untuk mencapai satu tujuan yang sama.
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Karakteristik Sistem:</b> Setiap sistem memiliki batasan (boundary), lingkungan luar (environment), dan input-proses-output yang saling terkait.</li>
            <li><b>Klasifikasi Sistem:</b> Ada sistem fisik (seperti komputer) dan sistem abstrak (seperti ide); serta sistem alamiah dan sistem buatan manusia.</li>
            <li><b>Kualitas Informasi:</b> Agar berguna bagi manajer, informasi harus <b>Akurat</b> (benar), <b>Tepat Waktu</b> (tersedia saat krisis), dan <b>Relevan</b> (sesuai dengan masalah yang dihadapi).</li>
        </ul>` 
    },
    { 
        id: 3, 
        judul: "SIM untuk Keunggulan Kompetitif", 
        isi: `Dalam dunia bisnis yang kompetitif, perusahaan menggunakan SIM untuk memenangkan persaingan pasar.
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Model Lima Kekuatan Porter:</b> Digunakan untuk menganalisis persaingan, meliputi ancaman pendatang baru, kekuatan pemasok, daya tawar pembeli, produk pengganti, dan intensitas rivalitas.</li>
            <li><b>Strategi Bersaing:</b> Perusahaan bisa memilih menjadi yang termurah (Cost Leadership), paling unik (Diferensiasi), atau fokus pada ceruk pasar tertentu (Focus Strategy).</li>
            <li><b>Analisis Rantai Nilai (Value Chain):</b> Membedah aktivitas perusahaan menjadi aktivitas utama (logistik, operasi) dan pendukung (SDM, teknologi) untuk mencari efisiensi.</li>
        </ul>` 
    },
    { 
        id: 4, 
        judul: "Infrastruktur Teknologi Informasi", 
        isi: `Infrastruktur TI adalah fondasi teknologi yang mendukung seluruh operasional perusahaan.
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Evolusi Perangkat Keras:</b> Perkembangan dari komputer mainframe yang besar hingga era mobile computing dan perangkat IoT (Internet of Things).</li>
            <li><b>Cloud Computing:</b> Layanan di mana data dan aplikasi disimpan di server internet (awan), yang terdiri dari SaaS (aplikasi jadi), PaaS (platform), dan IaaS (infrastruktur dasar).</li>
            <li><b>Hukum Moore:</b> Prediksi bahwa kecepatan komputer akan meningkat dua kali lipat setiap dua tahun sementara harganya menurun, mendorong adopsi teknologi secara massal.</li>
        </ul>` 
    },
    { 
        id: 5, 
        judul: "Manajemen Sumber Data (Database)", 
        isi: `Data adalah aset organisasi yang harus dikelola dengan sistematis agar tidak terjadi tumpang tindih (redundansi).
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>DBMS (Database Management System):</b> Perangkat lunak seperti MySQL atau Oracle yang digunakan untuk membuat, memelihara, dan mengontrol akses ke database.</li>
            <li><b>Model Relasional:</b> Data disusun dalam bentuk tabel yang saling terhubung menggunakan kunci unik (Primary Key).</li>
            <li><b>Big Data:</b> Kumpulan data dalam volume sangat besar, cepat berubah, dan bervariasi yang memerlukan teknologi analisis khusus untuk mengambil kesimpulan bisnis.</li>
        </ul>` 
    },
    { 
        id: 6, 
        judul: "Telekomunikasi & Jaringan Modern", 
        isi: `Telekomunikasi memungkinkan kolaborasi antar karyawan dan hubungan dengan pelanggan di seluruh dunia secara real-time.
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Jenis Jaringan:</b> LAN untuk area kecil (kantor), WAN untuk area luas (antar negara), dan Internet sebagai jaringan global utama.</li>
            <li><b>Protokol TCP/IP:</b> Bahasa standar yang memungkinkan komputer berbeda merk dan sistem operasi dapat saling berkomunikasi melalui internet.</li>
            <li><b>Intranet & Extranet:</b> Intranet adalah jaringan pribadi internal perusahaan, sedangkan Extranet memungkinkan mitra bisnis luar mengakses bagian tertentu dari jaringan perusahaan.</li>
        </ul>` 
    },
    { 
        id: 7, 
        judul: "Keamanan Sistem Informasi", 
        isi: `Tanpa keamanan yang kuat, aset digital perusahaan dapat dicuri atau dirusak oleh pihak yang tidak bertanggung jawab.
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Ancaman Siber:</b> Termasuk malware (perangkat lunak jahat), phishing (penipuan link), dan serangan DDoS yang melumpuhkan server.</li>
            <li><b>Metode Perlindungan:</b> Penggunaan Firewall sebagai dinding api, Enkripsi untuk mengacak data, dan Multi-Factor Authentication (MFA) untuk verifikasi identitas ganda.</li>
            <li><b>Kebijakan Keamanan:</b> Aturan internal perusahaan mengenai siapa yang boleh mengakses data apa (hak akses) dan prosedur pemulihan jika terjadi bencana data.</li>
        </ul>` 
    },
    { 
        id: 8, 
        judul: "Ujian Tengah Semester (UTS)", 
        isi: `Evaluasi tengah semester dilakukan untuk mengukur pemahaman mahasiswa terhadap dasar-dasar SIM sebelum lanjut ke aplikasi sistem yang lebih kompleks.
        <br><br><b>Fokus Evaluasi:</b>
        <ul>
            <li>Pemahaman perbedaan Data, Informasi, dan Pengetahuan.</li>
            <li>Kemampuan menganalisis strategi perusahaan menggunakan model Porter.</li>
            <li>Penguasaan konsep infrastruktur TI dan manajemen database.</li>
            <li>Kesadaran akan pentingnya keamanan informasi di organisasi.</li>
        </ul>` 
    },
     { 
        id: 9, 
        judul: "Sistem Perusahaan (ERP & SCM)", 
        isi: `Sistem perusahaan berfungsi mengintegrasikan berbagai departemen agar data tidak terkotak-kotak (siloed).
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Enterprise Resource Planning (ERP):</b> Sistem pusat yang mengintegrasikan keuangan, logistik, penjualan, dan SDM sehingga manajer punya pandangan menyeluruh.</li>
            <li><b>Supply Chain Management (SCM):</b> Mengelola aliran informasi dan material dari pemasok hingga ke tangan konsumen untuk mengurangi biaya dan keterlambatan.</li>
            <li><b>CRM (Customer Relationship Management):</b> Sistem untuk melacak interaksi dengan pelanggan guna meningkatkan loyalitas dan penjualan.</li>
        </ul>` 
    },
    { 
        id: 10, 
        judul: "E-Commerce & Digital Bisnis", 
        isi: `E-commerce bukan hanya tentang jualan online, tapi tentang mendigitalkan seluruh proses transaksi bisnis.
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Model Bisnis Digital:</b> B2B (antar perusahaan), B2C (perusahaan ke konsumen), dan C2C (antar konsumen seperti di marketplace).</li>
            <li><b>M-Commerce:</b> Transaksi perdagangan yang dilakukan melalui perangkat genggam seperti smartphone (Mobile Commerce).</li>
            <li><b>Digital Marketing:</b> Strategi pemasaran menggunakan media sosial, mesin pencari (SEO), dan email untuk menjangkau target pasar secara lebih spesifik.</li>
        </ul>` 
    },
    { 
        id: 11, 
        judul: "Peningkatan Pengambilan Keputusan", 
        isi: `Sistem informasi memberikan alat bantu bagi manajer agar tidak lagi mengambil keputusan hanya berdasarkan "insting".
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Decision Support System (DSS):</b> Sistem interaktif yang membantu mengambil keputusan pada masalah yang semi-terstruktur (misalnya: penentuan harga promo).</li>
            <li><b>Business Intelligence (BI):</b> Infrastruktur untuk mengumpulkan dan menganalisis data historis guna memprediksi tren masa depan.</li>
            <li><b>Kecerdasan Buatan (AI):</b> Penggunaan mesin untuk meniru kecerdasan manusia dalam mengenali pola data yang sangat kompleks.</li>
        </ul>` 
    },
    { 
        id: 12, 
        judul: "Pengembangan Sistem Informasi", 
        isi: `Membangun sistem informasi memerlukan tahapan yang jelas agar tidak terjadi kegagalan atau pemborosan biaya.
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>SDLC (System Development Life Cycle):</b> Metode tradisional yang terdiri dari Analisis, Desain, Pemrograman, Pengujian, Konversi, dan Pemeliharaan.</li>
            <li><b>Prototyping:</b> Membuat rancangan kasar sistem terlebih dahulu untuk mendapatkan masukan cepat dari calon pengguna.</li>
            <li><b>Metode Agile:</b> Pengembangan sistem secara bertahap dan cepat, yang sangat responsif terhadap perubahan kebutuhan di tengah jalan.</li>
        </ul>` 
    },
    { 
        id: 13, 
        judul: "Isu Etika & Sosial dalam SIM", 
        isi: `Teknologi informasi membawa dampak sosial yang harus dipertimbangkan secara etis oleh perusahaan.
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Privasi Informasi:</b> Hak individu untuk menentukan data apa yang boleh dikumpulkan oleh perusahaan saat mereka berinternet.</li>
            <li><b>Hak Kekayaan Intelektual:</b> Melindungi pencipta karya digital dari pembajakan atau penggunaan tanpa izin melalui hak cipta dan paten.</li>
            <li><b>Dampak Kesehatan & Sosial:</b> Isu seperti stres akibat teknologi (technostress), kelelahan mata, hingga hilangnya pekerjaan akibat otomatisasi.</li>
        </ul>` 
    },
    { 
        id: 14, 
        judul: "Manajemen Proyek & Perubahan", 
        isi: `Banyak sistem informasi yang gagal bukan karena teknologinya jelek, tapi karena manajemen proyek yang buruk dan penolakan dari karyawan.
        <br><br><b>Penjelasan Poin Utama:</b>
        <ul>
            <li><b>Manajemen Risiko:</b> Mengidentifikasi potensi hambatan (seperti anggaran bengkak) dan menyiapkan rencana cadangan.</li>
            <li><b>Resistensi Karyawan:</b> Seringkali staf menolak sistem baru karena merasa sulit atau takut digantikan. Ini harus diatasi dengan pelatihan dan komunikasi.</li>
            <li><b>Faktor Keberhasilan:</b> Dukungan penuh dari manajer tingkat atas adalah syarat mutlak agar sistem informasi baru bisa sukses diterapkan di organisasi.</li>
        </ul>` 
    }
];

const dashboardView = document.getElementById('dashboard-view');
const contentView = document.getElementById('content-view');
const materiList = document.getElementById('materi-list');
const fullContentArea = document.getElementById('full-content-area');

// Render Dashboard Cards
function renderDashboard() {
    materiList.innerHTML = ''; // Clear list
    materiData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div>
                <div class="card-tag">PERTEMUAN ${item.id}</div>
                <h4>${item.judul}</h4>
            </div>
            <div class="btn-link">Baca Materi Lengkap &rarr;</div>
        `;
        card.onclick = () => openFullMateri(index);
        materiList.appendChild(card);
    });
}

// Switch to Full Materi View
function openFullMateri(index) {
    const data = materiData[index];
    fullContentArea.innerHTML = `
        <span class="full-materi-meta">MATERI PERTEMUAN ${data.id}</span>
        <h2 class="full-materi-title">${data.judul}</h2>
        <div class="full-materi-text">
            ${data.isi}
        </div>
    `;
    
    dashboardView.classList.remove('active');
    contentView.classList.add('active');
    window.scrollTo(0,0);
}

// Switch back to Dashboard
function showDashboard() {
    contentView.classList.remove('active');
    dashboardView.classList.add('active');
    window.scrollTo(0,0);
}

// Initialize
renderDashboard();