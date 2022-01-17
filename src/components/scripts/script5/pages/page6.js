import { Component } from 'react';

import TimeForQuestions from '../../general pages/timeforquestions.js';



class Page6 extends Component {


    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
        
    }

        render() {
        return (
           <TimeForQuestions script={"5"} />
        )
    }
}
export default Page6;

