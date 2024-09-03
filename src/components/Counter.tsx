import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { decrement, increment, incrementByParams } from '../store/counter/counterSlice';
import { ChangeEvent, useState } from 'react';

const Counter = () => {
    const [inputValue, setInputValue] = useState<number | string>(0)
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);
    

    return (
        <div className='flex flex-col max-w-md w-full bg-primary-black-200 px-24 py-8 rounded shadow'>
            <h1 className='text-2xl font-semibold text-center'>Value: { count }</h1>

            <div className='flex items-center gap-4 mt-4 w-full justify-center'>
                <button onClick={() => dispatch(increment())} className='px-8 bg-primary flex items-center justify-center rounded py-1'>+</button>
                <button onClick={() => dispatch(decrement())} className='px-8 bg-primary flex items-center justify-center rounded py-1'>-</button>
            </div>


            <div className='flex items-center gap-2 mt-2'>
                <input value={inputValue} type="number" onChange={handleInputChange} className='w-full rounded px-2 py-0 text-black' placeholder='10' />
                <button onClick={() => dispatch(incrementByParams(Number(inputValue)))} className='w-full bg-primary-200 rounded'>+ { inputValue }</button>
            </div>
        </div>
    )
}

export default Counter