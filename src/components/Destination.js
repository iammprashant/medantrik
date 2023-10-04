import Mountain1 from "../assets/ometer.jpeg";
import Mountain2 from "../assets/ometer2.jpeg";
import Mountain3 from "../assets/ocon.jpeg";
import Mountain4 from "../assets/ocon2.jpeg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Medical Devices </h1>
      <p>Medical Device Technology Is Truly Interdisciplinary</p>
      <DestinationData
      className="first-des"
      heading="Oxygen Purity Meter"
      text="PORTABLE PERCENT OXYGEN Analyser This model has been specifically designed for spot-checking oxygen levels in anesthesia, intensive care, incubators, or other variants of respiratory or oxygen therapy. Tabel-Top, battery-powered device that measures the oxygen concentration in a flow of gas from a medical gas source or, with adaptors. The intended application is checking gas supply equipment performance."
      img1={Mountain1}
      img2={Mountain2}
      
      />
       <DestinationData
       className="first-des-reverse"
      heading="Oxygen Concentrator"
      text="Oxygen concentrators are a common treatment for people with chronic obstructive pulmonary disease (COPD), asthma, and other respiratory conditions. They can also be used for people who need supplemental oxygen due to other medical conditions, such as heart failure or pneumonia."
      img1={Mountain3}
      img2={Mountain4}
      
      />
    </div>
  );
};

export default Destination;
