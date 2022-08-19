import React from 'react';
import image1 from '../../../images/service/img-1.jpg'
import image2 from '../../../images/service/img-3.jpg'
import image3 from '../../../images/service/img2.jpg'
import image4 from '../../../images/service/img-4.jpg'
import image5 from '../../../images/service/img-5.jpg'
import image6 from '../../../images/service/img-6.jpg'
import Service from '../Service/Service';
const services = [
    {id:1, name: 'Web Design', price:170, img:image1},
    {id:2, name: 'JavaScript', price:100, img:image2},
    {id:3, name: 'HTML & CSS', price:50, img:image3},
    {id:4, name: 'React JS', price:140, img:image4},
    {id:5, name: 'C#', price:70, img:image5},
    {id:6, name: 'Python', price:80, img:image6},
]
const Services = () => {
    return (
        <div id='services' className='container'>
            <h1 className='text-center mt-5 text-4xl font-bold'>Our Services</h1>
            <div className='row'>
                {
                    services.map(service => <Service
                     key={service.id}
                     service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;