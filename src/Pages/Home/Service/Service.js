import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name, price, img} = service;
    const navigate = useNavigate();
    const navigateServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card text-center" style={{ width: '18rem' }}>
          <div className='overflow'><img src={img} className="card-img-top" alt="..." /></div>
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5>Price: ${price}</h5>
            <p className="card-text">
            “Learning never exhausts the mind.”
            </p>
            <button onClick={() => navigateServiceDetail(id)} className='btn btn-warning'>Book Now !</button>
          </div>
        </div>
        </div>
      );
    };

export default Service;