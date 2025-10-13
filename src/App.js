import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import AiServices from "./components/AiServices/AiServices";
import Approach from "./components/Approach/Approach";
import Introduction from "./components/Introduction/Introduction";
import Testimonials from "./components/Testimonials/Testimonials";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Stats />
      <AiServices />
      <Approach />
      <Introduction />
      <Testimonials />
    </div>
  );
}
