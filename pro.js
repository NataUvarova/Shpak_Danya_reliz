document.addEventListener('DOMContentLoaded', () => {
  // Анімація карток
  const cards = document.querySelectorAll('.program-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1 + 0.3}s`;
  });

  // Додаємо анімацію через стиль
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // Модальне вікно
  const orderButtons = document.querySelectorAll('.order-btn');
  const modal = document.getElementById('orderModal');
  const closeModal = document.getElementById('closeModal');

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

  // Поведінка кнопки "Відправити"
  const submitButton = document.querySelector('.submit-btn');
  submitButton.addEventListener('click', () => {
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Надсилається...';

    setTimeout(() => {
      alert("Дякуємо за замовлення! Ми зв'яжемося з вами найближчим часом.");
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Відправити';
    }, 2000);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Створимо масив для корзини з даних у localStorage або порожній масив, якщо нічого немає
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const cartButton = document.getElementById('cartButton');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  
  const orderButtons = document.querySelectorAll('.order-btn');
  const modal = document.getElementById('orderModal');
  const closeModal = document.getElementById('closeModal');
  
  // Оновлення корзини
  function updateCartUI() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.title} — ${item.price}`;
      cartItems.appendChild(li);
    });
    cartCount.textContent = cart.length;
    // Зберігаємо корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Показуємо модальне вікно кошика
  cartButton.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  // Закриваємо модальне вікно кошика
  closeCart.addEventListener('click', () => {
    cartModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Клік по кнопці "Замовити" в картці
  orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.program-card');
      const title = card.querySelector('h2').innerText;
      const price = card.querySelector('.price').innerText;
      
      // Додаємо товар у корзину
      cart.push({ title, price });
      updateCartUI();
      
      // Показуємо форму замовлення
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  // Закриваємо модальне вікно замовлення
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Обробка відправлення замовлення
  const submitButton = document.getElementById('submitOrderBtn');
  submitButton.addEventListener('click', () => {
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Надсилається...';
    
    // Встановлюємо таймер на 2 секунди, щоб показати повідомлення
    setTimeout(() => {
      alert('Дякуємо за замовлення! Ми зв\'яжемося з вами найближчим часом.');
      
      // Очищаємо корзину після замовлення
      cart = [];
      updateCartUI();  // Оновлюємо корзину в UI
      
      // Закриваємо модальне вікно
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      
      // Повторно змінюємо текст кнопки
      submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Відправити';
    }, 2000);
  });

  // Оновлення UI при завантаженні сторінки
  updateCartUI();
});
