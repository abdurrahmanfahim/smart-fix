import { Link } from "react-router";
import avatar from "@/assets/images/avatar.png";
import profileData from "./profileData";

const Settings = () => {
  console.log(profileData[profileData.length - 1]);
  console.log(profileData);
  return (
    <>
      <div className="p-6 max-w-137.5">
        <div className="font-inter font-normal text-2xl leading-9 text-white flex gap-x-16 ml-3">
          <button>Profile</button>
          <button>Password Settings</button>
        </div>
        <div className="mt-10">
          <h3 className="font-inter font-normal text-[20px] leading-[150%] text-white mb-2">
            Profile Image
          </h3>
          <div className="flex gap-x-2">
            <div className="size-25.5">
              <img src={avatar} alt="profileImage" className="w-full" />
            </div>
            <div className="mb-2 place-self-end">
              <Link
                to={"/settings/profile"}
                className={`py-1 px-2 rounded-xl inset-shadow border-b border-[rgba(255,255,255,0.50)]`}
              >
                <span className=" font-inter whitespace-nowrap font-medium text-base leading-[150%] text-white">
                  Edit Profile
                </span>
              </Link>
            </div>
          </div>
          <div className="pt-6 ">
            {profileData.map((item, id) => (
              <div
                key={id}
                class={`flex sm:flex-nowrap flex-wrap gap-16 items-center py-4 ${item.id === profileData[profileData.length - 1].id ? "" : "border-b border-[#192D71]"} `}
              >
                <div className=" min-w-52">
                  <p class="font-inter font-medium text-[20px] leading-[150%] text-white  ">
                    {item.text}
                  </p>
                </div>
                <div className=" sm:min-w-100">
                  <p class="w-full font-inter font-normal text-[20px] leading-[150%] text-white">
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
