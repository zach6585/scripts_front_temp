import { Component } from 'react';

import SchedulingForNextWeek from '../../general pages/schedulingfornextweek';

class Page11 extends Component {

  
  handleScroll=()=>{
    window.scroll({top:0,behavior:'smooth'})

  }

  componentDidMount() {
      this.handleScroll()
  }
  
    render() {
        return (
          <SchedulingForNextWeek script={"5"} />  
        )
    }
}
export default Page11;
