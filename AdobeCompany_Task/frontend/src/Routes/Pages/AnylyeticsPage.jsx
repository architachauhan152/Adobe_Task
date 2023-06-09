import React, {useState} from "react";
import UserAnaylytics from "../../components/UserAnaylytics";
import ActiveUser from "../../components/ActiveUser";
import PostCount from "../../components/PostCount";
import MostLikedPost from "../../components/MostLikedPost";

const AnylyeticsPage = () => {
  let [selectedSection, setselectedSection] = useState(true);

  return (
    <div>
      <div className="flex justify-between w-1/2 m-auto mt-4 border-b-2 pb-4  border-gray-100">
        <h2
          onClick={() => setselectedSection(true)}
          className={
            !selectedSection
              ? "text-gray-500 text-xl p-4  font-medium title-font cursor-pointer text-center"
              : "text-black text-xl  font-medium title-font cursor-pointer  p-4  bg-gray-200  text-center"
          }
        >
          User Anylyetics
        </h2>
        <h2
          onClick={() => setselectedSection(false)}
          className={
            selectedSection
              ? "text-gray-500 text-xl  font-medium title-font cursor-pointer p-4  text-center"
              : "text-black  text-xl  font-medium title-font cursor-pointer  bg-gray-200  p-4  text-center"
          }
        >
          Post Anylyetics
        </h2>
      </div>

      {selectedSection ? "User" : "post"}

      {selectedSection ? (
        <div className="flex justify-evelny w-11/12 ">
          <UserAnaylytics />
          <ActiveUser />
        </div>
      ) : (
        <div className="flex justify-evelny w-11/12 ">
        <PostCount />
        <MostLikedPost />
      </div>
      )}
    </div>
  );
};

export default AnylyeticsPage;
