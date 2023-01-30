import LeftSideContents from "./Contents/LeftSideContents";
import "./App.css";
import RightSideBar from "./Contents/RightSideBar";
import MainContainer from "./Main_ContentBar/MainContainer";

function App() {
    return (
    <div className="sample">
      <LeftSideContents  />
      <MainContainer />
      <RightSideBar />
    </div>
  );
}

export default App;
