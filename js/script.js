// 1. Prompt Nama saat load
window.onload = function() {
    let user = prompt("Halo! Siapa nama panggilan Anda?", "Guest");
    if (user) {
        document.getElementById('user-name-display').innerText = user;
    }
}

document.getElementById('portfolio-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data
    let nama = document.getElementById('inp-nama').value;
    let email = document.getElementById('inp-email').value;
    let kategori = document.getElementById('inp-kategori').value;
    let pesan = document.getElementById('inp-pesan').value;
    

    let now = new Date();
    let timeString = now.toLocaleTimeString();

    let outputHTML = `
        <p class="comment">// New Message Received at ${timeString}</p>
        <p><span style="color:#d4d4d4">const</span> <span style="color:#4fc1ff">messageData</span> = {</p>
        <p>&nbsp;&nbsp;name: "<span style="color:#ce9178">${nama}</span>",</p>
        <p>&nbsp;&nbsp;email: "<span style="color:#ce9178">${email}</span>",</p>
        <p>&nbsp;&nbsp;message: "<span style="color:#ce9178">${pesan}</span>"</p>
        <p>};</p>
        <p class="blink">_</p>
    `;

    // Masukkan ke dalam kotak terminal
    document.getElementById('result-area').innerHTML = outputHTML;

    alert("Pesan berhasil 'dikirim' ke terminal!");
});