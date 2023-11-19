// signin.js

document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signin-form");

    signinForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Mengambil nilai dari input
        const nama = document.getElementById("nama").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Validasi dan logika sign in
        // Tambahkan implementasi validasi dan logika sign in sesuai kebutuhan

        // Setelah sign in berhasil, redirect ke halaman login
        window.location.href = "/";
    });
});
