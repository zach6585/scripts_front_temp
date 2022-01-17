import { Component } from 'react';

import check from "../../../pictures/check.png";
import redX from "../../../pictures/redx.png";


class Step4 extends Component{

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
                    [Help your mentee review the solutions website]
                    Will insert hyperlink
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
    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
    }

    
    render(){
        return(
            <div className="sheet">
                <h1 className='bold'>Step 4: Reflecting on how it went</h1>
                <div className='container_for_medium_margin'>
                    <p>Was anything about doing that strategy hard, just now?</p>
                    <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                    <br/><br/>p
                    <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                </div>
            </div>
            
        )
    }
}

export default Step4;




