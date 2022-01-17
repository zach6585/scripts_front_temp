import { Component } from 'react';

import RemindersAboutMentoring from '../../general pages/remindersaboutmentoring.js';


class Page12 extends Component {
    

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()

    }

    render() {
        
        return (
            <RemindersAboutMentoring script={"13"} extrapractice={true} />
        )
    }
}

export default Page12;


           
          