import Component from "../../vdom/createComponent";
import HyperScript from "../../vdom/hyperScript";
import { Address } from "../../module"

export default class ShippingAddress extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:Address()
        }
        window.addEventListener('save',e =>{
            let billAddr = {}
            this.state.list.map(item=>{
                billAddr[item.key]= item.value
            })
            billAddr['orderDate']=document.getElementById("orderdate").value
            console.log(`Shipping Address :`,billAddr)
        })
    }
    render(props,state) {
        return HyperScript(
            'h3',{class : 'col-desk-6 col-tab-6 col-mob-4 shipping'}, "Shipping Address",
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