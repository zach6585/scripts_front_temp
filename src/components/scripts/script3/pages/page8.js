import { Component } from 'react';
import check from "../../pictures/check.png";
import redX from "../../pictures/redx.png";

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';



class Page8 extends Component {

    state = {
        check_words: null,
        x_words: null
    }
    handleClick = (e, letter) => {
        if (letter === 'c'){
                this.setState({check_words: <CheckMark props={this.props} text={this.state.text}  />, x_words: ''})
            }
            else if (letter === 'x'){
                this.setState({check_words : '', x_words:<RedX props={this.props} text={this.state.text}/>})
            }
       
    }
    
    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.mentee_id, script: this.props.script})
        :
        this.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.mentee_id, script: this.props.script})

    }
    
    getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = this.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }

    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }
  
    render() {
        return (
            <div className="sheet">
                <div className="left">
                    <p>Now it is your turn. Together, we will think about how your body feels. We will talk about each body part on the worksheet. You do not need to fill in every box on the worksheet.
                        <br/><br/>
                        If thinking about a specific body part makes you feel uncomfortable, you can let me know. We don't have to talk about that body part.
                        <br/><br/><br/>
                        How are you feeling right now? It is ok if you are not sure. 
                        <br/><br/>
                        Feeling: <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_8_script_3" defaultValue={this.getValue("text_box_number_1_page_8_script_3")} />
                        <br/><br/><br/><br/>
                        <strong>Here are some questions you can use to help your mentee think about how their body is feeling. Note:</strong> <em>These questions are also in your mentoring binder.</em>
                        <br/><br/>
                        How does your chest feel?
                    </p>
                    <ul>
                        <li>Does it feel tight?</li>
                        <li>Does it feel heavy?</li>
                        <li>Does it feel relaxed?</li>
                    </ul>
                    <p>
                        How is your breathing?
                    </p>
                    <ul>
                        <li>Is it fast or slow? Or is it normal?</li>
                        <li>Is it hard to breathe or easy to breathe?</li>
                    </ul>
                    <p>
                        How do your arms and hands feel? 
                    </p>
                    <ul>
                        <li>Do they feel tense or tight?</li>
                        <li>Do they feel relaxed?</li>
                        <li>Do they feel tense and heavy?</li>
                    </ul>
                    <p>
                        How does your head feel?
                    </p>
                    <ul>
                        <li>Does your head hurt?</li>
                        <li>Do you feel like you are having trouble thinking?</li>
                        <li>Does your head feel relaxed?</li>
                    </ul>
                    <p>How do your mouth and jaw feel?</p> 
                    <ul>
                        <li>Is your jaw tight?</li>
                        <li>Is your mouth dry?</li>
                        <li>Are you clenching your teeth? This means you are biting down and pressing your top teeth and bottom teach together.</li>
                    </ul>
                    <p>How do your shoulders feel?</p>
                    <ul>
                        <li>Are your shoulder tense or tight? </li>
                        <li>Do you feel like your shoulders are relaxed?</li>
                    </ul>
                    <p>How does your stomach feel?</p>
                    <ul>
                        <li>Does your stomach hurt?</li>
                        <li>Is your stomach in knots? Do you feel nauseous? </li>
                        <li>Does your stomach feel relaxed?</li>
                    </ul>
                    <p>How do your legs and feet feel?</p>
                    <ul>
                        <li>Do your legs and feet feel tight?</li>
                        <li>Do you feel like your legs are weak? </li>
                        <li>Are you bouncing your legs a lot? Or tapping your feet? </li>
                        <li>Are your legs and feet calm?</li>
                        <li>Do your legs feel relaxed?</li>
                    </ul>
                    <p>Fidgeting</p>
                    <ul>
                        <li>Are you fidgeting any part of your body?</li>
                    </ul>
                    <p>Do you have a change in your energy level?</p>
                    <ul>
                        <li>Do you feel like you have more energy than usual?</li>
                        <li>Do you feel like you have less energy than usual?</li>
                    </ul>
                    <div>
                        <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee <strong>did</strong> describe a feeling at the beginning of the worksheet</p>
                        <br/>
                        <div className="choicePicked">{this.state.check_words}</div>
                        <br/><br/>
                        <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee did <strong>not</strong> describe a feeling at the beginning of the worksheet</p>
                        <br/>
                        <div className="choicePicked">{this.state.x_words}</div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        )
    }


}

class CheckMark extends Component {

    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }

    render () {
        return (
            <div>
                <p>
                    At the beginning of this worksheet, you said you were feeling <strong>{this.getValue("text_box_number_1_page_8_script_3")}</strong>. 
                    <br/><br/>
                    When you are feeling <strong>{this.getValue("text_box_number_1_page_8_script_3")}</strong> how does your body  usually feel? 
                    <br/><br/>
                    Does it feel   [some of the feelings they wrote on the worksheet]
                    <br/><br/>
                    Next time you notice your body feels this way, that might be a sign that you are feeling <strong>{this.getValue("text_box_number_1_page_8_script_3")}</strong>
                    <br/><br/>
                    This is one example of how paying attention to your body can help you know how you are feeling. 
                </p>
            </div>
        )
    }
}



class RedX extends Component {

    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }

    render() {
        return (
            <div>
                <p>
                    At the beginning of this worksheet, you were not sure how you were feeling.
                    <br/><br/>
                    Based on this worksheet, do you think you have a better idea of how you are feeling?
                    <br/><br/>
                    When your body feels <strong>{this.getValue("text_box_number_1_page_8_script_3")}</strong>
                    <br/><br/>
                    what kind of feeling is that related to? This is one example of how paying attention to your body can help you know how you are feeling. 
                    <br/><br/>
                    I will give you some body scan worksheets. You can use these to practice self-monitoring this week.
                </p>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page8);

 