import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user, manageProfile } = useContext(AuthContext);
  const handleSave = (e) => {
    e.preventDefault();
    const name = e.target.fullname.value;
    const photo = e.target.photourl.value;
    manageProfile(name, photo);
  };
  return (
    <div className="max-w-lg mx-auto mt-14 p-6 py-12 bg-white shadow">
      <div className="flex flex-col items-center mb-6">
        <img
          src={user.photoURL}
          className="w-28 h-28 object-cover rounded-full mb-4"
        />
        <p className="text-lg font-bold"> {user.displayName}</p>
        <p className="text-lg text-gray-600">{user.email}</p>
      </div>

      <form onSubmit={handleSave} className="space-y-5">
        <div className="space-y-3">
          <label htmlFor="fullname" className="block font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            required
            placeholder="Your name"
            className="w-full px-4 py-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">Photo URL</label>
          <input
            type="text"
            name="photourl"
            id="photourl"
            required
            placeholder="Photo URL"
            className="w-full px-4 py-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
