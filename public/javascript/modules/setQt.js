export default class SetQuantity {
    static minus;
    static plus;
    static qt;
    static cont;
    constructor({ qtMinusCls, qtPlusCls, qtCls }) {
        SetQuantity.minus = document.querySelector(qtMinusCls);
        SetQuantity.plus = document.querySelector(qtPlusCls);
        SetQuantity.qt = document.querySelector(qtCls);
        SetQuantity.cont = 0;
    }
    static addQt = () => {
        if (this.cont < 10 && this.qt) {
            this.cont++;
            this.qt.innerText = `${this.cont}`;
        }
    };
    static decreaseQt = () => {
        if (this.cont && this.qt) {
            this.cont--;
            this.qt.innerText = `${this.cont}`;
        }
    };
    static qtBtnEventListener = () => {
        this.plus?.addEventListener("click", this.addQt);
        this.minus?.addEventListener("click", this.decreaseQt);
    };
    init() {
        if (SetQuantity.minus && SetQuantity.plus) {
            SetQuantity.qtBtnEventListener();
            if (SetQuantity.qt) {
                SetQuantity.qt.innerText = `${SetQuantity.cont}`;
            }
        }
        return this;
    }
}
