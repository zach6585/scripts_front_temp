import { Component } from 'react';

import RemindersAboutMentoring from '../../general pages/remindersaboutmentoring.js';


class Page9 extends Component {
    

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()

    }

    render() {
        
        return (
            <div>
                <RemindersAboutMentoring script={"6"} />
                <div className='sheet left'>
                    <p>
                        This week, when you do your mood logs, try using the body scan worksheet first. The body scan worksheet might help you do the mood log. 
                    </p>  
                </div>
            </div>
        )
    }
}

export default Page9;