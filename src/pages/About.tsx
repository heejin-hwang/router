import React from 'react';
import useRouter from "../hooks/useRouter";

const About = () => {
  const { push }  = useRouter()
  return (
    <div className="container">
      about
      <button onClick={() => { push('/')}}>go main</button>
    </div>
  );
};

export default About;
