import { useEffect } from "react";

const RedirectLinks = {
  "/telegram": "https://nearbuilders.com/tg-builders",
    "/register": "https://lu.ma/abstract",
          "/manual": "https://nearbuilders.com/abstraction",
          "/resources": "https://docs.google.com/document/d/1e7o3l5d8AIZ-NZmdVclVqtGTOL4_KwOvNTio4Q5-mcM/edit?usp=sharing",
            "/tg-keypom": "https://nearbuilders.com/tg-keypom",
            "/builddao": "https://nearbuilders.com/tg-builders",
            "/partner": "https://forms.gle/u7D4c1AKmT5Ta8a19",
"/design": "https://www.figma.com/file/8yC94X8seTrFA1x49FrbFa/Account-Abstraction-Hackathon?type=design&node-id=0%3A1&mode=design&t=cB0GbxJckqDUjEOH-1",
"/budget": "https://docs.google.com/spreadsheets/d/1jNZYQwslDLhs3wRJgflUocDDCoNi7fOL5sJ8bz8tXD0/edit?usp=sharing",
"/nearcon-bounty": "https://docs.google.com/document/d/1Ls88ZkMpkWnw3WiZcVfZ4K8xP2VRlB3QL9h_ed1psls/edit?usp=sharing",
"/ideas": "https://docs.google.com/document/d/1itOxeKVt-Bpquykc-FCReN2A_yYutukHe2aGhBJJSRk/edit?usp=sharing",


      
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