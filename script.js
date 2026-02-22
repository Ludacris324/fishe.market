// 1. وظيفة إضافة للسلة (العداد اللي اتعلمناه)
let cart = 0;
function addToCart() {
  cart++;
  document.getElementById("cart-count").innerHTML = "السلة: " + cart;
  alert("تمت الإضافة بنجاح يا سكوربيون! 🐠");
}

// 2. وظيفة حاسبة الحوض (منطق رياضي)
function calculateFish() {
  let l = document.getElementById("length").value;
  let w = document.getElementById("width").value;

  // عملية حسابية بسيطة (تقريبية)
  let total = (l * w) / 100;

  let resultArea = document.getElementById("result");
  resultArea.innerHTML =
    "حوضك يسع حوالي " + Math.floor(total) + " سمكات صغيرة. 🐟";
  resultArea.style.color = "blue";
}
window.onload = function () {
  alert("مرحباً بك في معرض سكوربيون! استمتع بمشاهدة أجمل الأسماك 🐟");
};
let count = 0;

function addToCart() {
  count++;
  document.getElementById("cart-count").innerText = count;
  // تأثير بسيط عند الضغط
  console.log("تم إضافة سمكة جديدة يا سكوربيون! 🦂");
}

function searchFish() {
  let term = document.getElementById("searchInput").value;
  alert("جاري البحث عن: " + term + " في مخازن سكوربيون...");
}
function sortFishByPrice() {
  const container = document.querySelector(".fish-container");
  const cards = Array.from(container.getElementsByClassName("fish-card"));

  cards.sort((a, b) => {
    // بنجيب الرقم من جوا نص السعر (مثلاً "150 ج.م" بتبقى 150)
    const priceA = parseInt(
      a.querySelector("p").innerText.replace(/[^0-9]/g, ""),
    );
    const priceB = parseInt(
      b.querySelector("p").innerText.replace(/[^0-9]/g, ""),
    );
    return priceA - priceB;
  });

  // بنمسح الكروت القديمة وننزلها بالترتيب الجديد
  container.innerHTML = "";
  cards.forEach((card) => container.appendChild(card));
}
