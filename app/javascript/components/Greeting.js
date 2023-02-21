import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  // get rockets data from the store
  const allGreetings = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);
  console.log(allGreetings);

  return <h2 style={{ fontSize: '30px' }}>{allGreetings.message}</h2>;
};

export default Greeting;
