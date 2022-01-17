import { Component } from 'react';

import axios from 'axios';

class SchedulingForNextWeek extends Component {

    state = {
        text: {}
    }
    
    componentDidMount() {
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
                <h1 className="bold center">Scheduling for next week</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        Thanks for meeting with me today!<br/>
                        We will meet again on:<textarea className="scheduling_for_next_week_text_box" onChange={event => this.handleChange(event)} id={`text_box_number_1_schedule_for_next_week_script_${this.props.script}`}defaultValue={this.getValue(`text_box_number_1_schedule_for_next_week_script_${this.props.script}`)} /><br/>
                        This week we will <textarea className="scheduling_for_next_week_text_box" onChange={event => this.handleChange(event)} id={`text_box_number_2_schedule_for_next_week_script_${this.props.script}`}defaultValue={this.getValue(`text_box_number_2_schedule_for_next_week_script_${this.props.script}`)} />.<br/>
                        <span className='small' id='text_call_email'>(text/call/email—the way you agreed on being in touch)</span>
                        <br/>
                        Let's decide when we will be in touch.
                    </p>
    
                    <div id="instruction_box_number_1_schedule_for_next_week" className="custom_svg demo_box container_for_medium_margin">
                        <p className="in_inst ital">
                            Schedule a time to get in touch with your mentee.<br/>
                            Here are times you will offer your mentee:<br/>
                            <textarea className="large_scheduling_for_next_week_text_box" onChange={event => this.handleChange(event)} id={`text_box_number_3_schedule_for_next_week_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_3_schedule_for_next_week_script_${this.props.script}`)} />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default SchedulingForNextWeek;
