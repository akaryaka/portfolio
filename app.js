const btnTheme = document.querySelector('#theme-toggle-btn');

const wrapper = document.querySelector('.wrapper');
const blocks = document.querySelectorAll('.block');
const text = document.querySelectorAll('.text');
const title2Before = document.querySelectorAll('.title-2');

btnTheme.addEventListener('click', function () {
  wrapper.classList.toggle('wrapper_dark');
  blocks.forEach(function(block) {
    block.classList.toggle('block_dark')
  })

  text.forEach(function(txt) {
    txt.classList.toggle('_text_dark');
  })

  title2Before.forEach(function(item){
    item.classList.toggle('title-2_dark');
  })
})