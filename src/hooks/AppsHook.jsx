import React, { useEffect, useState } from "react";

const AppsHook = () => {
  const [apps, setApps] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    const fetchFunction = async () => {
      const res = await fetch("/public/data.json");
      const resData = await res.json();
      setApps(resData);
      setSpinner(false);
    };
    fetchFunction();
  }, []);
  return { apps, spinner };
};

export default AppsHook;
