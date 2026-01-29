import { Link } from "react-router";
import avatar from "@/assets/images/avatar.png";
import profileData from "./profileData";

const Settings = () => {
  console.log(profileData[profileData.length - 1]);
  console.log(profileData);
  return (
    <>
      <div className="p-4 sm:p-6 md:max-w-137.5 w-full pr-4 md:pr-0">
        <div className="font-inter font-normal sm:text-2xl text-base leading-9 text-white flex gap-x-4 sm:gap-x-16 ml-3">
          <button>Profile</button>
          <button>Password Settings</button>
        </div>
        <div className="sm:mt-10 mt-6">
          <h3 className="font-inter font-normal text-base sm:text-xl leading-[150%] text-white mb-2">
            Profile Image
          </h3>
          <div className="flex sm:gap-x-2 gap-x-1">
            <div className="md:size-25.5 size-15">
              <img src={avatar} alt="profileImage" className="w-full" />
            </div>
            <div className="mb-2 place-self-end">
              <Link
                to={"/settings/profile"}
                className={`py-1 px-2 rounded-xl inset-shadow border-b border-[rgba(255,255,255,0.50)]`}
              >
                <span className=" font-inter whitespace-nowrap font-medium sm:text-base text-xs leading-[150%] text-white">
                  Edit Profile
                </span>
              </Link>
            </div>
          </div>
          <div className="sm:pt-6 pt-4">
            {profileData.map((item, id) => (
              <div
                key={id}
                class={`flex items-center sm:py-4 py-2 ${item.id === profileData[profileData.length - 1].id ? "" : "border-b border-[#192D71]"}`}
              >
                <p class="font-inter font-medium text-[14px] sm:text-xl leading-[150%] text-white sm:w-51.5 min-w-[120px] whitespace-nowrap ">
                  {item.text}
                </p>
                <p class="font-inter font-normal text-[14px] sm:text-xl leading-[150%] text-white  ">
                  {item.para}
                </p>
              </div>
            ))}         
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
