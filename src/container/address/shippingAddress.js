import Component from "../../vdom/createComponent";
import HyperScript from "../../vdom/hyperScript";
import { Address } from "../../module"
import { CheckValidity } from "../../validateObj"

export default class ShippingAddress extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:Address()
        }
        /* 
            *** console shipping address with save click  ***
        */
        window.addEventListener('save',e =>{
            let shipAddr = {}
            this.state.list.map(item=>{
                // shipAddr[item.key]= item.value
                shipAddr[item.key] = document.getElementById(`ship${item.key}`).value
            })
            shipAddr['orderDate']=document.getElementById("orderdate").value;
            
            /****     will not console 
                        if anyfiled missing  
                        && alert message          
            ****/
            ( CheckValidity(shipAddr) === true )
                ?console.log(`Shipping Address :`,shipAddr)
                :alert(`Shipping Address :${CheckValidity(shipAddr)} missing`)
        })
    }
    render(props,state) {
        return HyperScript(
            'h3',{class : 'col-desk-6 col-tab-6 col-mob-4 shipping'}, "Shipping Address",
            HyperScript('div',{class : 'col-desk-6 col-tab-6 col-mob-4'}, ""),
            // create billing address 
            ...state.list.map((list,index) =>
                HyperScript( 'input',{type:"text",id:`ship${list.key}`,class:"input",placeHolder:`${list.name}`,value:`${list.value}`
                },'')
            ),
            // create order date
            HyperScript('h5',{class : 'col-desk-6 col-tab-6 col-mob-4'}, "Expected Date"),
            HyperScript('input', {type:'date',id:"orderdate", class:"input",value:`${new Date().toISOString().substr(0, 10)}`},'')
        )
    }
}