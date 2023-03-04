import Header from "./component/Header";
import Homepage from "./component/Pages/Homepage";
import Categories from "./component/Pages/Categories";
function App() {
  return (
    <div className="App 2xl:w-5/6 xl:mx-auto">
      <Header />
      <Homepage />
      <Categories />
      <p className="w-4/6 mx-auto text-center font-mainFont text-2xl m-16">Love and work are to people what water and sunshine are to plant</p>
    </div>
  );
}

export default App;
