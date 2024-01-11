import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";

const BloodRegister = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const term = useWatch({ control, name: "term" });
  const bloodGroup = [
    "selected",
    "A+",
    "B+",
    "AB+",
    "O+",
    "A-",
    "B-",
    "AB-",
    "O-",
  ];

  const onSubmit = async (data) => {
    try {
      axios
        .post("http://localhost:5000/blood", data)
        .then((res) => {
          if (res.status == 200) {
            toast.success("successfully you register");
            getDonar();
            reset();
          }
        })
        .catch((err) => {
          toast.error("you have already donar");
        });
    } catch (error) {
      toast.error(error?.message);
    }
    // reset()
  };
  const [donar, setDonar] = useState([]);
  function getDonar() {
    try {
      axios.get("http://localhost:5000/blood").then((res) => {
        setDonar(res.data);
      });
    } catch (error) {}
  }
  useEffect(() => {
    getDonar();
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
              Donar Register
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
              <label className="mb-2" htmlFor="phone">
                Phone
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
              <label
                htmlFor="bloodGroup"
                className=" mb-2"
                placeholder="enter your name"
              >
                Blood Group
              </label>
              <select
                {...register("bloodGroup")}
                id="bloodGroup"
                className="py-3 px-4 rounded-md text-black placeholder:placeholder-slate-700"
              >
                {bloodGroup.map((category, index) => (
                  <option value={category} key={index}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-between items-center w-full mt-3">
              <div className="flex  w-full max-w-xs">
                <input
                  className="mr-3"
                  type="checkbox"
                  {...register("term")}
                  id="terms"
                />
                <label htmlFor="terms">I agree to terms and conditions</label>
              </div>
              <button disabled={!term} className="btn text-white" type="submit">
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
                <th>Blood group</th>
              </tr>
            </thead>
            <tbody>
              {donar.map((item, index) => (
                <tr className="bg-base-200" key={index}>
                  <th>{item?.num}</th>
                  <td>{item?.name}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.bloodGroup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BloodRegister;
