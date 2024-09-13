import { useNavigate } from "react-router-dom";

import Button from "./Button";

function BackButton({ location = -1 }) {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(location);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
