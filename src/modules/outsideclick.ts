type OutsideClickParam = {
  element: HTMLElement;
  events: string[];
};

type callBack = () => void;

export default function outsideClick(
  { element, events }: OutsideClickParam,
  call: callBack
) {
  const html = document.documentElement as HTMLElement;
  const outside: string = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent: string) => {
      // Só é executado quando a call stack estiver vazia, mesmo não passando o tempo
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }

  function handleOutsideClick({ target }: Event): void {
    const containChild: boolean = Array.prototype.some.call(
      element.childNodes,
      (el: HTMLElement): boolean => el === target
    );
    if (!containChild) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      call();
    }
  }
}
