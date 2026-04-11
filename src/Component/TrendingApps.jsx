import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
import AppCard from "../Utilities/NavbarNavLink/AppCard";
import { Link } from "react-router";
import { FadeLoader } from "react-spinners";

const TrendingApps = () => {
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
  //   fetching data with Loader
  //   const apps = useLoaderData();
  console.log("This is resData", apps);
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col justify-center items-center space-y-5">
      <h1 className="font-semibold text-3xl">Trending Apps</h1>
      {spinner ? (
        <div>
          <FadeLoader />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {apps.slice(0, 9).map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
          <div>
            <Link to={"/appsPage"} className="btn btn-accent text-white">
              View All apps
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingApps;
