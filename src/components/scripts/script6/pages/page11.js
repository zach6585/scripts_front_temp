import { Component } from 'react';

import SharingAboutMentoring from '../../general pages/sharingaboutmentoring.js';

class Page11 extends Component {

    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
    }
  
    render() {
        return (
            <SharingAboutMentoring script={"6"} />
        )
    }
}
export default Page11;
