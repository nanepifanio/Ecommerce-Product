export default class Modal {
  constructor(abrir, fechar, container, cls) {
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.modalContainer = document.querySelector(container);
    this.activeClass = cls;
  }

  toggleModal() {
    this.modalContainer.classList.toggle(this.activeClass);
  }

  addModalListener() {
    document.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target;
      if (target === this.abrir) this.toggleModal();
      if (target === this.fechar) this.toggleModal();
      if (target === this.container) this.toggleModal();
    });
  }

  init() {
    if (this.abrir && this.fechar && this.modalContainer) {
      this.addModalListener();
    }
    return this;
  }
}
