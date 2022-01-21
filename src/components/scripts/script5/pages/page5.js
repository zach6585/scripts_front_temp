import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';

import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';


class Page5 extends Component {
    
    state = {
        remembers: null,
        no_remembers: null,
    }
    

    handleClick = (event, choice) => {
        /* Determines the outcome of the button press. If it's 2 then we do a scavenger hunt and render that component */
        if (choice === 1){
            this.setState({remembers: <p>That's great!<br/>Thanks for sharing.</p>, no_remembers: null })
        }
        else if (choice === 2){
            this.setState({remembers: null, no_remembers: <p>That's ok! Coping strategies are what people do to deal with stress.  We take care of our mental health by using coping tools that help us notice our emotions, find ways to relax, and ways to make peace with upsetting feelings and thoughts.  Different people have different types of coping strategies. </p>})
        }
    }

    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.props.mentee_id, script: this.props.script})
        :
        this.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.props.mentee_id, script: this.props.script})

    }
    
    getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = this.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }

    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Reviewing coping strategies</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        Last week we talked about coping strategies.<br/>
                        What do you remember about our conversation? 
                    </p>
                    <br />
                    <img src={pause} alt="Pause" className="pause" />
                    <img src={allEars} alt="Listen" className="allEars" />
                    <p>It's ok if you don't remember a lot! I just want to know so I don't repeat too much information. </p>
                    <br/>
                    <ul>
                        <li><button onClick={event => this.handleClick(event, 1)}>press</button>My mentee remembers a lot about coping strategies</li>
                        {this.state.remembers}
                        <li><button onClick={event => this.handleClick(event, 2)}>press</button>My mentee doesn't remember a lot about coping strategies</li>
                        {this.state.no_remembers}
                    </ul>
                    <p>
                        Today we're going to think about a coping strategy that will work well for you. 
                        We have been talking about how sometimes you feel <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_5_script_5" defaultValue={this.getValue("text_box_number_1_page_5_script_5")} /> 
                        and want to feel more/less <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_5_script_5" defaultValue={this.getValue("text_box_number_2_page_5_script_5")} />.
                        <br/><br/>
                        Let's look at the coping strategy activity from last week to figure out what may work as a coping strategy for you. 
                    </p>
                        <div id="instruction_box_number_1_page_5_script_5" className="custom_svg demo_box container_for_large_margin">
                            <p className="top_line_in_instruction_box">
                                Send your mentee the coping strategy sort link.
                                <br/><br/>
                                Link:
                                <br/><br/>
                                Ask them to screen share
                            </p>
                        </div>
                        <p>
                            <br/><br/>
                            A good coping strategy is something that makes you feel good, you know how to do, you can do anywhere, and takes 15 minutes or less to do.
                            <br/><br/><br/>
                            Let's think about each of the activities that make you feel good to figure out if they would be good coping strategies. Today, we'll pick one to focus on. But as we continue mentoring you will pick more activities to use as coping strategies.
                            <br/><br/><br/>
                            First, let's look at all the strategies that you like. 
                            <br/><br/>
                            Let's put a check mark on the ones that help you feel good.
                        </p>
                        <div id="instruction_box_number_2_page_5_script_5" className="custom_svg demo_box container_for_large_margin">
                            <p className="top_line_in_instruction_box">
                                Help your mentee think about which activities they want to check.
                                <br/><br/>
                                These should be activities that help them feel good. 
                                <br/><br/>
                                You can ask them questions and give them encouragement.
                            </p>
                        </div>
                        <p>
                            <br/><br/><br/>
                            Great, now let's think about which of these you can do in 15 minutes or less. 
                            <br/><br/>
                            Let's now circle the activities that you think you can do in 15 minutes or less.
                        </p>
                        <div id="instruction_box_number_3_page_5_script_5" className="custom_svg demo_box container_for_large_margin">
                            <p className="top_line_in_instruction_box">Help your mentee think about how long each activity takes and circle them.</p>
                        </div>
                        <p>
                            <br/><br/><br/>    
                            We will now pick one of the activities that you circled to be your first coping strategy. 
                            <br/><br/>
                            Which activity do you want to work on for the next few weeks? 
                            <br/><br/><br/>
                            Write your mentee's first coping strategy: <textarea onChange={event => this.handleChange(event)} id="text_box_number_3_page_5_script_5" defaultValue={this.getValue("text_box_number_3_page_5_script_5")} />
                        </p>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page5);
