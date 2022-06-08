import { Component } from 'react';

import check from "../../pictures/checkbutsmaller.png";
import redX from "../../pictures/redxbutsmaller.png";


class Page11 extends Component{

    state = {
        handleclick: {
        words_that_appear_when_you_click_green_check: '',
        words_that_appear_when_you_click_red_x: ''
        }
    }

    handleClick = (e, letter) => {
        if (letter === 'c'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check: 
            <p>
                Let's look at some solutions together. 
                <a href="https://sites.google.com/view/peer-mentoring-solutions" id="video_link_page_11_script_10" target="_blank" rel="nopener noreferrer">Link</a>
            </p>, 
            words_that_appear_when_you_click_red_x: ''}})
        }
        else if (letter === 'x'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check : '', words_that_appear_when_you_click_red_x: 
            <p>
                I'm so glad to hear that. 
                We will move onto the next step.
            </p>
                }})
        }
    }
    
    render(){
        return(
            <div className="sheet">
                <h1 className='bold center'>Step 4: Reflecting on how it went</h1>
                <div className='container_for_medium_margin left'>
                    <p>Was anything about doing that strategy hard, just now?</p>
                    <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                    <br/><br/>
                    <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                </div>
            </div>
            
        )
    }
}

export default Page11;




