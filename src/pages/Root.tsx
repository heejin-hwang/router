import React from 'react';
import useRouter from "../hooks/useRouter";

const Root = () => {
  const { push }  = useRouter()
  return (
    <div className="container">
      root
      <button onClick={() => { push('/about')}}>about</button>
    </div>
  );
};

export default Root;
