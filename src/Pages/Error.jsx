import React from "react";
import { useRouteError } from "react-router";
import ErrorPage from "./ErrorPage";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return <ErrorPage></ErrorPage>;
};

export default Error;
