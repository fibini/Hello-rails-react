import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreetings } from "../redux/greetings/greetings";

const Greeting = () => {
  const message = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetings());
  }, []);
  return (
    <div>
      <p>{message.message.message}</p>
    </div>
  );
}
export default Greeting;