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
        if (!!(target instanceof Element)) {
            if (!element.contains(target) &&
                target !== document.querySelector('[data-menu="close"]')) {
                console.log("entrei");
                element.removeAttribute(outside);
                events.forEach((userEvent) => {
                    html.removeEventListener(userEvent, handleOutsideClick);
                });
                call();
            }
        }
    }
}
