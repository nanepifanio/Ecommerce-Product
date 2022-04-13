type OutsideClickParam = {
  element: HTMLElement;
  events: string[];
};

type CallBack = () => void;

export default function outsideClick(
  { element, events }: OutsideClickParam,
  call: CallBack
) {
  const html = document.documentElement as HTMLElement;
  const outside: string = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent: string): void => {
      // Só é executado quando a call stack estiver vazia, mesmo não passando o tempo
      setTimeout((): void => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }

  function handleOutsideClick({ target }: Event): void {
    const containChild: boolean = Array.prototype.some.call(
      element.children,
      (el: HTMLElement): boolean =>
        el === target ||
        [...el.children].some(
          (elCh) =>
            elCh === target || [...elCh.children].some((ch) => ch === target)
        )
    );
    if (!containChild) {
      element.removeAttribute(outside);
      events.forEach((userEvent: string): void => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      call();
    }
  }
}
