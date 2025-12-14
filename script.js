    // ======================================================
// === PENGATURAN INTEGRASI GOOGLE SHEETS (HARAP GANTI ACTION URL!) ===
// ======================================================
// GANTI DENGAN URL ACTION YANG BERAKHIRAN '/formResponse' DARI FITUR EMBED HTML
const GOOGLE_FORM_ACTION_URL = "//docs.google.com/forms/d/e/1FAIpQLSfqbUcdcpFKgASYJjLHG1NVE9ugI2hLbWmFIJ-XJkcaIaQ1xA/formResponse" ;

// FIELD ID SUDAH DIPASTIKAN BENAR DARI INPUT PENGGUNA:
const FIELD_ID_NAMA = 'entry.490153833';      
const FIELD_ID_ROLE = 'entry.388922661';      
const FIELD_ID_SCORE = 'entry.1023640493';      
const FIELD_ID_ACCURACY = 'entry.679366118';   
const FIELD_ID_STATUS = 'entry.1065400715';      
// ======================================================

// Database 30 Soal
const quizData = [
    { question: "Manakah penulisan kata serapan yang baku dan benar?", options: ["A. atlit", "B. aktifitas", "C. apotik", "D. atlet"], answer: "D. atlet" },
    { question: "Pilihlah kalimat yang paling efektif dan tidak bertele-tele.", options: ["A. Walaupun sudah malam, namun dia masih tetap bekerja.", "B. Walaupun sudah malam, dia masih tetap bekerja.", "C. Meskipun sudah malam, namun dia masih bekerja.", "D. Sudah malam, tetapi dia masih tetap bekerja."], answer: "B. Walaupun sudah malam, dia masih tetap bekerja." },
    { question: "Padanan kata Bahasa Indonesia yang tepat untuk istilah 'Feedback' adalah...", options: ["A. Ulasan", "B. Tanggapan", "C. Umpan Balik", "D. Saran"], answer: "C. Umpan Balik" },
    { question: "Dalam konteks memo, kata 'merubah' seharusnya ditulis...", options: ["A. Merubah", "B. Mengubah", "C. Merobah", "D. Mengrubah"], answer: "B. Mengubah" },
    { question: "Tanda baca yang tepat setelah sapaan 'Yth. Bapak Kepala Departemen' adalah...", options: ["A. Koma (,)", "B. Titik Dua (:)", "C. Titik (.)", "D. Tanpa Tanda Baca"], answer: "A. Koma (,)" },
    
    { question: "Penulisan gelar yang benar adalah...", options: ["A. Dr. Rudi Hidayat, M. Pd.", "B. Dr. Rudi Hidayat, M.Pd.", "C. Dr Rudi Hidayat, M.Pd", "D. DR. Rudi Hidayat, M.Pd"], answer: "B. Dr. Rudi Hidayat, M.Pd." },
    { question: "Kata yang benar untuk menggantikan 'Validitas' adalah...", options: ["A. Keabsahan", "B. Kekuatan", "C. Kesahihan", "D. Kebenaran"], answer: "C. Kesahihan" },
    { question: "Kalimat mana yang menggunakan kata kerja aktif yang tepat?", options: ["A. Masalah itu dibahas oleh kami.", "B. Kami membahas masalah itu.", "C. Kami lakukan pembahasan masalah.", "D. Pembahasan masalah dilakukan kami."], answer: "B. Kami membahas masalah itu." },
    { question: "Penggunaan huruf kapital yang salah terdapat pada kalimat...", options: ["A. Rapat akan diadakan di Ruang Rapat Selatan.", "B. Bahasa Indonesia adalah Bahasa Persatuan.", "C. Dia lahir pada bulan Januari.", "D. Kami mengirim surat kepada Bapak Ahmad."], answer: "B. Bahasa Indonesia adalah Bahasa Persatuan." },
    { question: "Yang termasuk kata baku adalah...", options: ["A. Coklat", "B. Cabai", "C. Sekedar", "D. Resiko"], answer: "B. Cabai" },

    { question: "Penulisan angka tahun dalam surat dinas yang benar adalah...", options: ["A. Jakarta, 15 - Maret - 2025", "B. Jakarta, 15 Maret 2025", "C. Jakarta; 15 Maret 2025", "D. Jakarta: 15 Maret 2025"], answer: "B. Jakarta, 15 Maret 2025" },
    { question: "Istilah asing 'Deadline' sebaiknya diganti dengan...", options: ["A. Batas Waktu", "B. Hari Akhir", "C. Garis Mati", "D. Waktu Tunggu"], answer: "A. Batas Waktu" },
    { question: "Penggunaan kata depan yang benar terdapat pada...", options: ["A. Kami pergi ke pasar.", "B. Kami di kantor.", "C. Kami dari luar kota.", "D. Semua benar."], answer: "D. Semua benar." },
    { question: "Kata 'di' yang harus dipisah adalah...", options: ["A. Dikirim", "B. Dimana", "C. Dikemas", "D. Ditemukan"], answer: "B. Dimana" },
    { question: "Singkatan baku untuk 'dan lain-lain' adalah...", options: ["A. dll.", "B. dsb.", "C. d.l.l.", "D. dll"], answer: "A. dll." },

    { question: "Pernyataan yang menggunakan tanda hubung (-) secara benar:", options: ["A. Anak-anak itu sedang bermain.", "B. Kita harus se-ia sekata.", "C. Pahlawan itu pro-kontra.", "D. Saya harus bertanggung-jawab."], answer: "A. Anak-anak itu sedang bermain." },
    { question: "Mana yang bukan termasuk kata baku?", options: ["A. Sekadar", "B. Analisis", "C. Nafas", "D. Jenderal"], answer: "C. Nafas" },
    { question: "Istilah 'Job Description' dalam Bahasa Indonesia baku adalah...", options: ["A. Deskripsi Pekerjaan", "B. Uraian Tugas", "C. Fungsi Kerja", "D. Jabatan Kerja"], answer: "B. Uraian Tugas" },
    { question: "Kata 'antara' dan 'dengan' tidak boleh digunakan bersamaan karena menyebabkan...", options: ["A. Ambiguitas", "B. Redundansi", "C. Makna Ganda", "D. Ketidakbakuan"], answer: "B. Redundansi" },
    { question: "Tanda titik koma (;) digunakan untuk...", options: ["A. Memisahkan anak kalimat", "B. Memisahkan rincian yang sudah menggunakan koma", "C. Mengakhiri kalimat", "D. Mengganti tanda koma"], answer: "B. Memisahkan rincian yang sudah menggunakan koma" },

    { question: "Penulisan partikel 'pun' yang benar adalah...", options: ["A. Walaupun", "B. Mau pun", "C. Bagaimanapun", "D. A dan C benar"], answer: "D. A dan C benar" },
    { question: "Singkatan baku untuk 'yang terhormat' adalah...", options: ["A. Yth", "B. Y.T.H.", "C. Yth.", "D. Y.T.H"], answer: "C. Yth." },
    { question: "Mana yang merupakan kalimat pasif?", options: ["A. Kami membahas masalah.", "B. Masalah dibahas oleh kami.", "C. Pimpinan rapat dimulai.", "D. Semua peserta hadir."], answer: "B. Masalah dibahas oleh kami." },
    { question: "Kata 'menganalisa' yang baku adalah...", options: ["A. Analisa", "B. Menganalisis", "C. Analisis", "D. Meng-analisa"], answer: "B. Menganalisis" },
    { question: "Penggunaan huruf kapital yang benar untuk nama instansi:", options: ["A. kementerian keuangan Republik Indonesia", "B. Kementerian Keuangan Republik Indonesia", "C. kementerian keuangan republik indonesia", "D. Kementerian Keuangan Republik indonesia"], answer: "B. Kementerian Keuangan Republik Indonesia" },

    { question: "Istilah 'Budget' dalam Bahasa Indonesia baku adalah...", options: ["A. Uang", "B. Anggaran", "C. Dana", "D. Biaya"], answer: "B. Anggaran" },
    { question: "Penulisan 'semi final' yang benar adalah...", options: ["A. Semifinal", "B. Semi-final", "C. Semi Final", "D. SemiFinal"], answer: "A. Semifinal" },
    { question: "Tanda baca yang digunakan untuk memisahkan jam, menit, dan detik:", options: ["A. Koma (,)", "B. Titik Dua (:)", "C. Titik (.)", "D. Titik Koma (;)"], answer: "B. Titik Dua (:)" },
    { question: "Pernyataan yang menggunakan kata 'daripada' secara salah:", options: ["A. Meja ini lebih besar daripada kursi.", "B. Masalah itu berawal daripada kesalahpahaman.", "C. Daripada menganggur, lebih baik bekerja.", "D. Semua benar."], answer: "B. Masalah itu berawal daripada kesalahpahaman." },
    { question: "Penulisan 'fotocopy' yang benar adalah...", options: ["A. Foto Kopi", "B. Fotokopi", "C. Photo Copy", "D. Foto Copy"], answer: "B. Fotokopi" }

];

// Variabel Global dan Logika
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
const TIME_LIMIT = 20; 
let timerInterval;

let candidateName = '';
let candidateRole = '';

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const startForm = document.getElementById('start-form');
const quizContainer = document.getElementById('quiz-container');
const questionArea = document.getElementById('question-area');
const optionsContainer = document.getElementById('options-container');
const timerDisplay = document.getElementById('timer-display');
const scoreDisplay = document.getElementById('score-display');
const feedback = document.getElementById('feedback');

// Fungsi Utama
startForm.addEventListener('submit', function(e) {
    e.preventDefault();
    candidateName = document.getElementById('candidate-name').value.trim();
    candidateRole = document.getElementById('candidate-role').value.trim();
    
    if (candidateName && candidateRole) {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        displayQuestion();
    } else {
        alert("Mohon lengkapi Nama dan Posisi/Kelas.");
    }
});

function startTimer() {
    let timeLeft = TIME_LIMIT;
    timerDisplay.textContent = `Waktu: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Waktu: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            feedback.textContent = "Waktu Habis! Poin dikurangi -2.";
            updateScore(-2);
            setTimeout(nextQuestion, 1500);
        }
    }, 1000);
}

function displayQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        endGame();
        return;
    }

    const q = quizData[currentQuestionIndex];
    questionArea.textContent = `${currentQuestionIndex + 1}/${quizData.length}. ${q.question}`;
    optionsContainer.innerHTML = '';
    feedback.textContent = '';
    
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    clearInterval(timerInterval);
    startTimer();
}

function updateScore(points) {
    score += points;
    scoreDisplay.textContent = score;
}

function checkAnswer(selectedAnswer, button) {
    clearInterval(timerInterval);
    const q = quizData[currentQuestionIndex];

    const isCorrect = selectedAnswer === q.answer;
    const points = isCorrect ? 5 : -3;

    if (isCorrect) {
        correctCount++;
    }

    // Visual feedback
    optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true; 
        if (btn.textContent === q.answer) {
            btn.classList.add('correct');
        } else if (btn === button && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    feedback.textContent = isCorrect 
        ? `BENAR! +${points} Poin.` 
        : `SALAH! Jawaban yang benar adalah: ${q.answer}. ${points} Poin.`;
    
    updateScore(points);
    
    setTimeout(nextQuestion, 2000); 
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}


// FUNGSI PENGIRIMAN DATA KE GOOGLE SHEETS
function sendResultToGoogleSheets(finalScore, finalAccuracy, finalStatus) {
    const data = {};
    data[FIELD_ID_NAMA] = candidateName;
    data[FIELD_ID_ROLE] = candidateRole;
    data[FIELD_ID_SCORE] = finalScore;
    data[FIELD_ID_ACCURACY] = finalAccuracy + '%'; 
    data[FIELD_ID_STATUS] = finalStatus;

    const formData = new URLSearchParams(data).toString();

    fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    })
    .then(() => {
        console.log(`Data ${candidateName} berhasil dikirim.`);
    })
    .catch(error => {
        console.error("Gagal mengirim data:", error);
    });
}

function endGame() {
    const totalQuestions = quizData.length;
    const finalAccuracy = ((correctCount / totalQuestions) * 100).toFixed(0); 
    
    let status = 'TIDAK LULUS';
    // Contoh Kriteria Kelulusan: LULUS jika akurasi >= 75%
    if (finalAccuracy >= 75) {
        status = 'LULUS';
    } else if (finalAccuracy >= 50) {
        status = 'PERLU PERBAIKAN';
    }

    // KIRIM DATA KE SPREADSHEET
    sendResultToGoogleSheets(score, finalAccuracy, status); 

    // Tampilan Hasil Akhir di Layar
    quizContainer.innerHTML = `
        <div class="result-box">
            <div class="mascot-happy"></div>
            <h2>🎉 TES SELESAI, ${candidateName}!</h2>
            <p>Posisi/Bagian: <strong>${candidateRole}</strong></p>
            <hr>
            <h3>🏆 HASIL REKAPAN 🏆</h3>
            <div class="result-grid">
                <div>Skor Total: <span>${score} Poin</span></div>
                <div>Akurasi: <span>${finalAccuracy}%</span></div>
                <div>Status: <span class="${status.toLowerCase().replace(' ', '-')}">${status}</span></div>
            </div>
            <p class="note">Data Anda telah direkam otomatis. Mohon tunggu informasi selanjutnya dari HRD.</p>
            <a href="${window.location.href}" class="action-btn" style="display:block; margin-top: 20px; text-decoration: none;">Ulangi Tes</a>
        </div>
    `;
}
