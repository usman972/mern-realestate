import React from "react";

const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a new listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1 ">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg "
            id="name"
            maxLength="60"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg "
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg "
            id="address"
            required
          />

          <div className="flex gap-6 flex-wrap  ">
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="sale" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="Rent" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="Parking Spot" />
              <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="Furnished" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="Offer" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className=" flex items-center gap-2">
              <input
                className="p-3 border border-gray-300 rounded-md "
                type="number"
                id="bedroom"
                min="1"
                max="7"
                required
              />
              <p>Beds</p>
            </div>
            <div className=" flex items-center gap-2 ">
              <input
                className="p-3 border border-gray-300 rounded-md "
                type="number"
                id="baths"
                min="1"
                max="3"
                required
              />
              <p>Baths</p>
            </div>
            <div className=" flex items-center gap-2 ">
              <input
                className="p-3 border border-gray-300 rounded-md"
                type="number"
                id="regularPrice"
                min="1"
                max="7"
                required
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className=" text-xs"> ($ /month)</span>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <input
                className="p-3 border border-gray-300 rounded-md"
                type="number"
                id="discountedPrice"
                min="1"
                max="7"
                required
              />
              <div className="flex flex-col items-center">
                <p>discounted price</p>
                <span className="text-xs">($/month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold ">
            {" "}
            Images:
            <span className=" font-normal text-gray-600 ml-2">
              The first cover will be cover (max6)
            </span>
          </p>
          <div className=" flex gap-4">
            <input
              className="p-3 border border-gray-300 w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80 ">
              Upload
            </button>
          </div>
        <button className=" p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Create Listing</button>
        </div>

      </form>
    </main>
  );
};

export default CreateListing;
