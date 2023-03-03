import Header from "./component/Header";
import Homepage from "./component/Pages/Homepage";
import Categories from "./component/Pages/Categories";
function App() {
  return (
    <div className="App xl:w-5/6 xl:mx-auto">
      <Header />
      <Homepage />
      <Categories />
    </div>
  );
}

export default App;
