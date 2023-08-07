
import { useState } from 'react'
import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import cart from './images/icon-cart.svg'

function Count() {
    const [count, setCount] = useState(0)
    return (
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='text-xl flex justify-around items-center w-full  rounded-[10px] md:w-[157px] h-[56px] bg-[#F6F8FD]'>
                <button className='hover:opacity-75' onClick={() => { count != 0 && setCount(count - 1) }}> <img src={minus} alt="" /> </button>
                <span className='font-bold'>{count}</span>
                <button onClick={() => setCount(count + 1)} className='hover:opacity-75'> <img src={plus} alt="" /> </button>
            </div>
            <button className='flex items-center gap-4 hover:bg-[#FFAB6A] transition shadow-[0px_20px_50px_-20px_#FF7E1B] rounded-[10px] w-full md:w-[272px] h-[56px] bg-[#FF7E1B] text-white justify-center'>
                <img src={cart} />
                Add to cart
            </button>
        </div>
    )
}

export default Count