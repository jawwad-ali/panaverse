import Quarterone from "../components/QuarterOne";
import Quarterthree from "../components/QuarterThree";
import Quartertwo from "../components/QuarterTwo";

export async function generateStaticParams() {
  const quarters: string[] = ["q1", "q2", "q3"];

  return quarters.map((quarter) => ({
    quarter: quarter,
  }));
}
 
const Quarters = ({ params }: { params: { quarter: string } }) => {
  return (
    <div>
      {params.quarter === "q1" && <Quarterone />}
      {params.quarter === "q2" && <Quartertwo />}
      {params.quarter === "q3" && <Quarterthree />}
      <h1>Quarter Dynamic</h1>
    </div>
  );
};

export default Quarters;
