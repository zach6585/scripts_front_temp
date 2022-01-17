import { Component } from 'react';

import SchedulingForNextWeek from '../../general pages/schedulingfornextweek';

class Page13 extends Component {

  
  handleScroll=()=>{
    window.scroll({top:0,behavior:'smooth'})

  }

  componentDidMount() {
      this.handleScroll()
  }
  
    render() {
        return (
          <SchedulingForNextWeek script={"2"} />  
        )
    }
}
export default Page13;
