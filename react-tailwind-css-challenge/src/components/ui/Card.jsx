//import font-awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
//import css
import './ui.style.css';
//import ui component
import Button from '../../components/ui/Button';

const Card = ({price, title, sqm, people, service}) => {
    return(
        <div className="card_container">
            <img src="./img/portfolio3.jpg" alt="card_image" className="h-1/2 rounded-2xl"/>
            <div>
                <p className='mt-2 text-xl'>{title}</p> 
                <div className="description">
                    <div className='mt-2'>
                        <div className='flex flx-row justify-start gap-3 text-sm'>
                            <p><FontAwesomeIcon icon={faTableCellsLarge} /></p>
                            <p>{sqm} sqm</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='flex flx-row justify-start gap-3 tex-sm'>
                            <p><FontAwesomeIcon icon={faPeopleGroup} /></p>
                            <p>{people} people</p>
                        </div>
                    </div>
                    
                    <div className='mt-2'>
                        <div className='flex flx-row justify-start gap-3 text-sm'>
                            <p><FontAwesomeIcon icon={faBed} /></p>
                            <p>{service}</p>
                        </div>
                    </div>
                    <div className='mt-2 text-sm text-gray-500'>
                        <p>Pancakes or waffles with breakfast</p>
                    </div>
                    <div className='mt-4'>
                        <Button className={"btn btn-fill w-full"} content={`Book now for $${price}`} handleClick={()=>{alert('buy credit')}}/> <Button />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Card;