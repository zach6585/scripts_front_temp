import { Component } from 'react';

import axios from 'axios';



class Step4 extends Component{

    state = {
        text: {}
        }

    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        console.log('here');
        this.handleScroll()
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "9"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "9"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "9" })
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

    render(){
        return(
            <div className="sheet">
                <h1 className='bold'>Step 4: Reflecting on how it went</h1>
                <div className='container_for_extra_small_margin'>
                    <p>Sometimes it can be hard to do a coping strategy because things get in the way.</p>
                
                    <div className="container_for_extra_small_margin solid_box">
                        <p className="top_line_in_instruction_box">
                            <em>Give an example from your own life</em><br/><br/>
                            Think about an activity that used to be hard for you. What made it hard?<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_step_4_script_9" defaultValue={this.getValue("text_box_number_1_step_4_script_9")} />
                        </p>
                    </div>
                
                    <div className="container_for_extra_small_margin solid_box">
                        <p className="top_line_in_instruction_box">
                            <em>Give an example from your own life</em><br/><br/>
                            Think about an activity that made you feel nervous or sad. What was that activity? Why did it make you feel nervous or sad?<br/>
                            <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_step_4_script_9" defaultValue={this.getValue("text_box_number_2_step_4_script_9")} />
                        </p>
                    </div>
                   
                   <div className='container_for_medium_margin'>
                       <p>We are going to use a card sort to reflect on things that may have made using your coping strategy hard.</p>
                   </div>
                </div>
            </div>
            
        )
    }
}

export default Step4;


