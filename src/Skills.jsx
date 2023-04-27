import React from "react";
import graphicDesign from "./assets/pattern-graphic-design.svg";
import uiux from "./assets/pattern-ui-ux.svg";
import apps from "./assets/pattern-apps.svg";
import photography from "./assets/pattern-photography.svg";
import illustrations from "./assets/pattern-illustrations.svg";
import motion from "./assets/pattern-motion-graphics.svg";

const Skills = () => {
  const items = [
    {
      id: 1,
      image: graphicDesign,
      name: "Graphic Design",
    },
    {
      id: 2,
      image: uiux,
      name: "UI/UX",
    },
    {
      id: 3,
      image: apps,
      name: "Apps",
    },
    {
      id: 4,
      image: illustrations,
      name: "Illustrations",
    },
    {
      id: 5,
      image: photography,
      name: "Photography",
    },
    {
      id: 6,
      image: motion,
      name: "Motion Graphics",
    },
  ];
  const firstSet = items.filter((item) => item.id === 1);
  const secondSet = items.filter((item) => {
    if (item.id == 2 || item.id == 3) {
      return true;
    }
  });
  const thirdSet = items.filter((item) => item.id === 4);
  const fourthSet = items.filter((item) => item.id === 5);
  const fifthSet = items.filter((item) => item.id === 6);
  return (
    <section>
      <div className="w-[85%] m-auto text-center md:w-[75%] lg:w-[55%]">
        <h1 className="font-semibold text-3xl py-4 md:text-4xl lg:text-5xl">
          Design solutions made easy
        </h1>
        <p className="py-4 font-normal lg:w-[90%] m-auto">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <div className="py-10 lg:grid grid-cols-3 gap-8 px-[10%]">
        {firstSet.map((item) => (
          <div key={item.id} className="item row-span-2 bg-[#755cde] relative">
            <div className="absolute bottom-4">
              <img src={item.image} alt={item.name} className="w-16" />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
        <div className="col__2 flex flex-col">
          <div className="col__2__top flex gap-4">
            {secondSet.map((item) => (
              <div key={item.id} className="item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100%] h-[10rem] object-cover"
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          {thirdSet.map((item) => (
            <div key={item.id} className="item">
              <img
                src={item.image}
                alt={item.name}
                className="w-[100%] h-[10rem] object-cover"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="col__3">
          {fourthSet.map((item) => (
            <div key={item.id} className="item">
              <img
                src={item.image}
                alt={item.name}
                className="w-[100%] h-[10rem] object-cover"
              />
              <p>{item.name}</p>
            </div>
          ))}
          {fifthSet.map((item) => (
            <div key={item.id} className="item">
              <img
                src={item.image}
                alt={item.name}
                className="w-[100%] h-[10rem] object-cover"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
