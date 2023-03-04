import Header from "./component/Header";
import Homepage from "./component/Pages/Homepage";
import Categories from "./component/Pages/Categories";
import {RecoilRoot,} from 'recoil';
import Featured from "./component/Pages/Featured";

function App() {
  return (
    <RecoilRoot>
    <div className="App 2xl:w-5/6 xl:mx-auto">
      <Header />
      <Homepage />
      <Categories />
      <p className="w-4/6 mx-auto text-center font-mainFont text-2xl m-16">Love and work are to people what water and sunshine are to plant</p>
      <Featured />
    </div>
    </RecoilRoot>
  );
}

export default App;
