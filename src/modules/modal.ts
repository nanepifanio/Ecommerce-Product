type ModalParams = {
  abrirModal: string;
  fecharModal: string;
  container: string;
  cls: string;
};

export default class Modal {
  abrir: HTMLElement | null;
  fechar: HTMLElement | null;
  modalContainer: HTMLElement | null;
  activeClass: string;

  constructor({
    abrirModal,
    fecharModal,
    container,
    cls = "active",
  }: ModalParams) {
    this.abrir = document.querySelector(abrirModal);
    this.fechar = document.querySelector(fecharModal);
    this.modalContainer = document.querySelector(container);
    this.activeClass = cls;
  }

  toggleModal(): void {
    if (this.modalContainer && this.activeClass) {
      this.modalContainer.classList.toggle(this.activeClass);
    }
  }

  addModalListener(): void {
    document.addEventListener("click", ({ target }: Event): void => {
      if (target === this.abrir) this.toggleModal();
      if (target === this.fechar) this.toggleModal();
      if (target === this.modalContainer) this.toggleModal();
    });
  }

  init(): this {
    if (this.abrir && this.fechar && this.modalContainer) {
      this.addModalListener();
    }
    return this;
  }
}
