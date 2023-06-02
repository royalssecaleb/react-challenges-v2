//import built-in modules
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
//import tw-element tab module
import { Tab, initTE} from "tw-elements";
//import css
import './home.style.css';
//import components
import Portfolio from '../Portfolio/Portfolio';
import Rating from '../../components/ui/Rating';
import Tabs from '../../components/ui/Tabs';
import RoomCard from '../../components/ui/Card';
import ProgressBar from '../../components/ui/ProgressBar';
import Reviews from '../../components/ui/Review';
//import carousel and reverse function form utils
import {handleImage, changeImage} from '../../utils/carousel';
//import images

const Home = () => {

    //images for portfolio
    const [arr_image, setArrayImage] = useState([
        '/img/portfolio1.jpg',
        '/img/portfolio2.jpg',
        '/img/portfolio3.jpg',
        '/img/portfolio4.jpg',
        '/img/portfolio5.jpg',
    ])

    //flag for re-render
    const [flag, setFlag] = useState(false);
    //initialize the tab
    useEffect(()=>{
        initTE({ Tab });
    });
    //carousel function
    const imageSlide = () => {
        setArrayImage(handleImage(arr_image));
        setFlag(!flag);
    }
    //reverse function
    const imageReverse = (index) => {
        setArrayImage(changeImage(index, arr_image));
        setFlag(!flag);
    }
    return (
        <div>
            {/* portfolio section */}
            <div className='section_portfolio'>
                <Portfolio images = {arr_image} handleImage={imageSlide} changeImage={imageReverse}/>
            </div>
            {/* portfolio section end */}

            {/* review section */}
            <div className='section_review'>
                <div>
                    <p className='review_title'>Hotel Norrebro</p>
                    <p>3-star hotel located in the heart of Coperhagen</p>
                </div>
                <div><Rating level={"Excellent"} point={9.6} reviewCount={"1,920 reviews"}/></div>
            </div>
            {/* review section end */}

            {/* tab section */}
            <div className='section_tab'>
                <ul
                className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
                role="tablist"
                data-te-nav-ref>
                <li role="presentation">
                    <a
                    href="#tabs-overview"
                    className="tab_overview"
                    data-te-toggle="pill"
                    data-te-target="#tabs-overview"
                    data-te-nav-active
                    role="tab"
                    aria-controls="tabs-overview"
                    aria-selected="true"
                    >Overview</a>
                </li>
                <li role="presentation">
                    <a
                    href="#tabs-rooms"
                    className="tab_room"
                    data-te-toggle="pill"
                    data-te-target="#tabs-rooms"
                    role="tab"
                    aria-controls="tabs-rooms"
                    aria-selected="false"
                    >Rooms</a>
                </li>
                <li role="presentation">
                    <a
                    href="#tabs-amenities"
                    className="tab_amenities"
                    data-te-toggle="pill"
                    data-te-target="#tabs-amenities"
                    role="tab"
                    aria-controls="tabs-amenities"
                    aria-selected="false"
                    >Amenities</a>
                </li>
                <li role="presentation">
                    <a
                    href="#tabs-policies"
                    className="tab_policies"
                    data-te-toggle="pill"
                    data-te-target="#tabs-policies"
                    role="tab"
                    aria-controls="tabs-policies"
                    aria-selected="false"
                    >Policies</a>
                </li>
                </ul>
                {/* tab Content */}
                <div className="mb-6">
                    {/* tab content prototype */}
                    <div className={`hidden opacity-100 tab-content`}
                        id={`tabs-overview`}
                        role="tabpanel" 
                        aria-label={`tabs-overview-tab`} 
                        data-te-tab-active
                        >
                        <p className="text-2xl font-semibold">Property overview</p>
                        <div className='grid grid-cols-4 max-[950px]:grid-cols-2 max-[950px]:w-full gap-10 mt-5 w-2/3'>
                                <div className='mt-4'>
                                    <div className='flex flx-row justify-start gap-3'>
                                        <p><FontAwesomeIcon icon={faWifi} /></p>
                                        <p>Free Wifi</p>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <div className='flex flx-row justify-start gap-3'>
                                        <p><FontAwesomeIcon icon={faWind} /></p>
                                        <p>Air conditioning</p>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <div className='flex flx-row justify-start gap-3'>
                                        <p><FontAwesomeIcon icon={faShower} /></p>
                                        <p>Private bathroom</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='flex flx-row justify-start gap-3'>
                                        <p><FontAwesomeIcon icon={faIdCard} /></p>
                                        <p>Key card access</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='flex flx-row justify-start gap-3'>
                                        <p><FontAwesomeIcon icon={faSquareParking} /></p>
                                        <p>Free parking</p>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <div className='flex flx-row justify-start gap-3'>
                                        <p><FontAwesomeIcon icon={faClock} /></p>
                                        <p>24-hour from desk</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* tab content prototype end */}
                    <Tabs category={'rooms'} opacity={0} content={"Rooms overview"} />
                    <Tabs category={'amenities'} opacity={0} content={"Amenities overview"} />
                    <Tabs category={'policies'} opacity={0} content={"Policies overview"} />
                </div>
                {/* tab Content */}
            </div>
            {/* tab section end */}

            {/* room card section */}
            <div className='section_room'>
                <p className='room_section_header'>Rooms</p>
                <div className='room_cards'>
                    <div><RoomCard  title={"Double Standard Room"} sqm={'18'} people={2} service={"1 queen bed or 2 separate beds"} price={180}/></div>
                    <div><RoomCard  title={"Comfort Single Room"} sqm={'21'} people={2} service={"1 king size bed"} price={220}/> </div>
                    <div><RoomCard  title={"Double Standard Room"} sqm={'25'} people={2} service={"1 king size bed"} price={250}/></div>
                    <div><RoomCard  title={"Double Fancy Room"} sqm={'35'} people={2} service={"1 king size bed and couch"} price={280}/></div>
                </div>
            </div>
            {/* room card section end */}

            {/* feedback section */}
            <div className='section_feedback'>
                <p className='feedback_section_header'>Reviews</p>
                <div className='feedback_section_content'>
                    <div className='feedback_rate'>
                        <p className='text-3xl text-blue-500'>9.6 / 10</p>
                        <ProgressBar object={"Clearness"} point={10}/>
                        <ProgressBar object={"Amenities"} point={7}/>
                        <ProgressBar object={"Location"} point={9}/>
                        <ProgressBar object={"Policies"} point={10}/>
                        <ProgressBar object={"Services"} point={8}/>
                        <ProgressBar object={"Transport"} point={3}/>
                    </div>
                    <div className='feedback_description'>
                        <div>
                            <Reviews 
                            title={"Excellent value for the price"}
                            name={"Mark M"}
                            description={"We enjoyed our stay at this hotel.We will certainly come back"}
                            pros = {['Create location' , 'Service' , 'Bottle of Champaign in the room']}
                            rate={10}
                            level={"Excellent"}
                            date ={"20 September 2022"}
                        />
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* feedback section end */}
        </div>
    )
}

export default Home;