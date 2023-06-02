import './ui.style.css';

const Rating = ({point, reviewCount, level}) => {
    return(
        <div className="flex justify-around items-center gap-2">
            <div>
                <p className="text-[#629480] font-bold text-xl">{level}</p>
                <p>{reviewCount}</p>
            </div>
            <div className="badge">
                <p className="text-[#629480] bg-[#E6F9CF]">{point}</p>
            </div>
        </div>
    )
}

export default Rating;