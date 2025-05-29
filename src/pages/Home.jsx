import Footer from "../components/Footer";
import GridConfiguration from "../components/GridConfiguration";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="dark:bg-gray-950 bg-blue-50">
      <Header />
      <GridConfiguration />
      <Footer />
    </div>
  );
};

export default Home;
