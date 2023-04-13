// Получить модель
var modal = document.getElementById("myModal9");

// Получите изображение и вставьте его внутрь модального - используйте его текст "alt" в качестве подписи
var img = document.getElementById("myImg9");
var modalImg = document.getElementById("img019");
var captionText = document.getElementById("caption9");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close9")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Получить модель
var modal = document.getElementById("myModal10");

// Получите изображение и вставьте его внутрь модального - используйте его текст "alt" в качестве подписи
var img = document.getElementById("myImg10");
var modalImg = document.getElementById("img0110");
var captionText = document.getElementById("caption10");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close10")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}