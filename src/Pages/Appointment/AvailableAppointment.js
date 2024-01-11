import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import BookingModal from "./BookingModal";
import BookingService from "./BookingService";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");
  console.log(formatedDate);

  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(
      `http://localhost:5000/available?date=${formatedDate}`
    ).then((res) => res.json())
  ); //ei useQuery use kore refetch call korle data automatic reload hoi tai react query the eta use korsi
  if (isLoading) return "Loading...";
console.log(services);
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="m-10">
      <div>
        <h3 className="text-center text-xl">
          Available service on {format(date, "PP")}.
        </h3>
        <p className="text-center">Please select service</p>
      </div>
      <div className="my-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
        {services.map((service) => (
          <BookingService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></BookingService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          refetch={refetch}
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
