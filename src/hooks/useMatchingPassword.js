import { useEffect, useState } from "react";

const useMatchingPassword = () => {
  const [matchingPassword, setMatchingPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [mainPassword, setMainPassword] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (matchingPassword !== mainPassword && matchingPassword)
        setErrorMessage("Passwords do not match");
      else if (!matchingPassword && errorMessage)
        setErrorMessage("Passwords do not match");
      else setErrorMessage("");
    }, 500);

    return () => clearTimeout(timerId);
  }, [matchingPassword, mainPassword, errorMessage]);

  const valueChangeHandler = (value) => {
    setMatchingPassword(value);
  };

  const mainPasswordHandler = (value) => {
    setMainPassword(value);
  };

  return {
    errorMessage,
    valueChangeHandler,
    matchingPassword,
    mainPasswordHandler,
  };
};

export default useMatchingPassword;
