import { Component } from 'react';
import axios from 'axios';

import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';

import '../../extcss.scss';


class Page5 extends Component {
    
    state = {
        text: {}
    }

    componentDidMount = () => {
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "6"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "6"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "6" })
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
                <h1 className="bold center">Reviewing coping strategies</h1>
                <div className="left container_for_medium_margin">
                   <p>Last time, we talked about coping strategies. Do you remember what coping strategies are? </p>
                   <img src={pause} alt="Pause" className='pause' id="pause_page_5_script_6" />
                   <img src={allEars} alt="Listen" className='allEars' id="all_ears_page_5_script_6"/>
                   <div className='container_for_medium_margin'>
                        <p>
                           Coping strategies are activities that make you feel good. They can help you lower stress.<br/>
                        </p>
                        <div className='container_for_medium_margin'>
                            <form>
                                <div className="extcss" id="form_fields_div">
                                    <span className='side_text'>For example, sometimes I feel&nbsp;</span>
                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_1_page_5_script_6")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_1_page_5_script_6"
                                            id="text_box_number_1_page_5_script_6"
                                        />
                                    </span>
                                    <span className='side_text'>&nbsp;when</span>
                            

                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_2_page_5_script_6")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_2_page_5_script_6"
                                            id="text_box_number_2_page_5_script_6"
                                        />
                                        <label htmlFor="text_box_number_2_page_5_script_6">(stressful or sad situation)</label>
                                    </span>
                                    <span className='side_text'>. So, I</span>
                                

                                
                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_3_page_5_script_6")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_3_page_5_script_6"
                                            id="text_box_number_3_page_5_script_6"
                                        />
                                        <label htmlFor="text_box_number_3_page_5_script_6">(coping strategy)</label>
                                    </span>
                                    <span className='side_text'>&nbsp;to feel better. This means&nbsp;</span>
                                

                                
                                    <span className="inline-flex flex-col">
                                        <input
                                            onChange={event => this.handleChange(event)}
                                            defaultValue={this.getValue("text_box_number_4_page_5_script_6")}
                                            className="border-b border-black text_box_inputs"
                                            type="text"
                                            name="text_box_number_4_page_5_script_6"
                                            id="text_box_number_4_page_5_script_6"
                                        />
                                        <label htmlFor="text_box_number_4_page_5_script_6">(coping strategy)</label>
                                    </span>
                                    <span className='side_text'>&nbsp;is one of my coping strategies.</span>
                                </div>
                            </form>  
                        </div>

                        <div className='container_for_medium_margin'>
                            <p>Last week we talked about some activities that you could use as coping strategies. We are going to practice using a coping strategy.</p>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}



export default Page5;
