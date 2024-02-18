import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="flex justify-between w-full border-b border-gray-100 items-center py-5">
      <div className="pl-10">
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      </div>
      <img
        className="object-contain h-10"
        src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
        alt="tinder logo"
      />
      <div className="pr-10">
        <IconButton>
          <QuestionAnswerIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
