import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  backButton?: string;
}

const Header: React.FC<HeaderProps> = ({ backButton }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-full border-b border-gray-100 items-center py-5">
      <div className="pl-10">
        {backButton ? (
          <IconButton onClick={() => navigate(backButton, { replace: true })}>
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton>
            <PersonIcon fontSize="large" />
          </IconButton>
        )}
      </div>
      <Link to={"/"}>
        <img
          className="object-contain h-10"
          src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
          alt="tinder logo"
        />
      </Link>
      <div className="pr-10">
        <Link to={"/chats"}>
          <IconButton>
            <QuestionAnswerIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Header;
