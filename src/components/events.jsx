import React from "react";
import eventbig from "../assets/event-big.png";

const eventList = [
  {
    hashtag: "#FoodCamp",
    title: "Healthy food and nutritions awreness campaign december",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur notted duber adipisicing elit sed do eiusmod tempor.",
    location: "New York, USA",
    time: "10:00 AM",
    Image: eventbig,
  },
  {
    hashtag: "#FoodCamp",
    title: "Healthy food and nutritions awreness campaign december",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur notted duber adipisicing elit sed do eiusmod tempor.",
    location: "New York, USA",
    time: "10:00 AM",
  },
  {
    hashtag: "#FoodCamp",
    title: "Healthy food and nutritions awreness campaign december",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur notted duber adipisicing elit sed do eiusmod tempor.",
    location: "New York, USA",
    time: "10:00 AM",
  },
  {
    hashtag: "#FoodCamp",
    title: "Healthy food and nutritions awreness campaign december",
    description:
      "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur notted duber adipisicing elit sed do eiusmod tempor.",
    location: "New York, USA",
    time: "10:00 AM",
  },
];

const MainEvent = ({ hashtag, title, description, location, time, isMain }) => {
  return (
    <div
      className={`${
        isMain ? "w-full mb-8" : "w-[calc(33.33%-1rem)]"
      } bg-white flex rounded-lg shadow-2xl overflow-hidden`}
    >
      {isMain && (
        <div className="relative h-[400px]">
          <img
            src={eventbig}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <span className="text-yellow-400 text-sm font-medium">
              {hashtag}
            </span>
            <h3 className="text-white text-2xl font-bold mt-2">{title}</h3>
          </div>
        </div>
      )}
      <div className={`p-6 ${!isMain && "border-l-4 border-red-500"}`}>
        {!isMain && (
          <>
            <span className="text-yellow-400 text-sm font-medium">
              {hashtag}
            </span>
            <h3 className="text-gray-800 text-xl font-bold mt-2">{title}</h3>
          </>
        )}
        <p className="text-gray-600 mt-3">{description}</p>
        <div className="flex items-center gap-4 mt-4 text-gray-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-10 py-20">
        <h2 className="text-3xl tex font-normal">Upcoming Events</h2>
        <p className="text-gray-600 mt-4">
          Join us for our upcoming events and make a difference!
        </p>
      </div>
      <div className="container flex-auto mx-auto px-4">
        <div className="flex flex-wrap gap-6">
          {eventList.map((event, index) => (
            <MainEvent key={index} {...event} isMain={index === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
