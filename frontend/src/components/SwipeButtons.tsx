import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

const SwipeButtons = () => {
  return (
    <div className="flex fixed bottom-[5vh] justify-evenly w-full swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__repeat">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__repeat">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__repeat">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__repeat">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
