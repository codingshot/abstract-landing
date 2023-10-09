import { useEffect } from "react";

const RedirectLinks = {
  "/telegram": "https://nearbuilders.com/tg-builders",
    "/register": "https://lu.ma/abstract",
          "/resources": "https://nearbuilders.com/abstraction",
            "/tg-keypom": "https://nearbuilders.com/tg-keypom",
            "/builddao": "https://nearbuilders.com/tg-builders",
            "/partner": "https://forms.gle/u7D4c1AKmT5Ta8a19",
"/design": "https://www.figma.com/file/8yC94X8seTrFA1x49FrbFa/Account-Abstraction-Hackathon?type=design&node-id=0%3A1&mode=design&t=cB0GbxJckqDUjEOH-1",


      
};

const Redirect = () => {
  useEffect(() => {
    const url = RedirectLinks[window.location.pathname.toLowerCase()];
    if (url) {
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  }, []);

  return <></>;
};
export default Redirect;