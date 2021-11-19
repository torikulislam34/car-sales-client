import React from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Sideber from '../Sideber/Sideber';

const AddReview = () => {
        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data =>{
            // console.log(data);
    
            axios.post('http://localhost:5000/productsReview', data)
            .then(res => {
                // console.log(res);
                if(res.data.insertedId){
                    alert('add to successfully!');
                    reset();
                }
            })
        }
    return (
        <div >
            <div className='row'>
              <div className=' col-lg-4 col-md-6 col-12 left-site'>
                <Sideber></Sideber>   
                </div>

              <div className='col-lg-8 col-md-6 col-12'>
              <div className='add-tour'>
                <h2 className='text-primary'> Add Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='add-input' {...register("title", { required: true, maxLength: 20 })} placeholder="name"/>
                    <textarea className='add-input' {...register("dis" )} placeholder="Feedback"/>
                    <input className='add-input' {...register("img" )} placeholder="img-url"/>
                    <input className='add-input' type="number" {...register("reting" )} placeholder="Rating"/>
                    <input className='button-reguler' type="submit" />
                </form>
              </div>
              </div>
            </div>
        </div>
        
    );
};

export default AddReview;