import { updateGuest } from "../_lib/actions";
import { getGuest } from "../_lib/data-service";
import SubmitButton from "./SubmitButton";

export default async function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-800 py-8 px-12 text-lg flex flex-col gap-6 rounded-sm "
    >
      <div className="space-y-2">
        <label htmlFor="fullName"> full name </label>
        <input
          type="text"
          disabled
          id="fullName"
          defaultValue={fullName}
          name="fullName"
          className="px-5 py-3 bg-primary-200 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email"> email </label>
        <input
          type="text"
          disabled
          id="email"
          defaultValue={email}
          name="email"
          className="px-5 py-3 bg-primary-200 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality"> where are you from? </label>
          <img
            src={countryFlag}
            alt="my country flag"
            className="h-5 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID</label>
        <input
          placeholder="National ID Number"
          id="nationalID"
          defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className=" flex justify-end items-center">
        <SubmitButton pendingLabel="Updating details...">
          {" "}
          Update Profile
        </SubmitButton>
      </div>
    </form>
  );
}
