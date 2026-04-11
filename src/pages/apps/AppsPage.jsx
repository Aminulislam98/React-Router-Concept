import React from "react";
import AppsHook from "../../hooks/AppsHook";
import AppCard from "../../Utilities/NavbarNavLink/AppCard";
import { Link } from "react-router";
import { FadeLoader } from "react-spinners";

const AppsPage = () => {
  const { apps, spinner } = AppsHook();
  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col justify-center items-center space-y-5  my-5">
      <h1 className="font-semibold text-3xl">All Apps</h1>
      {spinner ? (
        <div>
          <FadeLoader />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {apps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppsPage;
