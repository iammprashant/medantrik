import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Our Clients</h1>
      <p>Quality is remembered long after price is forgotten</p>
     <div className="tripcard">
      <TripData
      image={Trip1}
      heading="PPM Hospital"
      text="PPM Medical Research & Trauma Centre Pvt Ltd is a 100 Bedded Modern Hospital with C.T., I.C.U., N.I.C.U. and Operation theaters lashed with modern equipment and lighting. These types of facilities are only available in this hospital in south Kanpur at present."
      />
       <TripData
      image={Trip2}
      heading="GSVM Medical College"
      text="G.S.V.M. Medical College Kanpur, known for its academic excellence world over, is named after Late Shri Ganesh Shankar Vidyarthi, a great freedom fighter ,who lost his life at the altar of the communal frenzy in Kanpur in March 1931."
      /> <TripData
      image={Trip3}
      heading="L.P.S Institute of Cardiology"
      text="The Institute of Cardiology & Cardiac Surgery in Kanpur was established in the year 1975. The Center provides the highest level of quality care amidst technology that is truly world-class and futuristic."
      />
     </div>
    </div>
  );
}

export default Trip;
