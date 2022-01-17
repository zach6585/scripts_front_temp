import { Component } from 'react';

import SchedulingForNextWeek from '../../general pages/schedulingfornextweek.js';

class Page12 extends Component {

    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
        
    }

    render() {
        return (
            <SchedulingForNextWeek script={"6"} />
        )
    }
}
export default Page12;
