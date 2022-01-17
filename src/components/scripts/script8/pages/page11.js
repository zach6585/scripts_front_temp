import { Component } from 'react';

import SharingAboutMentoring from '../../general pages/sharingaboutmentoring'; 


class Page11 extends Component {

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
        

    }
    
    render() {
        return (
            <SharingAboutMentoring script={"8"} />
        )
    }
}
export default Page11;
