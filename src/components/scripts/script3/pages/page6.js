import { Component } from 'react';
import check from "../../pictures/check.png";
import redX from "../../pictures/redx.png";


class Page6 extends Component {
    state = {
        check_words: null,
        x_words: null,
        
    }
    handleClick = (e, letter) => {
        if (letter === 'c'){
                this.setState({check_words: <CheckMark choice={0} />, x_words: ''})
            }
            else if (letter === 'x'){
                this.setState({check_words : '', x_words: <CheckMark choice={1}/>})
            }
       
    }
    
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Self-monitoring</h1>
                <div className='left container_for_medium_margin'>
                    <p>
                        Today we're going to talk more about noticing symptoms.<br/>
                        Sometimes it can be hard to know how you are feeling or to notice your feelings. It can take practice.  When you know how you are feeling, you can do something to feel better.<br/>
                        Figuring out how you are feeling is called “self-monitoring.”  Have you heard of this before?
                    </p>
                    <div>
                        <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                        <br/>
                        <div className="choicePicked">{this.state.check_words}</div>
                        <br/><br/>
                        <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
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

    picker = () => {
        /* Determines what to choose as the shown text based on if you clicked on the check or the x */
        if (this.props.choice === 0){//The check was pressed
            return (
                <div>
                    <p>That's great! How do you describe self-monitoring?</p>
                    <div id="instruction_box_number_1_page_6_script_3" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">Give your mentee positive feedback on their definition. </p>
                    </div>

                    <p>My definition of self-monitoring is: paying attention to how you are feeling. This might mean thinking about how your body feels. It might also mean identifying the thoughts you have in your head. You might have happy thoughts, or you might have anxious or sad thoughts. </p>
                </div> 
            )
        }
        else if (this.props.choice === 1){//The x was pressed
            return (
                <div>
                    <p>
                        That's ok! I'll tell you about it!<br/>
                        Self-monitoring means paying attention to how you are feeling. This might mean thinking about how your body feels. It might also mean identifying the thoughts you have in your head. You might have happy thoughts, or you might have anxious or sad thoughts. 
                    </p>
                </div> 
            )
        }
    }

    render () {
        return (
            <div>
                {this.picker()}
                <br/>
                <p>
                    When you self-monitor, you can learn more about how you are feeling. This can help you change your thoughts and feelings to feel better.<br/>
                    You can get really good at self-monitoring if you practice.
                </p>
            </div>
        )
    }
}


export default Page6;

