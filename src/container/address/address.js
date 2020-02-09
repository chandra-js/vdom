import HyperScript from "../../vdom/hyperScript";
import Component from "../../vdom/createComponent";
import { diff } from "../../vdom/vDom.js"
import BillingAddress from "./billingAddress"
import ShippingAddress from './shippingAddress'

 class Address extends Component {
    render () {
        return HyperScript(
            'div',{class:'app'},
            HyperScript('div',{class:'grid'},
                HyperScript(BillingAddress), // Create billing address
                HyperScript(ShippingAddress), // Create shipping address
            )
        )
    }
}

const render = (vnode, parent) => {
    diff(undefined, vnode, parent)
}

export const AddressCreateDom = () =>(
    render(HyperScript(Address), document.querySelector('#root'))
)