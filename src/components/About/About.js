import React from 'react';
import aboutImg  from '../../images/About/aboutImg.jpg';
import aboutImg1  from '../../images/About/aboutimg01.jpg';
import aboutImg2  from '../../images/About/aboutimg02.jpg';


import './About.css'

const About = () => {

    return (
        <div>
            
            <div className = 'row about-main'>
                <div className = 'col-md-6 col-12'>
                    <h2 className ='fst-italic' style ={{color:'hsl(14, 80%, 45%)'}}> ABOUT-US</h2>

                    <h4 className ='mt-4'>World Best Car Sales Company</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    <div className="gallary-btn">
                        <button className='button-reguler'>FIND NOW</button>
                    </div>
                </div>
                <div className = 'col-md-6 col-12'>
                    <img className ='about-img' src={aboutImg} alt="" />
                </div>
            </div>
            <div className='about-mid'>
            <h2>Control Your Car-Buying Experience</h2>
            <p>At TrueCar, you're in charge of the process from start to finish. Here's how.</p>
            </div>
            <div className = 'row about-main'>
            <div className = 'col-md-6 col-12'>
                    <img className ='about-img' src={aboutImg1} alt="" />
                </div>
                <div className = 'col-md-6 col-12'>
                    <h2 className ='fst-italic' style ={{color:'hsl(14, 80%, 45%)'}}> Build Your Deal With Confidence</h2>

                    <h4 className ='mt-4'>World Best Car Sales Company</h4>
                    <p>Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments.</p>
                    <div className="gallary-btn">
                        <button className='button-reguler'>Shop New Cars</button>
                    </div>
                </div>
                
            </div>
            <div className = 'row about-main'>
                <div className = 'col-md-6 col-12'>

                    <h4 className ='mt-4'>Get a Trade-in Offer You Can Use Today</h4>
                    <p>Answer a few questions to see your car’s market value and get a cash offer in minutes. Cash out, or trade in for a new or used car.</p>
                    <div className="gallary-btn">
                        <button className='button-reguler'>Get a Value on Your car</button>
                    </div>
                </div>
                <div className = 'col-md-6 col-12'>
                    <img className ='about-img' src={aboutImg2} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default About;