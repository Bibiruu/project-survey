import React from 'react';

export const Result = ({questionOne, questionTwo, questionThree, greeting}) => {
  return (
    <>
      <div className='finalResult'>
      <p className='resultOne font-semibold pb-4 m-5'>Your input "<span className='resultInput italic text-red-500'>{questionOne}</span>" 
         tells you about <div className='uppercase font-bold underline text-blue-500'>yourself</div> 
         The way you placed the cube tells how grounded you are. 
         Is your cube floating? Your head is in the clouds. Resting in the sand? You're probably down to earth. The cubes material
         tell how transparent you are. Opaque cubes are more protective of their minds. Glowing? 
         You’re likely a positive person, who aims to raise the spirits of others. 
         Made of granite? You’re likely protective and resilient.
      </p>
      <p className='resultTwo font-semibold pb-4 m-5'>Your answer "<span>{questionTwo}</span>" 
        represents your <div className=' uppercase underline font-semibold text-blue-500'>friends</div> Are your friends leaning on the cube? 
        Your friends depend on you, and are close. Is the ladder frail, or robust? Tall or short? 
        Does it lead inside the cube? Or is it cast to one side, lying unloved on the sand? 
        By now you should be able to draw your own conclusions.
      </p>
      <p className='resultThree font-semibold pb-4 m-5'>Your answer "<span>{questionThree}</span>" represents 
        <div className='uppercase underline font-semibold text-blue-500'>children</div> The number of flowers relates to how many you imagine having. 
        Some people see just a single, withered daisy; others a resplendent garden covering the cube and desert beneath.(Guys: watch out for those).
      </p>
      <p>this the last {greeting}</p>
      </div>
    </>
  );
}