import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';
import { goToSpecificPage } from '../../../../actions/page';

import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';
import check from '../../pictures/checkbutsmaller.png';
import redX from '../../pictures/redxbutsmaller.png';


class Page6 extends Component {

    state = {
        handleclick: {
        words_that_appear_when_you_click_green_check: null,
        words_that_appear_when_you_click_red_x: ''
        },
        text: {}
    }

    
        handleClick = (e, letter) => {
            if (letter === 'c'){
                this.setState({handleclick: {words_that_appear_when_you_click_green_check: 
                <p>
                    Go to next page
                </p>, 
                words_that_appear_when_you_click_red_x: ''}})
            }
            else if (letter === 'x'){
                this.setState({handleclick: {words_that_appear_when_you_click_green_check : null, words_that_appear_when_you_click_red_x:
                    <div id='image_and_p_div_page_6_script_7'>
                        <button onClick={event => this.handleButtonPress(event)}>Go to Practicing coping strategies</button>
                        <img src={stopShare} alt="Stop sharing screen" />
                    </div>
                    }})
            }
        }

        handleButtonPress = (event) => {
            this.props.goToSpecificPage(8);
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
                <h1 className="bold center">Working on challenges—mentee did not have a challenge</h1>
                <div className='left container_for_medium_margin'>
                    <p>
                        It's important to know how to problem solve when challenges come up. <br/>
                        Let's practice by thinking about some challenges that people might have. <br/><br/>
                        Here is an example: 
                    </p>
                    <ul>
                        <li>Mary was having a really hard day and wanted to listen to music. She realized that she forgot her headphones. I'll show you how Mary can use a website we made to solve this challenge or make sure it doesn't happen again. </li>
                    </ul>
                    <br/>
                    <div id='image_and_instruction_box_div_page_6_sheet_7' className='container_for_large_margin'>
                        <div id="instruction_box_number_1_page_6_script_7" className='custom_svg demo_box'>
                            <p className='top_line_in_instruction_box'>
                                Share your screen <br/>
                                Open  <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_6_script_7" defaultValue={this.getValue("text_box_number_1_page_6_script_7")} />
                            </p>
                        </div>
                        <img src={shareScreen} alt="Share your screen" />
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>What challenge do you think we should click on?</p>
                    </div>

                    <div id="instruction_box_number_2_page_6_script_7" className='custom_svg demo_box container_for_small_margin'>
                        <p className='top_line_in_instruction_box'>Help your mentee figure out that they should click on “materials”</p>
                    </div>

                    <div className='container_for_small_margin'>
                        <p>
                            Here, we can see lots of ideas for solving this challenge. Which one do you think will work? 
                            Let's do another example. 
                        </p>
                        <ul>
                            <li>Kavon is worried that he won't be allowed to take a walk break during school. What challenge do you think we should click on?</li>
                        </ul>
                    </div>

                    <div id="instruction_box_number_3_page_6_script_7" className='custom_svg demo_box container_for_small_margin'>
                        <p className='top_line_in_instruction_box'>Help your mentee figure out that they should click on “rules”</p>
                    </div>

                    <div className='container_for_small_margin'>
                        <p>What are some ideas for Kavon? </p>
                    </div>

                    <div id="instruction_box_number_4_page_6_script_7" className='custom_svg demo_box container_for_small_margin'>
                        <p className='top_line_in_instruction_box'>Talk about the potential ideas for solving Kavon's challenge.</p>
                    </div>

                    <div className='container_for_large_margin'>
                        <p>You can also use this website to think about your challenges when you have them. I'll share the link with you.</p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee had a challenge this week</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                        <br/><br/>
                        <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee did not have a challenge this week</p>
                        <br/>
                        <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                   </div>
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
        postTexts: (text_data) => dispatch(postTexts(text_data)),
        goToSpecificPage: (pageNum) => dispatch(goToSpecificPage(pageNum))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page6);