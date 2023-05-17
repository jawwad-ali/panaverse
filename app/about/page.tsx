import AboutComponent from "../components/about/AboutComponent";

export async function generateStaticParams() {
  const name: string = "about";
  return name;
}

// const About = ({ params }: { params: { name: string } }) => {
  const About = () => {
  return <AboutComponent />;
};

export default About;
