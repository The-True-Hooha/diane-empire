// ProductDetails.jsx
import React from "react";

const ProductDetails = () => {
  return (
    <div className="col-lg-6 ">
      <h1 className="text-4xl font-bold">Face Cleanser</h1>
      <p className="text-lg mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
        libero vitae lectus fermentum aliquet. Donec vitae nisi nec ligula
        semper faucibus. Nullam auctor nisi vel mauris luctus, vel finibus dui
        faucibus. Sed at urna consequat, fringilla diam vel, aliquet nulla.
        Nullam et felis risus.
      </p>
      <p className="font-bold text-xl mt-4">Price: $19.99</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
