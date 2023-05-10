import { useLoaderData } from "react-router-dom";
import "./App.css";
import ItemView from "./components/ItemView";
import Navbar from "./components/NabVar";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto mt-10 grid grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <ItemView
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></ItemView>
        ))}
      </div>
    </>
  );
}

export default App;
