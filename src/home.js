import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import Card from 'react-bootstrap/Card';
import './css/style.css';
import abt from './img/abt.jpg';
import ceo from './img/ceo.jpg';
import love1 from './img/love1.jpg';
import love2 from './img/love2.jpg';
import love3 from './img/love3.jpg';
import love4 from './img/love4.jpg';

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


            <section className='vision mb-5 pb-5'>

                <div className="container">

                    <div className='row mt-5 pt-5'>

                        <div className='col-5 me-5'>
                            <img src={ceo} alt="" className='img-fluid m-auto h-100 w-100'/>
                        </div>


                        <div className='col-6'>

                        <h1 className='mb-4 fw-bold display-5'>Meet <br/>Mrs. Yinlayefa Adeleke
                            </h1>

                            <p className='lead mb-4'>My name is Mrs. Yinlayefa Adeleke. I am the lead counsellor at 
                                RecoveryWaters Counselling Centre and an expert in marriage and family life. I am 
                                passionate about helping couples and families create healthy, nurturing relationships 
                                and take a holistic approach to counselling.
                            </p>
                            <p className='lead mb-5'>
                                With my years of experience, I believe I 
                                can help guide you through the most difficult times and make positive changes in your life. 
                                I look forward to getting to know you and working together to reach your goals. 
                            </p>

                            <button className='btn btn-lg btn-primary btn-rounded py-3 px-5'>Book a session</button>
                        </div>

                    </div>

                </div>

            </section>


                
            <section className='product bg-light pb-5 mb-5'>

                <div className="container mt-5 ">

                    <div className='text-center mt-5 pt-5 justify-content-center m-auto'>
                        <h1 className='display-4 fw-bold col-7 m-auto mb-3'>Comprehensive Personalized Training</h1>
                        <small className='lead'>Tailored to meet your needs and solve them adequately</small>
                    </div>

                    <div className='row mt-5 pt-5'>

                        <div className='col-6'>
                            <Card className='h-100 px-3 py-3'>
                                <Card.Img src={ love1 } className='px-4 mt-4'/>
                                <Card.Body className='mt-3'>
                                    <Card.Title className='mb-3 fw-bold'>The New Way To Love</Card.Title>
                                    <Card.Text className='mb-5 lead'>
                                    This Programme is for Couples in a challenged or crisis-ridden marriage who wants to overhaul and give the marriage a fresh start. 
                                    Great news! This is absolutely possible and doable too. As long as both spouses are willing and committed. And where one party isn?t 
                                    making effort, the willing spouse can turn things around for them.
                                    </Card.Text>
                                    
                                </Card.Body>
                                <Card.Footer className='text-center m-auto mb-4'>
                                    <button className='btn btn-lg btn-primary btn-rounded py-3 px-5'>Book a session</button>
                                </Card.Footer>
                            </Card>
                        </div>

                        <div className='col-6'>
                            <Card className='h-100 px-3 py-3'>
                                <Card.Img src={ love2 } className='px-4 mt-4'/>
                                <Card.Body className='mt-3'>
                                    <Card.Title className='mb-3 fw-bold'>The Power of You</Card.Title>
                                    <Card.Text className='mb-5 lead'>
                                    This programme is for Single and Ready (Ladies or young men) who want to start 
                                    the journey of marriage but are not sure of themselves and are somewhat sceptical.
                                    </Card.Text>
                                    
                                </Card.Body>
                                <Card.Footer className='text-center m-auto mb-4'>
                                    <button className='btn btn-lg btn-primary btn-rounded py-3 px-5'>Book a session</button>
                                </Card.Footer>
                            </Card>
                        </div>



                    </div>


                    <div className='row mt-5 pt-5'>

                        <div className='col-6'>
                            <Card className='h-100 px-3 py-3'>
                                <Card.Img src={ love3 } className='px-4 mt-4'/>
                                <Card.Body className='mt-3'>
                                    <Card.Title className='mb-3 fw-bold'>So Much More Than Rings</Card.Title>
                                    <Card.Text className='mb-5 lead'>
                                    THE MARRIAGE YOU DESIRE IS WAITING FOR YOU. Brief of what to expect. At The RecoveryWaters Counselling Centre, 
                                    we know that preparing for a wedding does not equal being prepared for marriage. The wedding is just a few hours 
                                    event and the marriage, a lifetime, hence we have carefully created this program to adequately prepare you for a 
                                    satisfying and fulfilling marriage. Our OYELA & SYMBIS Pre-marriage Preparation Assessments will give you a big 
                                    and powerful start to having the marriage of your desire.
                                    </Card.Text>
                                    
                                </Card.Body>
                                <Card.Footer className='text-center m-auto mb-4'>
                                    <button className='btn btn-lg btn-primary btn-rounded py-3 px-5'>Book a session</button>
                                </Card.Footer>
                            </Card>
                        </div>

                        <div className='col-6'>
                            <Card className='h-100 px-3 py-3'>
                                <Card.Img src={ love4 } className='px-4 mt-4'/>
                                <Card.Body className='mt-3'>
                                    <Card.Title className='mb-3 fw-bold'>Clarity Session</Card.Title>
                                    <Card.Text className='mb-5 lead'>
                                    Having a clear direction starts with a clarity session. This Clarity Session is an opportunity for us to meet 
                                    (virtually) face-to-face, 1:1, and get acquainted with one another. This 50 minutes session will help you to 
                                    identify clearly what the real issues are and what needs to be done, the possible steps you can take to address 
                                    them and be free to live your happy life. I show you how with a personalised, bespoke support plan tailored to 
                                    your specific goals and aspirations / needs. 
                                    </Card.Text>
                                    
                                </Card.Body>
                                <Card.Footer className='text-center m-auto mb-4'>
                                    <button className='btn btn-lg btn-primary btn-rounded py-3 px-5'>Book a session</button>
                                </Card.Footer>
                            </Card>
                        </div>

                    </div>

                </div>

            </section>

        </div>
     );
}
 
export default Homepage;