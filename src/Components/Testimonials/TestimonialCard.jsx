import React from "react";

const TestimonialCard = ({data}) => {
    const {name,image,comment} = data;
  return (
    <>
      <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 mb-5">
        <img
          src={image}
          alt=""
          className="w-16 -mt-14"
        />
        <h5 className="text-lg font-bold">{name}</h5>
        <p className="text-sm text-darkGrayishBlue">{comment}</p>
      </div>
    </>
  );
};

export default TestimonialCard;
