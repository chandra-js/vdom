import HyperScript from "./vdom/hyperScript";
import Component from "./vdom/createComponent";
import { diff } from "./vdom/vDom.js"

const getRandomItemFromArray = (list) => {
    return list[
      Math.round(Math.random() * (list.length - 1))
    ];
  };
  
  class App extends Component {
    render() {
      return HyperScript('div', { class: 'app' },
        HyperScript('h1', null, 'Order Tracking'),
        HyperScript(People)
      )
    }
  };
  
  class People extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        list: [
          '🕺', '💃', '😀', '🙋‍', '💼',
          '🕶️️', '👏', '🤳', '🕵️', '👩‍🔧'
        ]
      }
  
      this.timer = setInterval(_ => {
        this.setState({
          list: [...this.state.list, getRandomItemFromArray(this.state.list)]
        })
      }, 1000)
    }
  
    render(props, state) {
      return HyperScript(
        'ul', null,
        ...state.list.map(item => HyperScript('li', null, item))
      )
    }
  }
  
  const render = (vnode, parent) => {
    diff(undefined, vnode, parent)
  }
  
  export const createDom = () =>(
    render(HyperScript(App), document.querySelector('#root'))
  )