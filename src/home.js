import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import Card from 'react-bootstrap/Card';
import './css/style.css';
import abt from './img/abt.jpg';

const Homepage = () => {

    const el = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['empower', 'support', 'change'],
            typeSpeed: 100,
            backSpeed: 50,
            showCursor: false,
            loop: true
        };
        const typed = new Typed(el.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    return ( 

        <div>

            <section className="home vh-100 bg-light">
                <div className="container d-flex align-items-center vh-100">
                    <div className="justify-content-center text-center m-auto">
                        <h1 className="display-4 col-lg-10 m-auto fw-bold">Comprehensive counselling designed to <span ref={el}></span> individuals </h1>
                        <p className="py-lg-4 px-lg-5 col-lg-9 mt-lg-0 mt-3 mb-2 m-auto lead">
                            RecoveryWaters Counselling Centre is dedicated to providing a safe and supportive environment
                            to help clients process, identify, and understand their suffering, heal from difficult experiences, 
                            reclaim their lives, and find peace of mind.
                        </p>
                        <button className="me-4 mt-3 btn btn-rounded btn-light py-3 w-50 fw-bold">Talk to a counsellor</button>
                    </div>
                </div>
            </section>

            <section className='about'>

                <div className="container">

                    <div className='text-center mt-5 pt-5 justify-content-center m-auto'>
                        <h1 className='display-4 fw-bold'>Who we are</h1>
                        <small className='lead'>Get to know us better</small>
                    </div>

                    <div className='row mt-5 pt-5'>
                        <div className='col-6'>
                            <p className='lead col-11 mb-4'>Recoverywaters Counselling Centre is dedicated to providing comprehensive and 
                                personalized counselling services that empower individuals to overcome life's 
                                challenges and create lasting change in their lives. 
                            </p>
                            <p className='lead col-11 mb-4'>
                                We strive to create a safe 
                                and supportive environment to help our clients process, identify, and understand 
                                their suffering, heal from difficult experiences, reclaim their lives, and find 
                                peace of mind. We will partner with our clients with compassion and understanding 
                                to plant seeds of growth and realize their inner strength and potential.
                            </p>
                            <p className='lead col-11'>
                                We will partner with our clients with compassion and understanding 
                                to plant seeds of growth and realize their inner strength and potential.
                            </p>
                        </div>

                        <div className='col-6'>
                            <img src={abt} alt="" className='img-fluid m-auto h-100 w-100'/>
                        </div>

                    </div>
                </div>

            </section>


            <section className='banner'>
                <div className="container">
                    <div className="row pt-5 mt-5 mb-5 py-4">

                        <div className="col-lg-3 col-md-3 col-6">
                            <Card className='h-100 px-3 py-3'>
                                    <div className='px-3 py-4'>
                                        <i className='fa fa-phone fa-shake'></i>
                                    </div>
                                <Card.Body>
                                    <Card.Title className='mb-3'>Outstanding Customer Service</Card.Title>
                                </Card.Body>

                            </Card>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <Card className='h-100 px-3 py-3'>
                                    <div className='px-3 py-4'>
                                        <i className='fa fa-lock fa-bounce'></i>
                                    </div>
                                <Card.Body>
                                    <Card.Title className='mb-3'>Full Secrecy & Confidentiality</Card.Title>
                                </Card.Body>

                            </Card>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6 mt-lg-0 mt-4">
                            <Card className='h-100 px-3 py-3'>
                                    <div className='px-3 py-4'>
                                        <i className='fa fa-clock fa-spin'></i>
                                    </div>
                                <Card.Body>
                                    <Card.Title className='mb-3'>Flexibility in consulting hours</Card.Title>
                                </Card.Body>

                            </Card>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6 mt-lg-0 mt-4">
                            <Card className='h-100 px-3 py-3'>
                                    <div className='px-3 py-4'>
                                        <i className='fa fa-credit-card fa-flip'></i>
                                    </div>
                                <Card.Body>
                                    <Card.Title className='mb-3'>Differential pricing for sessions</Card.Title>
                                </Card.Body>

                            </Card>
                        </div>
                    </div>
                </div>

            </section>
        </div>
     );
}
 
export default Homepage;