//import css
import './portfolio.style.css';

const Portfolio = ({images , handleImage, changeImage}) => {
    return(
        <div>
            <button className='mb-5' onClick={handleImage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 font-extrabold">
                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
            </button>
            <div className='portfolio'>
                <div><img src={images[0]} alt="portfolio" className="galleryImage grid row-span-2 h-full"/></div>
                <div className='grid grid-cols-2  max-[678px]:grid-cols-1 gap-5'>
                    <div><img src={images[1]} alt="portfolio" className='slideImage' onClick={()=>changeImage(2)}/></div>
                    <div><img src={images[2]} alt="portfolio" className='slideImage' onClick={()=>changeImage(3)}/></div>
                    <div><img src={images[4]} alt="portfolio" className='slideImage' onClick={()=>changeImage(5)}/></div>
                    <div><img src={images[3]} alt="portfolio" className='slideImage' onClick={()=>changeImage(4)}/></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;