import { Component } from 'react';

import check from "../../pictures/check.png";
import redX from "../../pictures/redx.png";

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


class Page4 extends Component {
    
    state = {
        handleclick: {
            words_that_appear_when_you_click_green_check: null,
            words_that_appear_when_you_click_red_x: null
        }
    }
        handleClick = (e, letter) => {
            if (letter === 'c'){
                this.setState({handleclick: {words_that_appear_when_you_click_green_check: <GreenCheckClicked props={this.props} />, words_that_appear_when_you_click_red_x: null}})
            }
            else if (letter === 'x'){
                this.setState({handleclick: {words_that_appear_when_you_click_green_check : null, words_that_appear_when_you_click_red_x: <RedXClicked props={this.props} />}})
            }
        }

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Icebreaker game/fun activity</h1>
                <div className="left container_for_medium_margin">
                    <p>Would you like to do another scavenger hunt show and tell? </p>
                    <div className="container_for_medium_margin">
                        <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                        <br/><br/>
                        <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                    </div>
                </div>
            </div>
        )
    }
}

class GreenCheckClicked extends Component {

    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.props.mentee_id, script: this.props.script})
        :
        this.props.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.props.mentee_id, script: this.props.script})

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
            <div>
                <p>
                    Can you find something in your house that you worked really hard to make?<br />
                    If you can't find something that you made, can you find something that you worked hard to earn or to save up to buy?<br/>
                    I'll put my timer on for 5 minutes and I'll call out when our time is up.  If you do need a few more minutes after the timer goes off, just tell me out loud that you're still looking so I know you need some more time! <br/>
                </p>
                <div id="instruction_box_number_1_page_4_script_4" className="custom_svg demo_box container_for_medium_margin">
                    <p className='top_line_in_instruction_box'>
                    Before sharing your idea, wait to see if the mentee is come up with an example on their own. Then share:  Here is what I made.  This is a <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_4_script_4" defaultValue={this.getValue("text_box_number_1_page_4_script_4")} />  
                    and I made it in / for / when <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_4_script_4" defaultValue={this.getValue("text_box_number_2_page_4_script_4")} />. <br/>
                    When mentee shows you their item, validate them. <br/>
                    You can also ask them question to learn more about the item they showed you 
                    </p>
                </div>
                    

                
            </div>
        )
    }
}

class RedXClicked extends Component {
    render(){
        return(
            <div>
                <p>
                    Ok! <br/>
                    Let's share our thumbs up and thumbs down for the week. Does that sound good? Or, do you have another idea for a short game? <br/>
                </p>
                <div id="instruction_box_number_2_page_4_script_4" className="custom_svg demo_box container_for_medium_margin">
                    <p>
                        If they have an idea for another short game, you can do that. <br/>
                        If they do not, explain: <br/>

                        Thumbs up is something that made you happy, or something about the week that you enjoyed/ that felt good.  <br/> 

                        A thumbs down can be any stress or anything that's upsetting about this week.<br/>

                        Remember to show understanding when your mentee shares.<br/>
                    </p>  
                </div>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(Page4);
