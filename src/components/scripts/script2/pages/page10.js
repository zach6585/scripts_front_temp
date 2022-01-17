import { Component } from 'react';

import TimeForQuestions from '../../general pages/timeforquestions';


class Page10 extends Component {

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
        

    }
    
    render() {
        return (
           <TimeForQuestions script={"2"} /> 
        )
    }
}
export default Page10;

