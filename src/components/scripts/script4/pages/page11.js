import { Component } from 'react';

import axios from 'axios';


class Page11 extends Component {

    state = {
        text: {}
    }
    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    }
    
    componentDidMount() {
        this.handleScroll()
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "4"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "4"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "4" })
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
                <h1 className="bold center">Practice reminder</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        This week, your job will be to practice using a coping strategy. We decided that you wanted to try 
                    </p>
                    <div className='container_for_small_margin'>
                        <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_11_script_4" defaultValue={this.getValue("text_box_number_1_page_11_script_4")} />.
                        <p className='small' id="text_under_text_box_number_1_page_11_script_4">(the strategy you practiced today)</p>
                    </div>
                    <br/><br/>
                    <p>
                        Try to do this activity at least 4 times this week. 
                        <br/><br/>
                        What kind of help do you think you will need to remember to practice the activity?
                        <br/> 
                        Here are some ideas:
                    </p>
                        <ul>
                            <li className="square_bullets">A reminder</li>
                            <li className="square_bullets">Setting an alarm on your phone</li>
                            <li className="square_bullets">Something else: <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_11_script_4" defaultValue={this.getValue("text_box_number_2_page_11_script_4")} /></li>
                        </ul>
                    <br/><br/>
                    <p>
                        If you have challenges with your coping strategy, you can use the website!
                        <br/><br/>
                        The mood log will help you keep track of how you feel after you do the activity. You can use body scan worksheets if they help you with the mood logs.
                    </p>
                    
                </div>
            </div>
        )
    }
}
export default Page11;
