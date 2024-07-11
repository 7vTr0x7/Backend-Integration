import React from "react";
import useFetch from "../hooks/useFetch";

const Hotels = () => {
  const { data, loading, error } = useFetch("http://localhost:4000/hotels");
  console.log(data);

  return (
    <div>
      <h1>All Hotels</h1>
      {data && (
        <>
          <ul>
            {data.map((hotel) => (
              <li key={hotel._id}>{hotel.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Hotels;
