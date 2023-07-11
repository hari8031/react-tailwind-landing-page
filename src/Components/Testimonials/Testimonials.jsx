import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonial">
      {/* main container and testm box */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {data.map((data, i) => (
            <TestimonialCard data={data} key={i} />
          ))}
        </div>
      </div>
      <div className="flex justify-center my-5">
            <a
              href=""
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full 
              baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
    </section>
  );
};

export default Testimonials;

const data = [
  {
    name: "Anisha Li",
    image: "/image/avatar-anisha.png",
    comment: `“Manage has supercharged our team’s workflow. The ability to
  maintain visibility on larger milestones at all times keeps
  everyone motivated.”`,
  },
  {
    name: "Ali Bravo",
    image: "/image/avatar-ali.png",
    comment: `“We have been able to cancel so many other subscriptions since
    using Manage. There is no more cross-channel confusion and
    everyone is much more focused.”`,
  },
  {
    name: "Richard Watts",
    image: "/image/avatar-richard.png",
    comment: ` “Manage has supercharged our team’s workflow. The ability to
    maintain visibility on larger milestones at all times keeps
    everyone motivated.”`,
  },
];
