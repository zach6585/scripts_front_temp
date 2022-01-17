import { Component } from 'react';

import SchedulingForNextWeek from '../../general pages/schedulingfornextweek';

class Page14 extends Component {

  
  handleScroll=()=>{
    window.scroll({top:0,behavior:'smooth'})

  }

  componentDidMount() {
      this.handleScroll()
  }
  
    render() {
        return (
          <SchedulingForNextWeek script={"11"} />  
        )
    }
}
export default Page14;
