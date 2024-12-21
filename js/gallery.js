var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});

const snowContainer = document.querySelector('.snow');

function createSnowFlake() {
  const flake = document.createElement('div');
  flake.className = 'flake';
  const size = Math.random() * 5 + 2; // Kích thước ngẫu nhiên từ 2 đến 7px
  flake.style.width = `${size}px`;
  flake.style.height = `${size}px`;
  flake.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên
  flake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Thời gian rơi ngẫu nhiên từ 2 đến 5 giây
  snowContainer.appendChild(flake);

  // Xóa bông tuyết sau khi nó rơi xuống
  flake.addEventListener('animationend', () => {
    flake.remove();
  });
}

// Tạo bông tuyết mỗi 100ms
setInterval(createSnowFlake, 4000);



