import { Component } from 'react';

import { connect } from 'react-redux';

import check from "../../pictures/checkbutsmaller.png";
import redX from "../../pictures/redxbutsmaller.png";


class Page12 extends Component{

    state = {
        handleclick: {
        words_that_appear_when_you_click_green_check: '',
        words_that_appear_when_you_click_red_x: null
        }
    }

    handleClick = (e, letter) => {
        if (letter === 'c'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check: 
            <p>
                That's great! 
                It's great to practice coping strategies even when you're feeling good.  
                When do you think you'll practice this coping strategy? 
            </p>, 
            words_that_appear_when_you_click_red_x: null}})
        }
        else if (letter === 'x'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check : '', words_that_appear_when_you_click_red_x: <XPicked />
                }})
        }
    }

    getLink = (current_id_tag) => {
        //Just like getValue but instead of textvalue it returns the link value
        let current_link_for_value = this.props.links.find(link_item => {return link_item.link_id === current_id_tag})
        return current_link_for_value ? current_link_for_value.link_address : ""
    }

    render(){
        return(
            <div className="sheet">
                <div className='left'>
                    <h1 className='bold'>Step 5: Figuring out solutions</h1>
                    <p>Do you think you could do this activity at home on your own this week?</p>
                    <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                    <br/><br/>
                    <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                
                    <div className="container_for_medium_margin">
                        <p className="left">What will make it hard to do at home?</p>
                    </div>
                
                    <div id="instruction_box_number_1_page_12_script_9" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee problem solve how they will deal with the barrier. Use your tools and experiences to help them solve the problem.<br/>
                            You can use the solution website <a href={this.getLink("video_link_page_12_script_9")} id="video_link_page_12_script_9" target="_blank" rel="nopener noreferrer">Link</a>
                        </p>
                    </div>

                    <div id="instruction_box_number_2_page_12_script_9" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            If your mentee is not sure, ask:
                        </p>
                        <ul>
                            <li>What time of day would you like to try out the activity?</li>
                            <li>Is there a place you will try out the coping strategy?</li>
                            <li>Will you set a reminder to practice the coping strategy [help them to set the reminder, if they need help]</li>
                        </ul>

                        <div className='container_for_small_margin'>
                            <p>Provide encouragement:</p>
                            <ul>
                                <li>Good idea!</li>
                                <li>That sounds great!</li>
                            </ul>
                            <p>If your mentee still seems to think they will have a hard time, help them problem solve using the solutions website.</p>
                        </div>
                    </div>


                </div>
            </div>
            
        )
    }
}

class XPicked extends Component{

    render() {
        return (
            <div>
                <p>
                    If your mentee is not sure, ask: 
                </p>
                <ul>
                    <li>What time of day would you like to try out the activity?</li>
                    <li>Is there a place you will try out the coping strategy?</li>
                    <li>Will you set a reminder to practice the coping strategy [help them to do set the reminder, if they need help]</li>
                </ul>
                <div className='container_for_small_margin'>
                    <p>Provide encouragement: </p>
                    <ul>
                        <li>Good idea!</li>
                        <li>That sounds great!</li>
                    </ul>
                </div>
	
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        links: state.links.links
    }
}

export default connect(mapStateToProps)(Page12);