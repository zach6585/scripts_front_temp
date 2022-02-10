import { Component } from 'react';
import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";


class Page7 extends Component {

    state = {
        check_words: '',
        x_words: ''
    }
    handleClick = (e, letter) => {
        if (letter === 'c'){
                this.setState({check_words: "Can you tell me more about what you know?", x_words: ''})
            }
            else if (letter === 'x'){
                this.setState({check_words : '', x_words: "That's okay because I can teach you about it!"})
            }
       
    }

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Symptoms</h1>
                <div className='left container_for_medium_margin'>
                    <p>One way to know that a person has a mental health condition is because they have “symptoms.”  Are you familiar with that word?</p>
                    <div>
                        <img className="check" src={checkButSmaller} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                        <br/>
                        <p className="choicePicked">{this.state.check_words}</p>
                        <br/><br/>
                        <img className="redX" src={redXButSmaller} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                        <br/>
                        <p className="choicePicked">{this.state.x_words}</p>
                        <br/><br/>
                    </div>
                   <p>When people have a mental health condition, there are things that get in the way of their mood, thoughts, or behaviors.  These things are called <strong>symptoms</strong>. </p>
                   <p>Think back to a time when you had a cold.  Think about how you were feeling in your body.  Think about how your eyes, ears, nose, and throat were feeling.  Can you describe what happens to you when you have a cold?  </p>
                </div>
            </div>
        )
    }


}
export default Page7;

