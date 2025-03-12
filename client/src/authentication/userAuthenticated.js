import React, { useEffect, useState } from "react";

const userAuthenticated = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const login = (e) => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log("User is logged in. Email:", email);
    } else {
      console.log("User is not logged in");
    }
  }, [isLoggedIn, email]);

  return { isLoggedIn, email, handleEmailInput, login, setEmail };
};

export default userAuthenticated;
