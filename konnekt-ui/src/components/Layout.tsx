import { ReactNode } from "react";
import { Dashboard } from "./Dashboard";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter();
  const hideSidebarRoutes = ["/auth/login", "/auth/signup"];

  const isCurrentPathHideSidebar = hideSidebarRoutes.includes(pathname);
  if (isCurrentPathHideSidebar) {
    return children;
  }
  return (
    <>
      <Dashboard children={children} />
    </>
  );
};

export default Layout;
