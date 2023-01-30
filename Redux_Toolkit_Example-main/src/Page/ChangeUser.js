import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  increment, incrementByName } from '../feature/counter/counterSlice'

export default function ChangeUser() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Change to Mansi
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByName('Poonam'))}
        >
          Change to Poonam
        </button>
      </div>
    </div>
  )
}