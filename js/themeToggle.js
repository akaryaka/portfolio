
const btnTheme = document.querySelector('#theme-toggle-btn');
const body = document.querySelector('body');
const wrappers = document.querySelectorAll('.wrapper');
const blocks = document.querySelectorAll('.block');
const text = document.querySelectorAll('.text');
const title2Before = document.querySelectorAll('.title-2');

btnTheme.addEventListener('click', function () {
  body.classList.toggle('wrapper_dark');
  toggleClass(blocks, 'block', 'block_dark');
  toggleClass(text, 'txt', '_text_dark');
  toggleClass(title2Before, 'item', 'title-2_dark');
})

function toggleClass(array, elem, classBlock) {
  array.forEach(function(elem) {
    elem.classList.toggle(classBlock);
  })
}
