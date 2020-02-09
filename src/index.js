import { AddressCreateDom } from "./container/address/address"
import { OrderCreateDom } from "./container/order/order"


import './components/input/input.scss'
import "./styles/main.scss"


AddressCreateDom()
OrderCreateDom()

window.deleteAction=(e)=>{
  let event = new CustomEvent('delete',{detail:e});
  window.dispatchEvent(event);
}
window.addAction=(e)=>{
    let event = new Event('addNew');
    window.dispatchEvent(event);
  }
addAction
// document.getElementById("root")
//     .addEventListener("click", 
//         function (e)
//             {console.log(e)}
//     );