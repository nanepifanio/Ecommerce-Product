import * as T from "./types";

type QtElements = {
  qtMinusCls: string;
  qtPlusCls: string;
  qtCls: string;
};

export default class SetQuantity {
  static minus: T.MyElements;
  static plus: T.MyElements;
  static qt: T.MyElements;
  static cont: number;

  constructor({ qtMinusCls, qtPlusCls, qtCls }: QtElements) {
    SetQuantity.minus = document.querySelector(qtMinusCls);
    SetQuantity.plus = document.querySelector(qtPlusCls);
    SetQuantity.qt = document.querySelector(qtCls);
    SetQuantity.cont = 0;
  }

  static addQt: T.VoidFunction = () => {
    if (this.cont <= 10 && this.qt) {
      this.cont++;
      this.qt.innerText = `${this.cont}`;
    }
  };

  static decreaseQt: T.VoidFunction = () => {
    if (this.cont && this.qt) {
      this.cont--;
      this.qt.innerText = `${this.cont}`;
    }
  };

  static qtBtnEventListener: T.VoidFunction = () => {
    this.plus?.addEventListener("click", this.addQt);
    this.minus?.addEventListener("click", this.decreaseQt);
  };

  init(): this {
    if (SetQuantity.minus && SetQuantity.plus) {
      SetQuantity.qtBtnEventListener();
      if (SetQuantity.qt) {
        SetQuantity.qt.innerText = `${SetQuantity.cont}`;
      }
    }
    return this;
  }
}
