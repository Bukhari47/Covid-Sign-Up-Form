import React from "react";
import PageTitle from "../components/comon/headers/PageTitle";
import PageLink from "../components/homepage/PageLink";
function Homepage() {
  return (
    <>
      <PageTitle title={"Homepage"} subtitle={"Welcome to our website"} />
      <PageLink />
    </>
  );
}

export default Homepage;
