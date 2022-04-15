export default class ThumbClick {
    static mainImg;
    static thumb;
    static activeCls;
    static events;
    constructor({ mainImgCls, thumbCls, cls = "active" }) {
        ThumbClick.mainImg = document.querySelector(mainImgCls);
        ThumbClick.thumb = document.querySelectorAll(thumbCls);
        ThumbClick.activeCls = cls;
        ThumbClick.events = ["click", "touchstart"];
        ThumbClick.changeMainImg = ThumbClick.changeMainImg.bind(ThumbClick);
    }
    static setMainImg(imgSrc) {
        if (this.mainImg) {
            this.mainImg.src = imgSrc.replace(/-thumbnail/, "");
        }
    }
    static changeMainImg({ target }) {
        if (!!(target instanceof Element)) {
            this.thumb?.forEach((thmb) => {
                if (thmb instanceof Element) {
                    if (thmb.classList.contains("active")) {
                        thmb.classList.remove("active");
                    }
                }
            });
            target.parentElement?.classList.add(this.activeCls);
            const thumbImgSrc = target.getAttribute("src");
            if (thumbImgSrc)
                this.setMainImg(thumbImgSrc);
        }
    }
    static setThumbListener() {
        this.events.forEach((event) => {
            this.thumb?.forEach((thmb) => {
                thmb.addEventListener(event, this.changeMainImg);
            });
        });
    }
    init() {
        ThumbClick.setThumbListener();
        return this;
    }
}
