document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('orderModal');
  const closeModal = document.getElementById('closeModal');
  const orderButtons = document.querySelectorAll('.order-btn');
  const submitBtn = document.querySelector('.submit-btn');

  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });

  submitBtn.addEventListener('click', () => {
    submitBtn.innerHTML = 'Надсилається...';
    setTimeout(() => {
      alert("Дякуємо за замовлення!");
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      submitBtn.innerHTML = 'Відправити';
    }, 1500);
  });
});
