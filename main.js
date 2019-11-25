 'use strict'

 var i = 0;

 var colors = ['red', 'blue', 'white', 'yellow', 'green', 'black', 'orange', 'gray', 'brown', 'pink'];

 var btnNext = document.querySelector('#btnNext');

 var btnPrev = document.querySelector('#btnPrev');

 btnNext.onclick = renderNext; // передаем ссылку на функцию
 btnPrev.onclick = () => renderPrev(); // стрелочная функция 

 function renderNext() {
     i < colors.length - 1 ? i++ : i = 0; // если(?) И меньше последнего индекса(длина массива минус 1), плюсуем 1. Иначе(:) И присвоить 0.
     document.getElementById('kvadrat').style.cssText = `background-color: ${colors[i]};`;
 };

 function renderPrev() {
     i > 0 ? i-- : i = colors.length - 1; // если(?) И больше 0б вычитаем 1. Иначе(:) И присвоить последний индекс массива(длина массива минус 1).
     document.getElementById('kvadrat').style.cssText = `background-color: ${colors[i]};`;
     console.log(i)
 };