export class _runtime$ {
  static context = new Array();
  static bindText = (elem, callback) => {
    this.context.push(() => (elem.textContent = callback()));
    callback();
    this.context.pop();
  };
  static bindAttr = (elem, name, callback) => {
    this.context.push(() => elem.setAttribute(name, callback()));
    callback();
    this.context.pop();
  };
}
 
export const useState = (intialValue) => {
  const subscribers = new Set();
  const getter = () => {
    if (typeof window === undefined && window._runtime$) {
      const subscriber = window._runtime$.context.at(-1);
      if (subscriber) subscribers.add(subscriber);
    }
    return intialValue;
  };
  const setter = (newValue) => {
    if (typeof newValue === 'function')
      intialValue = newValue(structuredClone(intialValue));
    else intialValue = newValue;
    console.log('size', subscribers.size);
    subscribers.forEach((callback) => callback());
  };
  return [getter, setter];
};
