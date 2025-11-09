// تبديل الوضع (Dark/Light)
function toggleMode() {
  document.body.classList.toggle("light-mode");
}

// عرض/إخفاء الصورة
function togglePhoto() {
  const img = document.getElementById("photo");
  img.classList.toggle("visible");
}