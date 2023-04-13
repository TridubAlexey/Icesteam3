// Получить модель
var modal = document.getElementById("myModal4");

// Получите изображение и вставьте его внутрь модального - используйте его текст "alt" в качестве подписи
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img014");
var captionText = document.getElementById("caption4");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close4")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

