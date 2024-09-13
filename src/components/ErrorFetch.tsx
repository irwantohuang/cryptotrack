import Button from './elements/Button'

const ErrorFetch = () => {
    return (
        <div className='w-full max-w-md rounded border border-primary-black-300 self-center'>
            <div className='py-6 text-center'>
                <p className='font-medium text-xl text-red-400'>Oops, Something went wrong!</p>
                <p className='font-medium text-base mt-2 text-red-200'>Please kindly refresh the page :)</p>

                <Button className='mt-4 px-6 text-sm bg-primary-black-300 hover:bg-primary-black-200 text-red-100' onClick={() => window.location.reload()}>
                    Refresh
                </Button>
            </div>
        </div>
    )
}

export default ErrorFetch