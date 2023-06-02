//import font-awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
//import css
import './ui.style.css';
const Tabs= ({category, opacity, content}) => {
    return(
            <div className={`hidden opacity-${opacity} tab-content`}
                id={`tabs-${category}`}
                role="tabpanel"
                aria-label={`tabs-${category}-tab`} 
                data-te-tab-false
                >
                <p className="text-2xl font-semibold">{content}</p>
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
    )
}

export default Tabs;