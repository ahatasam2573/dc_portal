import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Ambulance = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      axios
        .post("http://localhost:5000/ambulance", data)
        .then((res) => {
          if (res.status == 200) {
            toast.success("successfully you register");
            getAmbulance();
            reset();
          }
        })
        .catch((err) => {
          toast.error("you have already Ambulance");
        });
    } catch (error) {
      toast.error(error?.message);
    }
    // reset()
  };
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
  return (
    <div className="pt-14  container mx-auto ">
      <div>
        <div className="flex justify-center items-center overflow-auto p-10 ">
          <form
            className=" shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between w-full border bg-black"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="w-full text-2xl  font-semibold font-outfit mb-0 text-center text-white">
              Ambulance
            </h1>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="py-3 px-4 rounded-md text-black placeholder:placeholder-slate-700"
                placeholder="enter your name"
              />
            </div>

            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="address"
                id="address"
                {...register("address")}
                className="py-3 px-4 rounded-md text-black placeholder:placeholder-slate-700"
                placeholder="enter your address"
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="phone">
                contact Phone
              </label>
              <input
                type="phone"
                id="phone"
                {...register("phone")}
                className="py-3 px-4 rounded-md text-black placeholder:placeholder-slate-700"
                placeholder="enter your phone"
              />
            </div>
            <div className="flex flex-col w-full max-w-xs">
              <label className="mb-2" htmlFor="payPhone">
                Payment Phone
              </label>
              <input
                type="phone"
                id="payPhone"
                {...register("payPhone")}
                className="py-3 px-4 rounded-md text-black placeholder:placeholder-slate-700"
                placeholder="enter your payPhone"
              />
            </div>

            <div className="flex justify-between items-center w-full mt-3">
              <button className="btn btn-primary text-white" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
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
              </tr>
            </thead>
            <tbody>
              {ambulance.map((item, index) => (
                <tr className="bg-base-200" key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.payPhone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ambulance;
