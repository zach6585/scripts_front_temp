import shareScreen from "../../pictures/sharescreen.png";
import stopShare from "../../pictures/stopshare.png";

const Page6 = (props) => {

    return (
        <div className="sheet">
            <h1 className="bold center">Additional strategies</h1>
            <div className='left'>
                <div className="container_for_small_margin">
                    <p>
                        We worked on three coping strategies during mentoring. There are probably a lot more that you could do! <br/>
                        What are some other ideas of coping strategies you could use? Think about activities that make you feel good. You can also think about activities that help your body feel relaxed.<br/><br/>
                        I added the card sort pictures to your coping strategy toolkit. This way you can continue exploring more coping strategies and thinking about your symptoms. I hope they help you!
                    </p>
                </div>
                <div id='image_and_instruction_box_div_number_1_page_6_script_16'>
                    <div id="instruction_box_number_1_page_6_script_16" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box">
                            Share your screen or ask them to share their screen so they can see the card sort added 
                        </p>
                    </div>
                    <img src={shareScreen} alt="Share your screen" />
                </div>

                <div id='image_and_instruction_box_div_number_2_page_6_script_16'>
                    <div id="instruction_box_number_2_page_6_script_16" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box">
                            When you are finished, stop sharing your screen 
                        </p>
                    </div>
                    <img src={stopShare} alt="Stop sharing your screen" />
                </div>
            </div>
        </div>
    )
}



export default Page6;
