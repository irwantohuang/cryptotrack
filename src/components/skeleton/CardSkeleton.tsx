
const CardSkeleton = () => {
    return (
        <div className="animate-pulse p-4 bg-primary-black-200 rounded-lg shadow-lg max-w-xs w-full">
            <div className="h-8 bg-primary-black-300 rounded mb-2"></div>
            <div className="h-3 bg-primary-black-300 rounded mb-2"></div>
            <div className="h-32 bg-primary-black-300 rounded mt-4"></div>
        </div>
    )
}

export default CardSkeleton;
