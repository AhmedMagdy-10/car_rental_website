// 1. تشغيل السلايدر (Carousel)
const swiper = new Swiper('.hero-swiper', {
    loop: true,
    effect: 'fade',
    autoplay: { delay: 5000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

// 2. التنقل السلس بين الأقسام
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// 3. فتح واتساب بشكل عام
function openWhatsApp() {
    window.open('https://wa.me/201000030402', '_blank');
}

// 4. معالجة فورم الحجز وإرسال نص الرسالة الذي طلبته
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // جلب البيانات من الفورم (تأكد أن الـ IDs في HTML مطابقة لهذه الأسماء)
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickupDate').value;
    const dropoff = document.getElementById('dropoffDate').value;
    const service = document.getElementById('serviceType').value;

    // بناء رسالة الواتساب الاحترافية (نفس النص الذي طلبته بالظبط)
    const message = `مرحباً سبييد كار حسن 👋%0A%0A` +
        `طلب حجز جديد من الموقع:%0A` +
        `👤 الاسم: ${name}%0A` +
        `📞 الهاتف: ${phone}%0A` +
        `🛠 الخدمة: ${service}%0A` +
        `📅 تاريخ الاستلام: ${pickup}%0A` +
        `📅 تاريخ التسليم: ${dropoff}%0A%0A` +
        `هل السيارة متاحة في هذه المواعيد؟`;

    // توجيه المستخدم لواتساب
    const waURL = `https://wa.me/201000030402?text=${message}`;
    window.open(waURL, '_blank');
});

// 5. الأنييميشن عند السكرول
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});