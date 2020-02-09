import HyperScript from "../../vdom/hyperScript";
import Component from "../../vdom/createComponent";
import { diff } from "../../vdom/vDom.js"

import OrderItems from "./orderItems"

class Orders extends Component {


    render () {
        return HyperScript(
            'div',{class:'app'},
            HyperScript(OrderItems),
            HyperScript(
                'div',{class:'add-product grid'},'',
                HyperScript( 'button',{class:"col-mob-1 col-desk-1 add",onClick:`addAction()`},`Add Product`)
            )
        )
    }
    
}

const render = (vnode, parent) => {
    diff(undefined, vnode, parent)
}

export const OrderCreateDom = () =>(
    render(HyperScript(Orders), document.querySelector('#root'))
)