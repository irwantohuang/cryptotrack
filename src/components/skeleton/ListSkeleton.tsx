const ListSkeleton = () => {
    return (
        <div className="animate-pulse p-4 bg-primary-black-200 rounded-lg shadow-lg max-w-md w-full flex items-start gap-4">
            <div className="h-20 min-w-20 bg-primary-black-300 rounded-full"></div>
            <div className='w-full'>
                <div className="h-4 w-full bg-primary-black-300 rounded mt-2"></div>
                <div className="h-4 w-3/4 bg-primary-black-300 rounded mt-2"></div>
                <div className="h-4 w-1/4 bg-primary-black-300 rounded mt-2"></div>
            </div>
        </div>
    )
}

export default ListSkeleton