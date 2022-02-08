import { Component } from 'react';

import check from "../../pictures/check.png";
import redX from "../../pictures/redx.png";


class Page11 extends Component{

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

    render(){
        return(
            <div className="sheet">
                <div className='container_for_extra_small_margin left'>    
                    <h1 className='bold'>Step 5: Figuring out solutions</h1>
                    <p>Do you think you could do this activity at home on your own this week?</p>
                    <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                    <br/><br/>p
                    <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                
                    <div className="container_for_medium_margin">
                        <p className="left">What will make it hard to do at home?</p>
                        <p><em>If they're not sure, help them look through the barriers from the card sort.</em></p>
                    </div>
                
                    <div id="instruction_box_number_1_page_11_script_12" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            Help your mentee problem solve how they will deal with the barrier. Use your tools and experiences to help them solve the problem.<br/>
                            You can use the solution website <a href="https://sites.google.com/view/peer-mentoring-solutions">Link</a>
                        </p>
                    </div>

                    <div id="instruction_box_number_2_page_11_script_12" className="custom_svg demo_box container_for_small_margin">
                        <p className='top_line_in_instruction_box'>
                            After your mentee has an idea for the problem, ask: 
                        </p>
                        <ul>
                            <li>What time of day would you like to try out the activity?</li>
                            <li>Is there a place you will try out the coping strategy?</li>
                            <li>Will you set a reminder to practice the coping strategy [help them to do set the reminder, if they need help]</li>
                        </ul>

                        <div className='container_for_small_margin'>
                            <p>Provide encouragement:</p>
                            <ul>
                                <li>Good idea!</li>
                                <li>That sounds great!</li>
                            </ul>
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



export default Page11;