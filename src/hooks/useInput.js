import { useState, useEffect } from "react";
import { validate as emailValidator } from "email-validator";
import passwordValidator from "password-validator";

const schema = new passwordValidator();
schema.is().min(6).is().max(100).has().not().spaces();

const useInput = (type, checkValidity = false) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (type === "email")
        checkEmailValidity(enteredValue, errorMessage, setErrorMessage);
      else if (type === "password" && checkValidity)
        checkPasswordValidity(enteredValue, errorMessage, setErrorMessage);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [enteredValue, errorMessage, checkValidity, type]);

  const valueChangeHandler = (value) => {
    setEnteredValue(value);
  };

  return {
    enteredValue,
    errorMessage,
    valueChangeHandler,
  };
};

const checkEmailValidity = (enteredValue, errorMessage, setErrorMessage) => {
  if (!emailValidator(enteredValue) && enteredValue)
    setErrorMessage("Please enter a valid email address");
  else if (!enteredValue && errorMessage)
    setErrorMessage("Please enter a valid email address");
  else setErrorMessage("");
};

const checkPasswordValidity = (enteredValue, errorMessage, setErrorMessage) => {
  const checkedResults = schema.validate(enteredValue, { details: true });

  const message = checkedResults.length ? checkedResults[0]?.message : "";

  if (message && enteredValue) setErrorMessage(message);
  else if (!enteredValue && errorMessage) setErrorMessage(message);
  else setErrorMessage("");
};

export default useInput;
