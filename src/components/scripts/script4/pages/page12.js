import { Component } from 'react';

import SharingAboutMentoring from '../../general pages/sharingaboutmentoring.js';

class Page12 extends Component {

    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
    }
  
    render() {
        return (
            <SharingAboutMentoring script={"4"} />
        )
    }
}
export default Page12;
