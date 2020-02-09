import { AddressCreateDom } from "./container/address/address"
import { OrderCreateDom } from "./container/order/order"
import './components/input/input.scss'
import "./styles/main.scss"


AddressCreateDom() // create billing & shipping sddress
OrderCreateDom() // create order list and add
/* 
 ***********   order quantity and unit price change event ************
*/
window.changeValue=(e)=>{
    let event = new CustomEvent('valChange',{detail:e});
    window.dispatchEvent(event);
}
/* 
 ***********   order item delete event ************
*/
window.deleteAction=(e)=>{
  let event = new CustomEvent('delete',{detail:e});
  window.dispatchEvent(event);
}
/* 
 ***********   order item add event ************
*/
window.addAction=()=>{
    let event = new Event('addNew');
    window.dispatchEvent(event);
}
/* 
 ***********   Save  event ************
*/
window.saveAction=()=>{
    let event = new Event('save');
    window.dispatchEvent(event);
}

// document.getElementById("root")
//     .addEventListener("click", 
//         function (e)
//             {console.log(e)}
//     );