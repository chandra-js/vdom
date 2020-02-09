import Component from "../../vdom/createComponent";
import HyperScript from "../../vdom/hyperScript";
import { Address } from "../../module"

export default class ShippingAddress extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:Address()
        }
    }
    render(props,state) {
        return HyperScript(
            'h3',{class : 'col-desk-6 col-tab-6 col-mob-4'}, "Shipping Address",
            HyperScript('div',{class : 'col-desk-6 col-tab-6 col-mob-4'}, ""),
            ...state.list.map((list,index) =>
                HyperScript( 'input',{type:"text",class:"input",placeHolder:`${list.name}`,value:`${list.value}`,
                onchange:`onChangeVal(${index})`},'')
            ),
            HyperScript('h5',{class : 'col-desk-6 col-tab-6 col-mob-4'}, "Expected Date"),
            HyperScript('input', {type:'date',id:"orderdate", class:"input",value:`${new Date().toISOString().substr(0, 10)}`},'')
        )
    }
}