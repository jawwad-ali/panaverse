import AboutComponent from "../components/about/AboutComponent";

export async function generateStaticParams() {
  const name: string[] = ["about"];
  return name;
}

// const About = () => {
const About = ({ params }: { params: { name: string } }) => {
  return <AboutComponent />;
};

export default About;
