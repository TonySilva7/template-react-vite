import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from '../features/counter/counterSlice';
import { Button } from './styles';

export default function Counter(): JSX.Element {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  return (
    <div>
      <div className="flex w-min px-4 py-2 rounded-lg shadow-md items-center justify-center gap-4 bg-gray-400 mx-auto mt-8">
        <Button
          bg="red"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="py-1 px-3 min-w-[4rem] bg-red-400 text-white text-3xl cursor-pointer hover:bg-red-600 rounded-md"
        >
          -
        </Button>
        <span className="bg-gray-200 text-gray-600 px-8 py-2 text-3xl rounded-md shadow-inner">
          {count}
        </span>
        <Button
          bg="green"
          aria-label="Increment value"
          className="py-1 px-3 min-w-[4rem] bg-green-400 text-white text-3xl cursor-pointer hover:bg-green-600 rounded-md"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className="flex w-max px-4 py-2 rounded-lg shadow-md items-center justify-center gap-4 bg-gray-400 mx-auto mt-8">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          className="bg-gray-200 px-4 py-2 w-12 text-gray-600 rounded-sm text-center outline-none focus:outline-none focus:ring-2 ring-purple-600"
        />
        <button
          className="bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
