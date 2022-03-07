import { Component } from 'react';
import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../actions/text';

import allEars from "../pictures/allears.png"
import pause from "../pictures/pause.png"



class RemindersAboutMentoring extends Component {

    state = {
        handleclick: {
        five: null,
        otf: null,
        dns: null,
        highlight_f: '', 
        highlight_o: '',
        highlight_z: '', //These highlights are all about which element gets to be highlighted
        highlight_d: ''
        }, 
        extrapracticesession: null
    }


    handleClick = (e, letter) => {
       if (letter === 'f'){
                this.setState({handleclick: {otf : null, five: <Five />, dns: null, highlight_f: "highlighted", highlight_o: '', highlight_z: '', highlight_d: ''}})
        }
        else if (letter === 'o'){
            this.setState({handleclick: {five : null, otf: <OTFZ props={this.props} otf_or_z={'otf'}/>, dns: null, highlight_f: '', highlight_o: "highlighted", highlight_z: '', highlight_d: ''}})
        }
        else if (letter === 'z'){
            this.setState({handleclick: {five : null, otf: <OTFZ props={this.props} otf_or_z={'z'} />, dns: null, highlight_f: '', highlight_o: '', highlight_z: "highlighted", highlight_d: ''}})
        }
        else if (letter === 'd'){
            console.log('here');
            this.setState({handleclick: {five : null, otf: null, dns: <DNS />, highlight_f: '', highlight_o: '', highlight_z: "", highlight_d: 'highlighted'}})
        }
    }

    componentDidMount = () => {
        if (this.props.extrapractice){
            this.setState({extrapracticesession: <ExtraPracticeSection props={this.props} script={this.props.script} />})
        }
    }

    render() {
        if (this.props.script === "1"){
            return (
                <div className="sheet">
                    <h1 className="bold center">Reminders about mentoring</h1>
                    <div className="left container_for_small_margin">
                        <p>
                            It was really great to talk with you. <br/>
                            <span className='uline'>Mood log reminder</span>
                        </p>
                        <ul>
                            <div className={`${this.state.handleclick.highlight_f}`}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'f')}>Your mentee completed 5 mood logs.</li></div>
                            <div className={`${this.state.handleclick.highlight_o}`}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'o')}>Your mentee completed 1-4 mood logs.</li></div>
                            <div className={`${this.state.handleclick.highlight_z}`}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'z')}>Your mentee completed 0 mood logs.</li></div>
                            <div className={this.state.handleclick.highlight_d}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'd')}>Your mentee hasn't started their mood logs</li></div>
                        </ul>
                        {this.state.handleclick.five}
                        {this.state.handleclick.otf}
                        {this.state.extrapracticesession}
                        {this.state.handleclick.dns}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="sheet">
                    <h1 className="bold center">Reminders about mentoring</h1>
                    <div className="left container_for_small_margin">
                        <p>
                            It was really great to talk with you. <br/>
                            <span className='uline'>Mood log reminder</span>
                        </p>
                        <ul>
                            <div className={`${this.state.handleclick.highlight_f}`}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'f')}>Your mentee completed 5 mood logs.</li></div>
                            <div className={`${this.state.handleclick.highlight_o}`}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'o')}>Your mentee completed 1-4 mood logs.</li></div>
                            <div className={`${this.state.handleclick.highlight_z}`}><li className="square_bullets" onClick={(event) => this.handleClick(event, 'z')}>Your mentee completed 0 mood logs.</li></div>
                        </ul>
                        {this.state.handleclick.five}
                        {this.state.handleclick.otf}
                        {this.state.extrapracticesession}
                        {this.state.handleclick.dns}
                    </div>
                </div>
            )
        }
        
    }
}

class Five extends Component{
    render(){
        return(
        <p>
            You did a great job remembering to do your mood logs! Please keep doing them every day! You will keep earning money for doing them.<br/>
            Also, the more you practice doing them, the more you are helping your mental health.
        </p>
        )
    }
}

class OTFZ extends Component{

    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.props.mentee_id, script: this.props.props.script})
        :
        this.props.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.props.mentee_id, script: this.props.props.script})
    }
    
    getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }

    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }
        render(){
        return(
            <div className="left">
                <p>How have you been doing at remembering your mood logs?</p>
                <img src={pause} alt="Pause" className="pause" />
                <img src={allEars} alt="All ears" className="allEars" />
                <br/><br/>
                {this.props.otf_or_z === "otf" ? <p>This week you did <textarea className='reminders_number_done' onChange={event => this.handleChange(event)} id={`text_box_number_1_mentoring_reminders_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_1_mentoring_reminders_script_${this.props.script}`)} /> mood logs. Thanks for doing those. Please try to do 5 this week.</p> : <p>I noticed that you did not get a chance to do any of your mood logs</p>}
                <p>
                    Remember, you will earn $5 for every week that you do 5 mood logs. That means you can earn $80 for doing the mood logs during mentoring.<br/><br/>
                    Also, the more you practice, the easier it will be to tell how you feel, so you can be in charge of your mental health.<br/><br/>
                    What do you think is making it hard to do your mood logs?<br/><br/>
                    Is there a way I can help you remember to do them?
                </p>
                <br/><br/>
                {this.props.otf_or_z === "otf" ? <textarea className='reminders_text_box' onChange={event => this.handleChange(event)} id={`text_box_number_2_mentoring_reminders_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_2_mentoring_reminders_script_${this.props.script}`)} /> : null}
                {this.props.otf_or_z === "otf" ? null : <textarea className='reminders_text_box' onChange={event => this.handleChange(event)} id={`text_box_number_3_mentoring_reminders_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_3_mentoring_reminders_script_${this.props.script}`)} />}
            </div>
        )
        }
}

class ExtraPracticeSection extends Component{

    
    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.props.mentee_id, script: this.props.props.script})
        :
        this.props.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.props.mentee_id, script: this.props.props.script})

    }
    
    getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }

    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    } 
    render(){
        return(
            <div className='sheet left'>
                <div className='container_for_large_margin'>
                        <p>
                            <span className='underline_text'>Practice reminder</span> <br/>
                            This week, your job will be to practice using a coping strategy. We decided that you wanted to try   
                            <textarea className="reminders_text_box_number_4" onChange={event => this.handleChange(event)} id={`text_box_number_4_mentoring_reminders_script_${this.props.script}`} defaultValue={this.getValue(`text_box_number_4_mentoring_reminders_script_${this.props.script}`)} />.<br/>
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

class DNS extends Component {
    render(){
        return (
            <p>
                This week you will start doing your mood logs. Please try to do them at least 5 times per week. <br/><br/>
    
                The mood logs will help you learn about how you are feeling.<br/><br/>
    
                You will earn $5 for every week you do at least 5 mood logs. That means you could earn up to $80 for doing the mood logs.<br/><br/>
            </p>
        )
    }
    
}

const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemindersAboutMentoring);

