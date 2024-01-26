let elModal = document.querySelector('.modal');
let elModalClose = elModal.querySelector('.js-modal-close');

if (elModalClose) {
  elModalClose.addEventListener('click', function(){
    elModal.classList.remove('modal-open');
  });
}

setTimeout(function () {
  elModal.classList.add('modal-open');
}, 3000);