import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination </h1>
      <p>Tours give you the opportunity to see a lot, within a time frame .</p>
      <DestinationData
      className="first-des"
      heading="Taal volcano, Batagas"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam, sed amet sequi ut praesentium deleniti maiores quo beatae! Quisquam cum ipsum quasi suscipit deserunt illo vitae corporis! Consequuntur, eius."
      img1={Mountain1}
      img2={Mountain2}
      
      />
       <DestinationData
       className="first-des-reverse"
      heading="Taal volcano, Batagas"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam, sed amet sequi ut praesentium deleniti maiores quo beatae! Quisquam cum ipsum quasi suscipit deserunt illo vitae corporis! Consequuntur, eius."
      img1={Mountain3}
      img2={Mountain4}
      
      />
    </div>
  );
};

export default Destination;
