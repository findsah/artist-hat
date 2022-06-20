import React from 'react'
import './myBusiness.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import thumbs from '../../Assets/elitethumbs.svg'
import { IoIosStar } from 'react-icons/io';

const MyBusiness = () => {
    const percentage = 66;
    return (
        <div className="my-business container">
            <div className="row myBusiness_row">
                <div className="col-12 col-lg-7">

                    <div className="main-headings">My Earnings</div>
                    <div className="earnings">
                        <div className="earning col-4">
                            <div className="price">$60</div>
                            <div className="sub-heading">Total Earnings</div>
                        </div>
                        <div className="earning col-4">
                            <div className="price">$60</div>
                            <div className="sub-heading">Total Earnings</div>
                        </div>
                        <div className="earning col-4">
                            <div className="price"><strong>$6</strong>0</div>
                            <div className="sub-heading">Total Earnings</div>
                        </div>
                    </div>
                    <div className="matrices">
                        <div className="main-headings">Matrics</div>
                        <div className="earnings row">
                            <div className="circularBar">
                                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={10} />
                            </div>
                            <div className="circularBar">
                                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={10}/>
                            </div>
                            <div className="circularBar">
                                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={10}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <div className="rating-reviews">
                        <div className="main-headings heading-black">Rating & Reviews</div>
                        <div className="row rating-reviews-row">
                            <div className="col-5">
                                <div className="circularBar">
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={10} />
                                    <IoIosStar className='star' />
                                    <div className="rating-inside">
                                        Star Rating
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 text-center">
                                <div className="main-headings">48s</div>
                                <div className="sub-heading">Total Earnings</div>
                            </div>
                        </div>
                    </div>

                    <div className="elite-status">
                        <div className="main-headings heading-black">May Elite Status</div>
                        <div className="row how-to-qualify">
                            <div className="col-8 qualify_heading"><div className="sub-heading">How to Qualify for Elite</div></div>
                        </div>
                        <div className="row elite-status-row">
                        
                            <div className="col-4">
                            <div className="circularBar">
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={10} />
                                    <img src={thumbs} alt="thumbs" className='star'/>
                                    <div className="rating-inside">
                                    Elite Status
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 text-center p-0">
                            
                                <div className="qualify-checks">
                                    <div className="hr"></div>
                                    
                                    <div className="checks">
                                        <label class="container red">Maintain Elite-level metrics for a month.
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="container">Get 4.7 stars or above from Clients.
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="container">Submit 10+ invoices in a month.
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="container">Complete 10+ project or 20 hours working.
                                            <input type="checkbox"/>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyBusiness