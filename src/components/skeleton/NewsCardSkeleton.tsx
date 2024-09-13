const NewsCardSkeleton = () => {
    return (
        <div className="animate-pulse p-4 bg-primary-black-200 rounded-lg shadow-lg max-w-sm w-full">
            <div className="h-32 bg-primary-black-300 rounded"></div>
            <div className="h-3  bg-primary-black-300 rounded mt-4"></div>
            <div className="h-3 w-3/4 bg-primary-black-300 rounded mt-1.5"></div>
            <div className="h-2 bg-primary-black-300 rounded mt-3.5"></div>
            <div className="h-2 w-1/2 bg-primary-black-300 rounded mt-1.5"></div>
            <div className="flex items-center justify-between mt-3">
                <div className="h-2 w-1/5 bg-primary-black-300 rounded mb-2"></div>
                <div className="h-2 w-1/4 bg-primary-black-300 rounded mb-2"></div>
            </div>
        </div>
    )
}

export default NewsCardSkeleton