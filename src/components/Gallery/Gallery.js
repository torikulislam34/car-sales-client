import React from 'react';
import './Gallery.css';
import img1 from '../../images/gallery/gallery01.jpg';
import img2 from '../../images/gallery/gallery02.jpg';
import img3 from '../../images/gallery/gallery03.jpg';
import img4 from '../../images/gallery/gallery04.jpg';
import img5 from '../../images/gallery/gallery05.jpg';
import img6 from '../../images/gallery/gallery06.jpg';

const Gallery = () => {
    return (
        <div>
        <h3 className= 'text-center mt-5 fw-bold'><span className ='text-primary'>OUR </span>  GALLERY</h3>

            {/* Gallary Photo Album*/}
            
                <div className='row'>
                    <div className  = 'col-md-4 pt-1'>
                        <img className ='special-img' src={img1} alt="" />
                    </div>
                    <div className  = 'col-md-4 pt-1'>
                        <img className ='special-img' src={img2} alt="" />
                    </div>
                    <div className  = 'col-md-4 pt-1 '>
                        <img className ='special-img' src={img3} alt="" />
                    </div>
                </div>
            <div className= 'row'>   
                <div className  = 'col-md-4 pt-1 mb-2 '>
                    <img className ='special-img' src={img4} alt="" />
                </div>
                <div className  = 'col-md-4 pt-1 mb-2 '>
                    <img className ='special-img' src={img5} alt="" />
                </div>
                <div className  = 'col-md-4 pt-1 mb-2'>
                    <img className ='special-img' src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;