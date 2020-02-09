import Component from "../../vdom/createComponent";
import HyperScript from "../../vdom/hyperScript";
import { OrderList } from "../../module";
 export default class OrderItems extends Component {
    constructor(props){
        super(props)
        this.state ={
            list:OrderList()
        }
        window.addEventListener('addNew',()=>{
            this.setState({
                list:[...this.state.list, {
                  id:('NA'+this.state.list.length),
                  name:'NA',
                  qty:1,
                  price:1,
                  total:1,
                  notes:'New Item '+this.state.list.length
              }]
              })
        })
        window.addEventListener('delete',e =>{
            this.state.list.splice(e.detail,1)
            let el = document.getElementsByClassName(`order-box-${e.detail}`);
            el[0].remove();
        })
        window.addEventListener('save',e =>{
            console.log(`Orders :`,this.state.list)
        })
    }

    render(props,state) {
        return HyperScript(
            'div',{class:'orders'},'ORDER LIST ',

            // Desktop header

            HyperScript('div',{class:'grid desk-only'},'',
                HyperScript( 'div',{class:"col-desk-1"},`Product Id `),
                HyperScript( 'div',{class:"col-desk-3"},`Product Name`),
                HyperScript( 'div',{class:"col-desk-1"},`Qty`),
                HyperScript( 'div',{class:"col-desk-1"},`Unit Price`),
                HyperScript( 'div',{class:"col-desk-2"},`Total Price`),
                HyperScript( 'div',{class:"col-desk-3"},`Notes`),
                HyperScript( 'div',{class:"col-desk-1"},`Actions`)
            ),


        ...state.list.map((item,index)=> HyperScript('div',{class:`grid order-box-${index}`},'',
                HyperScript( 'div',{class:"col-mob-1 col-desk-1"},`${item.id} `),
                HyperScript( 'div',{class:"col-mob-3 col-desk-3"},`${item.name} `),
                HyperScript( 'input',{type:"number",class:"input col-mob-1 col-desk-1", min :1,value:`${item.qty}`},''),
                HyperScript( 'input',{type:"number", class:" col-mob-1 col-desk-1 input", min :1, value:`${item.price}`},``),
                HyperScript( 'input',{class:" col-mob-2 col-desk-2 input", disabled:`${true}` ,value:`${item.qty * item.price}`},``),
                HyperScript( 'textarea',{class:"input col-mob-3 col-desk-3",placeHolder:"Notes"},`${item.notes}`),
                HyperScript( 'button',{class:"col-mob-1 col-desk-1 delete",onClick:`deleteAction(${index})`},`DELETE`),
                ))
        )
    }
    
}
