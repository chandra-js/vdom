import Component from "../../vdom/createComponent";
import HyperScript from "../../vdom/hyperScript";
export default class Items extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:'',
            id:'',
            price:0
        }
    }
    render(props,state) {
        return HyperScript(
            'h6',null, "Items"
        )
    }
}