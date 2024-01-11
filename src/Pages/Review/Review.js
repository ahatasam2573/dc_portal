import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      axios
        .post("http://localhost:5000/review", data)
        .then((res) => {
          if (res.status == 200) {
            toast.success("successfully you register");
            getreview();
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
  const [review, setreview] = useState([]);
  function getreview() {
    try {
      axios.get("http://localhost:5000/review").then((res) => {
        setreview(res.data);
      });
    } catch (error) {}
  }
  useEffect(() => {
    getreview();
  }, []);
  const handleDelete = async (id) => {
    try {
      axios
        .delete(`http://localhost:5000/review/${id}`,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
          })
        .then((res) => {
          if (res.status == 200) {
            toast.success("successfully you register");
            getreview();
            reset();
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
        <div className="flex justify-center items-center overflow-auto p-10 ">
          <form
            className=" shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between w-full border bg-black"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="w-full text-2xl  font-semibold font-outfit mb-0 text-center text-white">
              User Review
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
              <label className="mb-2" htmlFor="feedback">
                Feedback
              </label>
              <input
                type="text"
                id="feedback"
                {...register("feedback")}
                className="py-3 px-4 rounded-md text-black placeholder:placeholder-slate-700"
                placeholder="enter your feedback"
              />
            </div>

            <div className="flex justify-between items-center w-full mt-3">
              <button className="btn text-white" type="submit">
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
                <th>Review</th>
                <th>data remove</th>
              </tr>
            </thead>
            <tbody>
              {review.map((item, index) => (
                <tr className="bg-base-200" key={index}>
                  <th>{item?.num}</th>
                  <td>{item?.name}</td>
                  <td>{item?.feedback}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="bg-green-500 px-5 py-3 rounded-lg text-white font-bold text-lg"
                    >
                      Delete
                    </button>
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

export default Review;
