export default function outsideClick({ element, events }, call) {
    const html = document.documentElement;
    const outside = "data-outside";
    if (!element.hasAttribute(outside)) {
        events.forEach((userEvent) => {
            setTimeout(() => {
                html.addEventListener(userEvent, handleOutsideClick);
            });
        });
        element.setAttribute(outside, "");
    }
    function handleOutsideClick({ target }) {
        const containChild = Array.prototype.some.call(element.children, (el) => el === target ||
            [...el.children].some((elCh) => elCh === target || [...elCh.children].some((ch) => ch === target)));
        if (!containChild &&
            target !== document.querySelector('[data-menu="close"]')) {
            element.removeAttribute(outside);
            events.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            call();
        }
    }
}
