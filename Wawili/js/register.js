function register() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const loading = document.getElementById("loading");
    const success = document.getElementById("success");

    if (!username || !email) {
        alert("Будь ласка, заповніть всі поля!");
        return;
    }

    // Показати блок "Завантаження..."
    loading.classList.remove("hidden");

    // Симуляція затримки реєстрації
    setTimeout(() => {
        loading.classList.add("hidden");
        success.classList.remove("hidden");

        // Перенаправлення через 2 секунди
        setTimeout(() => {
            window.location.href = "index.html"; // заміни на потрібну сторінку
        }, 2000);
    }, 2000);
}
