import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // document.body.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
    console.log(pathname);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
