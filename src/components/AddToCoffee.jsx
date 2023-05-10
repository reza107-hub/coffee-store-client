import Swal from "sweetalert2";
import Navbar from "./NabVar";

const AddToCoffee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const chef = event.target.chef.value;
    const supplier = event.target.supplier.value;
    const tasteCategory = event.target.tasteCategory.value;
    const details = event.target.details.value;
    const photoUrl = event.target.photoUrl.value;
    const extra = event.target.extra.value;
    const newCoffee = {
      name,
      chef,
      supplier,
      tasteCategory,
      details,
      photoUrl,
      extra,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-8">
        <h1
          className="font-normal text-4xl text-center mb-8"
          style={{
            fontFamily: "Rancho",
            fontWeight: 400,
            fontSize: "45px",
            lineHeight: "56px",
            color: "#374151",
          }}
        >
          Add New Coffee
        </h1>
        <p
          className="font-normal text-lg text-center mb-8"
          style={{
            fontFamily: "Raleway",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "30px",
            textAlign: "center",
            color: "rgba(27, 26, 26, 0.7)",
          }}
        >
          It is a long established that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex md:flex-col items-center justify-center"
        >
          <div className="grid grid-cols-2 md:w-[900px] gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-400 rounded py-2 px-4 mb-2"
            />
            <input
              type="text"
              name="chef"
              placeholder="Chef"
              className="border border-gray-400 rounded py-2 px-4 mb-2"
            />
            <input
              type="text"
              name="supplier"
              placeholder="Supplier"
              className="border border-gray-400 rounded py-2 px-4 mb-2"
            />
            <input
              type="text"
              name="tasteCategory"
              placeholder="Taste Category"
              className="border border-gray-400 rounded py-2 px-4 mb-2"
            />
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="border border-gray-400 rounded py-2 px-4 mb-2"
            />
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              className="border border-gray-400 rounded py-2 px-4 mb-2"
            />
            <input
              type="text"
              name="extra"
              placeholder="Extra"
              className="border border-gray-400 rounded py-2 px-4 mb-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToCoffee;
