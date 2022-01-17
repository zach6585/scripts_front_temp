
import { Component } from 'react';
import TimeForQuestions from '../../general pages/timeforquestions.js';

class Page7 extends Component {

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
    }

    render(){
        return (
            <TimeForQuestions script={"6"} />
        )
    }
}
export default Page7;

