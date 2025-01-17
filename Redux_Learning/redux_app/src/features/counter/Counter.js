import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counter-slice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
return (
    <section>
        <p>{count}</p>
    </section>
  )
}

export default Counter;


