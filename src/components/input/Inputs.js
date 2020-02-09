import './input.scss'
class Inputs {
    constructor(obj){


    }
    textBox (){
        return `<div class='formGroup'>
                <label class='label' htmlFor="usernameOrEmail"></label>
                <input
                    class='input'
                    id="usernameOrEmail"
                    type="text"
                    name="usernameOrEmail"
                 />
                </div>`
    }
    textArea(){

    }
}

export default Inputs;
