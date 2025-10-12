import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import AiServices from "./components/AiServices/AiServices";
import Approach from "./components/Approach/Approach";


export default function App() {
  return (
    <div className="app">
      <Header />
      <Stats />
      <AiServices />
      <Approach />
    </div>
  );
}
