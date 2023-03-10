import { useState } from "../lib/Store";
const app = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => ++prev);
  const decrement = () => setCounter((prev) => --prev);
  const src = "./image"
  return (
    (_el$) =>{
                _el$.childNodes[0].$$click=increment;
 console.log(_el$.childNodes[0])
window._runtime$.bindAttr(_el$.childNodes[1],"src", () => src)
window._runtime$.bindText(_el$.childNodes[2].childNodes[1], () => counter()); 
 console.log(_el$.childNodes[2].childNodes[1]);
window._runtime$.bindText(_el$.childNodes[3].childNodes[0], () => counter()); 
 console.log(_el$.childNodes[3].childNodes[0]);
window._runtime$.bindText(_el$.childNodes[3].childNodes[2], () => counter()*2); 
 console.log(_el$.childNodes[3].childNodes[2]);
_el$.childNodes[4].$$click=decrement;
 console.log(_el$.childNodes[4])
            }
  );
};

export default app
