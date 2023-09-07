let filters = document.querySelectorAll('.filter__btn');
let projects = document.querySelectorAll('.projects__item-wrapper');

for(let i=0; i<filters.length; i++){
  //обработка клика по кнопкам фильтра
  filters[i].addEventListener('click', function(event) {
    //удаляем желтый фон у всех кнопок
    for(let i=0; i<filters.length; i++) {
      filters[i].classList.remove('active');
    }
    event.preventDefault();
    //добавляем желтый фон активной кнопке
    filters[i].classList.add('active');
    let filterAtrribute = filters[i].getAttribute('id');

    for(let j=0; j<projects.length; j++) {
      let projectAttributeAll = projects[j].getAttribute('data-attribute');
      let projectAttribute = projects[j].getAttribute('data-filter');

      projects[j].style.display = 'none';
      if(projectAttributeAll == filterAtrribute) {
         projects[j].style.display = 'flex';
      } else if(projectAttribute == filterAtrribute) {
        projects[j].style.display = 'flex';
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRGaWx0ZXIuanMiLCJ0aGVtZVRvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xyXG5sZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHNfX2l0ZW0td3JhcHBlcicpO1xyXG5cclxuZm9yKGxldCBpPTA7IGk8ZmlsdGVycy5sZW5ndGg7IGkrKyl7XHJcbiAgLy/QvtCx0YDQsNCx0L7RgtC60LAg0LrQu9C40LrQsCDQv9C+INC60L3QvtC/0LrQsNC8INGE0LjQu9GM0YLRgNCwXHJcbiAgZmlsdGVyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvL9GD0LTQsNC70Y/QtdC8INC20LXQu9GC0YvQuSDRhNC+0L0g0YMg0LLRgdC10YUg0LrQvdC+0L/QvtC6XHJcbiAgICBmb3IobGV0IGk9MDsgaTxmaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZpbHRlcnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy/QtNC+0LHQsNCy0LvRj9C10Lwg0LbQtdC70YLRi9C5INGE0L7QvSDQsNC60YLQuNCy0L3QvtC5INC60L3QvtC/0LrQtVxyXG4gICAgZmlsdGVyc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGxldCBmaWx0ZXJBdHJyaWJ1dGUgPSBmaWx0ZXJzW2ldLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuXHJcbiAgICBmb3IobGV0IGo9MDsgajxwcm9qZWN0cy5sZW5ndGg7IGorKykge1xyXG4gICAgICBsZXQgcHJvamVjdEF0dHJpYnV0ZUFsbCA9IHByb2plY3RzW2pdLmdldEF0dHJpYnV0ZSgnZGF0YS1hdHRyaWJ1dGUnKTtcclxuICAgICAgbGV0IHByb2plY3RBdHRyaWJ1dGUgPSBwcm9qZWN0c1tqXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJyk7XHJcblxyXG4gICAgICBwcm9qZWN0c1tqXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBpZihwcm9qZWN0QXR0cmlidXRlQWxsID09IGZpbHRlckF0cnJpYnV0ZSkge1xyXG4gICAgICAgICBwcm9qZWN0c1tqXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9IGVsc2UgaWYocHJvamVjdEF0dHJpYnV0ZSA9PSBmaWx0ZXJBdHJyaWJ1dGUpIHtcclxuICAgICAgICBwcm9qZWN0c1tqXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufSIsImNvbnN0IGJ0blRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lLXRvZ2dsZS1idG4nKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3Qgd3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlcicpO1xyXG5jb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvY2snKTtcclxuY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0Jyk7XHJcbmNvbnN0IHRpdGxlMkJlZm9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZS0yJyk7XHJcblxyXG5idG5UaGVtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3dyYXBwZXJfZGFyaycpO1xyXG4gIHRvZ2dsZUNsYXNzKGJsb2NrcywgJ2Jsb2NrJywgJ2Jsb2NrX2RhcmsnKTtcclxuICB0b2dnbGVDbGFzcyh0ZXh0LCAndHh0JywgJ190ZXh0X2RhcmsnKTtcclxuICB0b2dnbGVDbGFzcyh0aXRsZTJCZWZvcmUsICdpdGVtJywgJ3RpdGxlLTJfZGFyaycpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoYXJyYXksIGVsZW0sIGNsYXNzQmxvY2spIHtcclxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pIHtcclxuICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZShjbGFzc0Jsb2NrKTtcclxuICB9KVxyXG59Il19
