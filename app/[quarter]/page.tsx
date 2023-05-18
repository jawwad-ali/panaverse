import QuarterOne from "../components/QuarterOne";
import QuarterThree from "../components/QuarterThree";
import QuarterTwo from "../components/QuarterTwo";

export async function generateStaticParams() {
  const quarters: string[] = ["q1", "q2", "q3"];

  return quarters.map((quarter) => ({
    quarter: quarter,
  }));
}

const Quarters = ({ params }: { params: { quarter: string } }) => {
  return (
    <div>
      {params.quarter === "q1" && <QuarterOne />}
      {params.quarter === "q2" && <QuarterTwo />}
      {params.quarter === "q3" && <QuarterThree />}
    </div>
  );
};

export default Quarters;
