import React from "react";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default AppLayout;
