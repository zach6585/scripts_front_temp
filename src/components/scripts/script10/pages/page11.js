import { Component } from 'react';

import { connect } from 'react-redux';

import check from "../../pictures/checkbutsmaller.png";
import redX from "../../pictures/redxbutsmaller.png";


class Page11 extends Component{

    state = {
        handleclick: {
        words_that_appear_when_you_click_green_check: '',
        words_that_appear_when_you_click_red_x: ''
        }
    }

    handleClick = (e, letter) => {
        if (letter === 'c'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check: 
            <p>
                Let's look at some solutions together. 
                <a href={this.getLink("video_link_page_11_script_10")} id="video_link_page_11_script_10" target="_blank" rel="nopener noreferrer">Link</a>
            </p>, 
            words_that_appear_when_you_click_red_x: ''}})
        }
        else if (letter === 'x'){
            this.setState({handleclick: {words_that_appear_when_you_click_green_check : '', words_that_appear_when_you_click_red_x: 
            <p>
                I'm so glad to hear that. 
                We will move onto the next step.
            </p>
                }})
        }
    }
    
    getLink = (current_id_tag) => {
        //Just like getValue but instead of textvalue it returns the link value
        let current_link_for_value = this.props.links.find(link_item => {return link_item.link_id === current_id_tag})
        return current_link_for_value ? current_link_for_value.link_address : ""
    }

    render(){
        return(
            <div className="sheet">
                <h1 className='bold center'>Step 4: Reflecting on how it went</h1>
                <div className='container_for_medium_margin left'>
                    <p>Was anything about doing that strategy hard, just now?</p>
                    <img className="check" src={check} alt="Check" onClick={(event) => this.handleClick(event, 'c')} /><p className="what_does_your_mentor_say">Your mentee says yes</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_green_check}</div>
                    <br/><br/>
                    <img className="redX" src={redX} alt="Red X" onClick={(event) => this.handleClick(event, 'x')} /><p className="what_does_your_mentor_say">Your mentee says no</p>
                    <br/>
                    <div className="choicePicked">{this.state.handleclick.words_that_appear_when_you_click_red_x}</div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return{
        links: state.links.links
    }
}

export default connect(mapStateToProps)(Page11);




