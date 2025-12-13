import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);

  const regions = [...new Set(regionsDuplicate)];

  //explore useMemo useCallback
  const riderRegion = useWatch({
    control,
    name: "region",
  });

  const hendleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top",
          icon: "success",
          title:
            "Your application has been submitted. We will reach to you in 145 days",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  return (
    <div>
      <h2 className="text-4xl">B a Rider</h2>
      <form
        onSubmit={handleSubmit(hendleRiderApplication)}
        className="mt-12 p-4 text-black"
      >
        {/* tow colum */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          {/* Rider Deteils */}
          {/* Rider Name */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Tell us about yourself</h4>
            <label className="label">Your Name</label>
            <input
              type="text"
              {...register("name")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Name"
            />

            {/* Rider Email */}
            <label className="label">Your Email</label>
            <input
              type="email"
              {...register("email")}
              defaultValue={user?.email}
              className="input w-full"
              placeholder="Rider Email"
            />

            {/* region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Regions</legend>
              <select
                {...register("region")}
                defaultValue="Pick a regions"
                className="select w-full"
              >
                <option disabled={true}>Pick a regions</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("district")}
                defaultValue="Pick a district"
                className="select w-full"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(riderRegion).map((d, i) => (
                  <option key={i}>{d}</option>
                ))}
              </select>
            </fieldset>

            {/* Address */}
            <label className="label mt-4">Your Address</label>
            <input
              type="text"
              {...register("address")}
              className="input w-full"
              placeholder="Address"
            />

            {/* More Details */}
            <h4 className="text-2xl font-semibold">More Deteils</h4>
            <label className="label">Driving License</label>
            <input
              type="text"
              {...register("license")}
              className="input w-full"
              placeholder="Driving License"
            />

            {/* NID */}
            <label className="label">NID</label>
            <input
              type="text"
              {...register("nid")}
              className="input w-full"
              placeholder="NID"
            />

            {/* Rider Phone No */}
            <label className="label mt-4">Rider Phone No</label>
            <input
              type="number"
              {...register("riderPhoneNo")}
              className="input w-full"
              placeholder="Rider Phone No"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Send Parcrl"
        />
      </form>
    </div>
  );
};

export default Rider;
