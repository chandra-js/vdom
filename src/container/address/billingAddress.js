import Component from "../../vdom/createComponent";
import HyperScript from "../../vdom/hyperScript";
import { Address } from "../../module"
export default class BillingAddress extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:Address()
        }
        window.addEventListener('save',e =>{
            let billAddr = {}
            this.state.list.map(item=>{
                billAddr[item.key] = document.getElementById(`bill${item.key}`).value
            })
            billAddr['expectedDate']=document.getElementById("expecteddate").value
            console.log(`Billing Address :`,billAddr)
        })
    }

    render(props,state) {
        return HyperScript(
            'h3',{class : 'col-desk-6 col-tab-6 col-mob-4 bill'}, "Billing Address",
            HyperScript('div',{class : 'col-desk-6 col-tab-6 col-mob-4'}, ""),
            ...state.list.map((list,index) =>
                HyperScript( 'input',{type:"text",id:`bill${list.key}`,class:"input",placeHolder:`${list.name}`,value:`${list.value}`},'')
                ),
                HyperScript('h5',{class : 'col-desk-6 col-tab-6 col-mob-4'}, "Order Date"),
                HyperScript('input', {type:'date',id:"expecteddate", class:"input", value:`${new Date().toISOString().substr(0, 10)}`},'')
        )
    }
}