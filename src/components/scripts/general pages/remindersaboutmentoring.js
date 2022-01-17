import { Component } from 'react';

import allEars from "../pictures/allears.png"
import pause from "../pictures/pause.png"
import axios from 'axios';


class RemindersAboutMentoring extends Component {

    state = {
        handleclick: {
        five: null,
        otf: null,
        highlight_f: null, 
        highlight_o: null,
        highlight_z: null, //These highlights are all about which element gets to be highlighted,
        extrapracticesession: null
        }
    }


    handleClick = (e, letter) => {
       if (letter === 'f'){
                this.setState({handleclick: {oft : null, five: <Five />, highlight_f: "highlighted", highlight_o: null, highlight_z: null}})
            }
            else if (letter === 'o'){
                this.setState({handleclick: {five : null, otf: <OTFZ otf_or_z={'otf'} script={this.props.script} />, highlight_f: null, highlight_o: "highlighted", highlight_z: null}})
            }
            else if (letter === 'z'){
                this.setState({handleclick: {five : null, otf: <OTFZ otf_or_z={'z'} script={this.props.script} />, highlight_f: null, highlight_o: null, highlight_z: "highlighted"}})
            }
       
    }

    componentDidMount = () => {
        if (this.props.extrapractice){
            this.setState({extrapracticesession: <ExtraPracticeSection script={this.props.script} />})
        }
    }

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Reminders about mentoring</h1>
                <div className="left container_for_small_margin">
                    <p>
                        It was really great to talk with you. <br/>
                        <span className='uline'>Mood log reminder</span>
                    </p>
                    <ul>
                        <div className={this.state.handleclick.highlight_f}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'f')}>Your mentee completed 5 mood logs.</li></div>
                        <div className={this.state.handleclick.highlight_o}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'o')}>Your mentee completed 1-4 mood logs.</li></div>
                        <div className={this.state.handleclick.highlight_z}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'z')}>Your mentee completed 0 mood logs.</li></div>
                    </ul>
                    {this.state.handleclick.five}
                    {this.state.handleclick.otf}
                    {this.state.extrapracticesession}
                </div>
            </div>
        )
    }
}

class Five extends Component{
    render(){
        return(
        <p>You did a great job remembering to do your mood logs! Please keep doing them every day! You will keep earning money for doing them.</p>
        )
    }
}

class OTFZ extends Component{

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
        render(){
            const otf_or_z = this.props.otf_or_z
            let otfz1 = null;
            let otfz2 = null;
            let otfz3 = null;
            if (otf_or_z === 'otf'){
                otfz1 = <p>This week you did <textarea className='reminders_text_box' onChange={event => this.handleChange(event)} id={`text_box_number_1_mentoring_reminders_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_1_mentoring_reminders_script_${this.props.script}`)} /> mood logs. Thanks for doing those. Please try to do 5 this week.</p>
                otfz2 = <textarea className='reminders_text_box' onChange={event => this.handleChange(event)} id={`text_box_number_2_mentoring_reminders_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_2_mentoring_reminders_script_${this.props.script}`)} />
                otfz3 = null 
            }
            else if (otf_or_z === 'z'){
                otfz1 = <p>I noticed that you did not get a chance to do any of your mood logs</p>
                otfz2 = null
                otfz3 = <textarea className='reminders_text_box' onChange={event => this.handleChange(event)} id={`text_box_number_3_mentoring_reminders_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_3_mentoring_reminders_script_${this.props.script}`)} />
            }
        return(
            <div className="left">
                <p>How have you been doing at remembering your mood logs?</p>
                <img src={pause} alt="Pause" className="pause" />
                <img src={allEars} alt="All ears" className="allEars" />
                <br/><br/>
                {otfz1}
                <p>
                    Remember, you will earn $5 for every week that you do 5 mood logs. That means you can earn $80 for doing the mood logs during mentoring.<br/><br/>
                    Also, the more you practice, the easier it will be to tell how you feel, so you can be in charge of your mental health.<br/><br/>
                    What do you think is making it hard to do your mood logs?<br/><br/>
                    Is there a way I can help you remember to do them?
                </p>
                <br/><br/>
                {otfz2}
                {otfz3}
            </div>
        )
        }
}

class ExtraPracticeSection extends Component{

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
    render(){
        return(
            <div className='sheet left'>
                <div className='container_for_large_margin'>
                        <p>
                            <span className='underline_text'>Practice reminder</span> <br/>
                            This week, your job will be to practice using a coping strategy. We decided that you wanted to try   
                            <textarea className="reminders_text_box" onChange={event => this.handleChange(event)} id={`text_box_number_4_mentoring_reminders_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_4_mentoring_reminders_script_${this.props.script}`)} />.<br/>
                            <span className='small'>(the strategy you practiced today)</span><br/>
                            Try to do this activity at least 5 times this week. <br/>
                            What kind of help do you think you will need to remember to practice the activity? Here are some ideas:
                        </p>
                        <ul>
                            <li className='square_bullets'>A reminder</li>
                            <li className='square_bullets'>Setting an alarm on your phone</li>
                            <li className='square_bullets'>Something else <textarea onChange={event => this.handleChange(event)} id={`text_box_number_5_mentoring_reminders_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_5_mentoring_reminders_script_${this.props.script}`)} />.</li>
                        </ul>
                        <p>
                            If you have challenges with your coping strategy, you can use the solutions website.<br/><br/>
                            The mood log will help you keep track of how you feel after you do the activity. You can use body scan worksheet if it helps you with the mood logs.
                        </p>
                    </div>
                </div>
        )
    }
}

export default RemindersAboutMentoring;
