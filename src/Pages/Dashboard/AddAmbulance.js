import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddAmbulance = () => {
  const [ambulance, setAmbulance] = useState([]);
  function getAmbulance() {
    try {
      axios.get("http://localhost:5000/ambulance").then((res) => {
        setAmbulance(res.data);
      });
    } catch (error) {}
  }
  useEffect(() => {
    getAmbulance();
  }, []);
  const handleApprove = (id) => {
    try {
      axios
        .patch(`http://localhost:5000/ambulance/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            toast.success("successfully you register");
            getAmbulance();
          }
        })
        .catch((error) => {
          toast.error(error?.message);
        });
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="pt-14  container mx-auto ">
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>phone</th>
                <th>pay number</th>
                <th>Approve</th>
              </tr>
            </thead>
            <tbody>
              {ambulance.map((item, index) => (
                <tr className="bg-base-200" key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.payPhone}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        handleApprove(item._id);
                      }}
                      className="btn btn-primary"
                    >
                      {item.active == false ? "Aprove" : "not approve"}
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddAmbulance;
