import categ from "../assets/categ.jpg";
import { cn } from "./util";
import Marquee from "./Marquee";
const Tips = [
  "First Visit",
  "Finance",
  "Culture",
  "Etiquette",
  "Packing",
  "Budget",
  "Luxury Trip",
  "Solo Female Travel",
  "Group Trip",
  "Family Trip",
  "Adventures",
  "Spiritual",
  "Food",
  "Transportation",
  "Visa"
];
const TravelTips = () => {
return (
  <div className="overflow-hidden mt-10 relative">
    <Marquee pauseOnHover className="[--duration:20s]">
      {Tips.map((tip) => (
        <div
          key={tip}
          className="rounded-full h-40 aspect-square border-2 relative space-x-4 shadow cursor-default ">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            {tip}
          </span>
        </div>
      ))}
    </Marquee>
    
  </div>
);
};

export default TravelTips;
