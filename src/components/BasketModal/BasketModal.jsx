import React, { useEffect, useState } from 'react'
import './style.css'
import { useSelector,useDispatch } from 'react-redux'
import { countIncriment,countDecriment } from '../../features/MyBasketSlice/myBasketSlice'

const BasketModal = () => {
    const [globalSum,setGlobalSum] = useState(0);
    const myBaskets = useSelector((state) => state.myBasket);

    const dispatch = useDispatch();

    const getGlobalSum = () => {
        const sum = myBaskets.reduce((acc,val) => {
            return acc += val.price
        },0)
        setGlobalSum(sum)
    };


    const handleAddCount = (index) => {
        dispatch(countIncriment(index))
    }

    const handleMinusCount = (index) => {
        dispatch(countDecriment(index))
    }

    useEffect(() => {
        getGlobalSum()
    },[myBaskets])

  return (
    <div className='basket_modal'>
        <div className="modal">
            <div className="basket_text_block">
                <span>Your Basket</span>
            </div>
            <div className="my_basket_tshits">

                    {myBaskets.map((val,index) => {
                        return (
                            
                            <div key={val.id} className="basket_tshits">
                                <div className="image_block">
                                    <img src={val.img} alt="" />
                                </div>
                                <div className="count_block">
                                    <div onClick={() => handleAddCount(index)} className="incriment_block">
                                        <span>+</span>
                                    </div>
                                    <span className='count'>{val.count}</span>
                                    <div onClick={() => handleMinusCount(index)} className="decriment_block">
                                        <span>-</span>
                                    </div>
                                </div>
                                <div className="price_block">
                                    <span>${val.price}</span>
                                </div>
                              
                            </div>
                            
                        )
                    })}
            </div>

            <div className="global_buy_butto_block">
                <div className="global_buy_button">Buy ${globalSum}</div>
            </div>

        </div>
    </div>
  )
}

export default BasketModal
