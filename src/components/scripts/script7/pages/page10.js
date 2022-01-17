import { Component } from 'react';
import axios from 'axios';


class Page10 extends Component {
    
    state = {
        text: {}
    }
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
   

    componentDidMount = () => {
        this.handleScroll();
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "7"){
                    this.setState({
                        text: {...this.state.text, [txt.id_tag]: txt}
                    })
                }
            }      
        })
    }

    handleChange = (event) => {
        this.setState({text: {...this.state.text, [event.target.id]: {value: event.target.value, id_tag: event.target.id}}})
        if (event.target.id in this.state.text){
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "7"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "7" })
        }
    }
    

    getValue = (id) => {
        for (const i in this.state.text){
            if (this.state.text[i].id_tag === id){
                return this.state.text[i].value;
            }
        }
        return ""
    }

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Review</h1>
                <div className="left container_for_small_margin">
                    <p>
                        We did a lot today! <br/>
                        We talked about coming up with solutions when you have challenges practicing your coping strategy.<br/>
                        Next week we will work on another coping strategy. That way you will have more than one to choose from when you are feeling <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_10_script_7" defaultValue={this.getValue("text_box_number_1_page_10_script_7")} placeholder='Feeling they often have' /> <br/><br/>

                        This week, you will practice using your coping strategy and practicing solving challenges if they come up. 
                    </p>
                    <div id="instruction_box_number_1_page_10_script_7" className='custom_svg demo_box container_for_small_margin'>
                        <p className='top_line_in_instruction_box'>If your mentee tried a solution, remind them that they can use that solution or another idea at home.</p>
                    </div>

                </div>
            </div>
        )
    }
}



export default Page10;
