import Component from "../../vdom/createComponent";
import HyperScript from "../../vdom/hyperScript";
import { Address } from "../../module"
import { CheckValidity } from "../../validateObj"
export default class BillingAddress extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:Address()
        }
        /* 
            *** console billing address with save click  ***
        */
        window.addEventListener('save',e =>{
            let billAddr = {}
            this.state.list.map(item=>{
                billAddr[item.key] = document.getElementById(`bill${item.key}`).value
            })
            billAddr['expectedDate']=document.getElementById("expecteddate").value;
            /****     will not console 
                        if anyfiled missing  
                        && alert message          
            ****/
           ( CheckValidity(billAddr) === true )
           ?console.log(`Billing Address :`,billAddr)
           :alert(`Billing Address : ${CheckValidity(billAddr)} missing`)
        })
    }

    render(props,state) {
        return HyperScript(
            'h3',{class : 'col-desk-6 col-tab-6 col-mob-4 bill'}, "Billing Address",
            HyperScript('div',{class : 'col-desk-6 col-tab-6 col-mob-4'}, ""),
               // create billing address 
            ...state.list.map((list,index) =>
                HyperScript( 'input',{type:"text",id:`bill${list.key}`,class:"input",placeHolder:`${list.name}`,value:`${list.value}`},'')
                ),
                // create expected date
                HyperScript('h5',{class : 'col-desk-6 col-tab-6 col-mob-4'}, "Order Date"),
                HyperScript('input', {type:'date',id:"expecteddate", class:"input", value:`${new Date().toISOString().substr(0, 10)}`},'')
        )
    }
}