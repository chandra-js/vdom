// import Component from "../../vdom/createComponent";
import HyperScript from "../../vdom/hyperScript";

// export const orderItemsd =(item)=>(
//     item?(HyperScript( 'div',{class:"orderId"},`${item.id} `),
//     HyperScript( 'div',{class:"orderName"},`${item.name} `),
//     HyperScript( 'input',{type:"number",class:"itemQty", min :1,value:`${item.qty}`},''),
//     HyperScript( 'div',{class:"unitPrice"},`${item.price}`),
//     HyperScript( 'div',{class:"totalPrice"},`${item.qty * item.price}`),
//     HyperScript( 'textarea',{class:"itemNotes"},`${item.notes}`)):null
// )
export const orderItems =(item)=>(
    item?[ 
        [ 'div',{class:"orderId"},`${item.id} `],
        ['div',{class:"orderName"},`${item.name} `],
        ['input',{type:"number",class:"itemQty", min :1,value:`${item.qty}`},''],
        [ 'div',{class:"unitPrice"},`${item.price}`],
        [ 'div',{class:"totalPrice"},`${item.qty * item.price}`],
        [ 'textarea',{class:"itemNotes"},`${item.notes}`]]:null
)

//  class OrdeItems extends Component {
//     constructor(props){
//         super(props)
//         this.state ={
//             name:'',
//             id:'',
//             price:0
//         }
//         console.log(props)
//     }
       
//         render(props,state) {
//             return HyperScript(
//                 'h6',null, "Items"
//             )
//         }
   
// }