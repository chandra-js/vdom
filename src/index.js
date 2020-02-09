import { AddressCreateDom } from "./container/address/address"
import { OrderCreateDom } from "./container/order/order"


import './components/input/input.scss'
import "./styles/main.scss"


AddressCreateDom()
OrderCreateDom()

window.deleteAction=()=>{
  let event = new CustomEvent('delete',{detail:e});
  window.dispatchEvent(event);
}
window.addAction=()=>{
    let event = new Event('addNew');
    window.dispatchEvent(event);
}
window.saveAction=()=>{
    let event = new Event('save');
    window.dispatchEvent(event);
}
// document.getElementById("root")
//     .addEventListener("click", 
//         function (e)
//             {console.log(e)}
//     );