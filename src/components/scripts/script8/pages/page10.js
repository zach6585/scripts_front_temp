import { Component } from 'react';

import RemindersAboutMentoring from '../../general pages/remindersaboutmentoring.js';


class Page10 extends Component {
    

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()

    }

    render() {
        
        return (
            <RemindersAboutMentoring script={"8"} extrapractice={true} />
        )
    }
}

export default Page10;


           
          