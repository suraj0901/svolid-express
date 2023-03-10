import { useState } from "../lib/Store";
const app = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => ++prev);
  const decrement = () => setCounter((prev) => --prev);
  const src = "./image"
  return (
     ` <template sv:key=268deeb8-c13b-4454-9a86-900232f50030></template><div ><button h="helo" >increment</button><img src="${src}" alt="random image"/><p >Count is<span>${counter()}</span></p><p ><span>${counter()}</span>* 2 =<span>${counter()*2}</span></p><button >decrement</button></div> `
  );
};

export default app
