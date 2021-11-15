
import React from 'react';
import './Speacials.css';
import img1 from '../../images/gallery/gallery01.jpg';
import img2 from '../../images/gallery/gallery02.jpg';
import img3 from '../../images/gallery/gallery03.jpg';
import img4 from '../../images/gallery/gallery04.jpg';
import img5 from '../../images/gallery/gallery05.jpg';
import img6 from '../../images/gallery/gallery06.jpg';

const Specials = () => {
    return (
        <div>
            <h1 className= 'text-center mt-5 fw-bold'>Choose The best Car</h1>
            <h4 className= 'text-center mt-5 fw-bold'><span className ='text-primary'>OUR </span>  SPECIALS</h4>

                {/* Gallary Photo Album*/}
                
                    <div className='row'>
                        <div className  = 'col-md-4 pt-1'>
                            <img className ='special-img' src={img1} alt="" />
                            <h3>Discription</h3>
                            <h4>The A6 Allroad Premium Plus starts at $67,945 with standard features that include 20-inch wheels, an adaptive air suspension, aluminum roof rails, LED headlights, a sunroof, power tailgate.</h4>
                        </div>
                        <div className  = 'col-md-4 pt-1'>
                            <img className ='special-img' src={img2} alt="" />
                            <h3>Discription</h3>
                            <h4>The RS 6 Avant starts at $117,545 with standard features that include 21-inch wheels, high-performance tires, an adaptive air suspension, all-wheel steering with variable ratio, dual exhaust, LED headlights.</h4>
                        </div>
                        <div className  = 'col-md-4 pt-1 '>
                            <img className ='special-img' src={img3} alt="" />
                            <h3>Discription</h3>
                            <h4>Unfathomably fast on an open road but easy-going around town, the Audi RS 6 Avant is a high-powered luxury wagon with few equals. It's expensive, yes, but not many vehicles could make a run to Costco so exhilarating.</h4>
                        </div>
                    </div>
                <div className= 'row'>   
                    <div className  = 'col-md-4 pt-1 '>
                        <img className ='special-img' src={img4} alt="" />
                        <h3>Discription</h3>
                            <h4>Use the chart below to see how much shoppers are paying for each 2022 Audi RS 6 Avant trim on average. This will help you determine how much to pay on a lease, loan, or cash basis. Get upfront price offers from .</h4>
                    </div>
                    <div className  = 'col-md-4 pt-1 '>
                        <img className ='special-img' src={img5} alt="" />
                        <h3>Discription</h3>
                            <h4>Infotainment starts with a 10.1-inch touchscreen, Android Auto and wireless Apple CarPlay, satellite radio, and a subscription-based Wi-Fi hotspot. Navigation, a wireless charging pad with signal booster.</h4>
                    </div>
                    <div className  = 'col-md-4 pt-1'>
                        <img className ='special-img' src={img6} alt="" />
                        <h3>Discription</h3>
                            <h4>The RS 6 Avant starts at $117,545 with standard features that include 21-inch wheels, high-performance tires, an adaptive air suspension, all-wheel steering with variable ratio, dual exhaust</h4>
                    </div>
                </div>
            </div>
       
    );
};

export default Specials;




