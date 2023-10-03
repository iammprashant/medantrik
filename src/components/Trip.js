import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Ypu can discover unique destination using google map</p>
     <div className="tripcard">
      <TripData
      image={Trip1}
      heading="Trip in Indonesia"
      text="safsdfhjadhwe eyof7gf wqyeffhassfdgqwfe egfqwegwyfqefbyqwbe foqygfhnxfqxgnwqgwryqwgef qwefygqwxnhwq7ftqefimhw eifgnxfw f q7fkaxewf afenxfsy bfqlfb7a ix sag faf af"
      />
       <TripData
      image={Trip2}
      heading="Trip in Indonesia"
      text="safsdfhjadhwe eyof7gf wqyeffhassfdgqwfe egfqwegwyfqefbyqwbef oqygfhnxfqxgnwqgwryqwgef qwefygqwxnhwq7ftqefimhw eifgnxfw f q7fkaxewf afenxfsy bfqlfb7a ix sag faf af"
      /> <TripData
      image={Trip3}
      heading="Trip in Indonesia"
      text="safsdfhjadhwe eyof7gf wqyeffhassfdgqwfe egfqwegwyfqefbyqwbe foqygfhnxfqxgnwqgwryqwgef qwefygqwxnhwq7ftqefimhw eifgnxfw f q7fkaxewf afenxfsy bfqlfb7a ix sag faf af"
      />
     </div>
    </div>
  );
}

export default Trip;
