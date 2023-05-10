/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const ItemView = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/coffee/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
            });
          const remaining = coffees.filter((cof) => cof._id !== id);
          setCoffees(remaining);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  return (
    <div className="flex bg-white shadow-md rounded-md p-4 w-full max-w-lg">
      <div className="w-1/3">
        <img src={coffee.photoUrl} alt="Placeholder" className="rounded-md" />
      </div>
      <div className="w-1/3 flex flex-col justify-between px-4">
        <h3 className="text-lg font-semibold">Name: {coffee.name}</h3>
        <h3 className="text-lg font-semibold">chef: {coffee.chef}</h3>
        <h3 className="text-lg font-semibold">Price: {coffee.extra}</h3>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
        <button className="bg-blue-500 text-white px-0 w-1/3 py-1 rounded-md">
          View
        </button>
        <Link to={`/updateCoffee/${coffee._id}`}>
          <button className="bg-blue-500 text-white px-0 w-1/3 py-1 rounded-md">
            Edit
          </button>
        </Link>
        <button
          onClick={() => handleDelete(coffee._id)}
          className="bg-blue-500 text-white px-0 w-1/3 py-1 rounded-md"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ItemView;
