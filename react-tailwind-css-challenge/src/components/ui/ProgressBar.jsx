const ProgressBar = ({object, point}) => {
    return (
        <div className="w-full bg-neutral-200 mt-3">
            <div>
                <div className="flex flex-row justify-between">
                    <p className="text-sm">{object}</p>
                    <p>{point} / 10</p>
                </div>
                <div className="w-full bg-neutral-200">
                    <div
                        className="bg-primary p-1 text-center text-sm leading-none text-primary-100"
                        style={{'width': `${point * 10}%`}}>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ProgressBar;