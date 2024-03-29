const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('modals', modals);
console.log('show-modal', btnsOpenModal);

const openModal = (modalId) => {
  const pModal = document.querySelector(`.${modalId}`);
  console.log('pModal', pModal);
  // classList.remove('')可以把元素的class移除，此處移除的class名稱是hidden
  pModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const modalId = e.currentTarget.dataset.id;
    console.log('modalId', modalId);
    openModal(modalId);
  });
});

const closeModal = (modalId) => {};

const closeAllModals = () => {
  modals.forEach((modal) => {});
};



btnCloseModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {});
});

overlay.addEventListener('click', closeAllModals);
