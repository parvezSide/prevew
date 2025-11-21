document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#images_configer .all_img img.images_for');
  const previewBody = document.querySelector('#images_configer .prevew_body');
  const previewImg = previewBody.querySelector('img');
  const closeBtn = previewBody.querySelector('.cross');
  const leftBtn = previewBody.querySelector('.left');
  const rightBtn = previewBody.querySelector('.right');

  let currentIndex = 0;

  // ফাংশন - প্রিভিউ দেখাবে
  function showPreview(index) {
    currentIndex = index;
    // সব ছবিকে ব্লার করুন
    images.forEach((img, i) => {
      img.classList.remove('active');
      img.style.filter = 'blur(4px)';
    });
    // নির্বাচিত ছবিকে ব্লার মুছে দিন
    const selectedImg = images[index];
    selectedImg.classList.add('active');
    selectedImg.style.filter = 'blur(0)';

    // প্রিভিউ বডিতে ছবিও চেঞ্জ করুন
    previewImg.src = selectedImg.src;
    // প্রিভিউ বডিকে দেখান  
    previewBody.style.visibility = 'visible';
    previewBody.style.opacity = '1';
  }

  // ক্লোজ ফাংশন
  function closePreview() {
    // সব ছবির ব্লার রিলিভ করুন (বা এটা আপনার পছন্দানুসারে করুন)
    images.forEach(img => {
      img.style.filter = '';
      img.classList.remove('active');
    });
    previewBody.style.visibility = 'hidden';
    previewBody.style.opacity = '0';
  }

  // নেভিগেশন ফাংশন
  function goNext() {
    const nextIndex = (currentIndex + 1) % images.length;
    showPreview(nextIndex);
  }
  function goPrev() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showPreview(prevIndex);
  }

  // ইমেজগুলোতে ক্লিক ইভেন্ট
  images.forEach((img, idx) => {
    img.addEventListener('click', () => {
      showPreview(idx);
    });
  });

  // বাটন ক্লিক ইভেন্ট
  closeBtn.addEventListener('click', closePreview);
  rightBtn.addEventListener('click', goNext);
  leftBtn.addEventListener('click', goPrev);
});
