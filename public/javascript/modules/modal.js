export default class Modal {
    abrir;
    fechar;
    modalContainer;
    activeClass;
    constructor({ abrirModal, fecharModal, container, cls }) {
        this.abrir = document.querySelector(abrirModal);
        this.fechar = document.querySelector(fecharModal);
        this.modalContainer = document.querySelector(container);
        this.activeClass = cls;
    }
    toggleModal() {
        if (this.modalContainer && this.activeClass) {
            this.modalContainer.classList.toggle(this.activeClass);
        }
    }
    addModalListener() {
        document.addEventListener("click", ({ target }) => {
            if (target === this.abrir)
                this.toggleModal();
            if (target === this.fechar)
                this.toggleModal();
            if (target === this.modalContainer)
                this.toggleModal();
        });
    }
    init() {
        if (this.abrir && this.fechar && this.modalContainer) {
            this.addModalListener();
        }
        return this;
    }
}
