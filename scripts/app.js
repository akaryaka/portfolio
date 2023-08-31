let filters = document.querySelectorAll('.filter__btn');

for(let i=0; i<filters.length; i++ ){
  filters[i].addEventListener('click', function(event) {
    event.preventDefault();
    console.log(filters[i]);
  })
}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRGaWx0ZXIuanMiLCJ0aGVtZVRvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcclxuXHJcbmZvcihsZXQgaT0wOyBpPGZpbHRlcnMubGVuZ3RoOyBpKysgKXtcclxuICBmaWx0ZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJzW2ldKTtcclxuICB9KVxyXG59IiwiY29uc3QgYnRuVGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUtdG9nZ2xlLWJ0bicpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5jb25zdCB3cmFwcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyJyk7XHJcbmNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9jaycpO1xyXG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHQnKTtcclxuY29uc3QgdGl0bGUyQmVmb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdGxlLTInKTtcclxuXHJcbmJ0blRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnd3JhcHBlcl9kYXJrJyk7XHJcbiAgdG9nZ2xlQ2xhc3MoYmxvY2tzLCAnYmxvY2snLCAnYmxvY2tfZGFyaycpO1xyXG4gIHRvZ2dsZUNsYXNzKHRleHQsICd0eHQnLCAnX3RleHRfZGFyaycpO1xyXG4gIHRvZ2dsZUNsYXNzKHRpdGxlMkJlZm9yZSwgJ2l0ZW0nLCAndGl0bGUtMl9kYXJrJyk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhhcnJheSwgZWxlbSwgY2xhc3NCbG9jaykge1xyXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzQmxvY2spO1xyXG4gIH0pXHJcbn0iXX0=
