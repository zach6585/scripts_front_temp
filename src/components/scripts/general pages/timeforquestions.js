import { Component } from 'react';

import axios from 'axios';

class TimeForQuestions extends Component {
    
    state = {
        text: {}
        }
    
    componentDidMount = () => {
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === this.props.script){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: this.props.script})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: this.props.script })
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
                <h1 className="bold center">Time for questions</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        We are almost done for today.<br/>
                        Do you have any questions or comments about what we talked about?  Is there anything that you wish we could talk more about?
                    </p>

                    <div className='container_for_small_margin'>
                        <p>Write their question here:</p>
                    </div>

                    <div className='container_for_medium_margin'>
                            <textarea className="questions_text_box" onChange={event => this.handleChange(event)} id={`text_box_number_1_time_for_questions_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_1_time_for_questions_script_${this.props.script}`)} />
                    </div>

                    <div className='custom_svg demo_box container_for_small_margin questions_instructions_box'>
                        <p className='top_line_in_instruction_box'>
                            <em>If they ask you a question that you don't know the answer to, say:</em> <br/>
                            I don't know the answer to that question. I will ask someone and tell you the answer next time we talk. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default TimeForQuestions;



