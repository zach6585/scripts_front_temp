import { Component } from 'react';


import check from '../../pictures/check.png';
import redX from '../../pictures/redx.png';
import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';



class Page11 extends Component{

    state = {
        handleclick: {
        words_that_appear_when_you_click_green_check: null,
        words_that_appear_when_you_click_red_x: null
        }
    }

        handleClick = (e, letter) => {
            if (letter === 'c'){
                this.setState({handleclick: {words_that_appear_when_you_click_green_check: 
                <CheckMarkClicked />, 
                words_that_appear_when_you_click_red_x: ''}})
            }
            else if (letter === 'x'){
                this.setState({handleclick: {words_that_appear_when_you_click_green_check : null, words_that_appear_when_you_click_red_x:
                    <RedXClicked />
                    }})
            }
        }
    render(){
        return(
            <div className="sheet">
                <h1 className="bold center">Practicing coping strategies</h1>
                <h1 className='bold'>Step 4: Figuring out solutions</h1>
                <div className='container_for_small_margin left'>
                    <p>
                        Today we tried [solution] to make doing this coping strategy easier. <br/>
                        How did it go? <br/>
                        Do you feel like you could do this coping strategy on your own? 
                    </p>
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


class CheckMarkClicked extends Component{
    render(){
        return(
            <div>
                <p>
                    Great!<br/>
                    I hope it goes well next week What kinds of challenges do you think may happen at home? 
                </p>
                <img src={pause} alt="Pause" className='pause' />
                <img src={allEars} alt="Listen" className='allEars' />
                <p>
                    If that happens, what do you think you could do to solve that challenge?
                </p>
                <div id="instruction_box_number_1_page_11_script_7" className="custom_svg demo_box container_for_extra_small_margin">
                    <p className='top_line_in_instruction_box'>Help your mentee think through ideas</p>
                </div>
                <p>You can always use the website to help you solve challenges if they happen this week.</p>
            </div>
        )
    }
}

class RedXClicked extends Component{
    render(){
        return(
            <div>
                <p>
                    Ok, what else do you think will make it hard to do the coping strategy?<br/><br/>
                    [if your mentee isn't sure]: You can look at the website to think of the things that may get in the way. 
                </p>
                <div id="instruction_box_number_2_page_11_script_7" className="custom_svg demo_box container_for_extra_small_margin">
                    <p className='top_line_in_instruction_box'>Help your mentee think through ideas by using the website together</p>
                </div>
                <p>
                    I think you will do a great job this week!
                </p>
            </div>
        )
    }
}

export default Page11;


