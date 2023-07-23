var drugName = document.getElementById("drug");
var drugPrice = document.getElementById("price");
var promoName = document.querySelector("#promoName");
var promo = document.querySelector("#promo");
var calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", calcular);
function calcular() {
  var promoPrice = Math.floor((parseInt(drugPrice.value) * 2)).toFixed(2);
  promoName.textContent = "Promoção de " + drugName.value.toUpperCase();
  promo.textContent = "Leve 2 por apenas R$: " + promoPrice;
}
