type ThumbsElements = {
  mainImgCls: string;
  thumbCls: string;
  cls?: string;
};

export default class ThumbClick {
  static mainImg: HTMLImageElement | null;
  static thumb: NodeList | null;
  static activeCls: string;
  static events: string[];

  constructor({ mainImgCls, thumbCls, cls = "active" }: ThumbsElements) {
    ThumbClick.mainImg = document.querySelector(mainImgCls);
    ThumbClick.thumb = document.querySelectorAll(thumbCls);
    ThumbClick.activeCls = cls;
    ThumbClick.events = ["click", "touchstart"];
    ThumbClick.changeMainImg = ThumbClick.changeMainImg.bind(ThumbClick);
  }

  static setMainImg(imgSrc: string): void {
    if (this.mainImg) {
      this.mainImg.src = imgSrc.replace(/-thumbnail/, "");
    }
  }

  static changeMainImg({ target }: Event): void {
    if (!!(target instanceof Element)) {
      this.thumb?.forEach((thmb: Node): void => {
        if (thmb instanceof Element) {
          if (thmb.classList.contains("active")) {
            thmb.classList.remove("active");
          }
        }
      });
      target.classList.add(this.activeCls);
      target.parentElement?.classList.add(this.activeCls);
      const thumbImgSrc: string | null = target.getAttribute("src");
      if (thumbImgSrc) this.setMainImg(thumbImgSrc);
    }
  }

  static setThumbListener(): void {
    this.events.forEach((event: string): void => {
      this.thumb?.forEach((thmb: Node): void => {
        thmb.addEventListener(event, this.changeMainImg);
      });
    });
  }

  init(): ThumbClick {
    ThumbClick.setThumbListener();
    return this;
  }
}
