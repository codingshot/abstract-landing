import { useEffect } from "react";

const RedirectLinks = {
  "/telegram": "https://nearbuilders.com/tg-builders",
    "/register": "https://lu.ma/abstract",
          "/manual": "https://banyan-collective.notion.site/Abstraction-Hacks-891925a561084df291ce43c136214921?pvs=4",
          "/resources": "https://docs.google.com/document/d/1e7o3l5d8AIZ-NZmdVclVqtGTOL4_KwOvNTio4Q5-mcM/edit?usp=sharing",
            "/tg-keypom": "https://nearbuilders.com/tg-keypom",
            "/builddao": "https://nearbuilders.com/tg-builders",
            "/partner": "https://forms.gle/u7D4c1AKmT5Ta8a19",
"/design": "https://www.figma.com/file/8yC94X8seTrFA1x49FrbFa/Account-Abstraction-Hackathon?type=design&node-id=0%3A1&mode=design&t=cB0GbxJckqDUjEOH-1",
"/budget": "https://docs.google.com/spreadsheets/d/1jNZYQwslDLhs3wRJgflUocDDCoNi7fOL5sJ8bz8tXD0/edit?usp=sharing",
"/nearcon-bounty": "https://docs.google.com/document/d/1Ls88ZkMpkWnw3WiZcVfZ4K8xP2VRlB3QL9h_ed1psls/edit?usp=sharing",
"/ideas-old": "https://docs.google.com/document/d/1itOxeKVt-Bpquykc-FCReN2A_yYutukHe2aGhBJJSRk/edit?usp=sharing",
"/ideas": "https://banyan-collective.notion.site/Ideas-Abstraction-2834780030d74af0ae0779e32baacff4?pvs=4",
"/nearcon-request": "https://near.social/#/devgovgigs.near/widget/gigs-board.pages.Post?id=1829",
"/hackbox": "https://docs.google.com/document/d/1eGia7yx9VPAMoLwugAemwW9Jem1KObMvuwc3c3LvfVs/edit?usp=sharing",
"/mintbase": "https://docs.google.com/document/d/1WG86jvDi2CmOC2lpi4vyh26EBqrxEPQqDLF9xL1Q0so/edit?usp=sharing",
"/evaluation-matrix": "https://banyan-collective.notion.site/Evaluation-Matrix-fd1a4aca397345259697c89db480d407?pvs=74",
"/hackbox-devhub": "https://near.social/devhub.near/widget/app?page=post&id=2529",
"/calendar": "https://calendar.google.com/calendar/u/0?cid=Y19mYzMzOTYwNTJlZmQyZTdhOWJkZDk5MWJjMTdjMzZjNDg4MTI3YzYwNGVjZWZhNzU1ZWRlN2Y5ZjU3ZGZhNGRmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20opens",
"/calandar": "https://calendar.google.com/calendar/u/0?cid=Y19mYzMzOTYwNTJlZmQyZTdhOWJkZDk5MWJjMTdjMzZjNDg4MTI3YzYwNGVjZWZhNzU1ZWRlN2Y5ZjU3ZGZhNGRmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20opens",
"/schedule": "https://calendar.google.com/calendar/u/0?cid=Y19mYzMzOTYwNTJlZmQyZTdhOWJkZDk5MWJjMTdjMzZjNDg4MTI3YzYwNGVjZWZhNzU1ZWRlN2Y5ZjU3ZGZhNGRmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
"/vbi": "https://docs.google.com/presentation/d/1KBFgbtRUCMS35OVduxAPBClSqdgatlkw50aWNvfcbsg/edit?usp=sharing",
"/kickoff": "https://youtu.be/vxrPyNHczgI",
"/potlock": "https://banyan-collective.notion.site/PotLock-Bounty-Twitter-x-Meme-Router-9bbcdd782fd64cc4b4358b6fafc25fc3?pvs=74",
"/keypom": "https://banyan-collective.notion.site/Keypom-1611b656913b4c6d89ef57f213465e83?pvs=74",
"/balkans": "https://banyan-collective.notion.site/NEAR-Balkans-3ea2e32fbf7e40e8a9d0b65de9021646?pvs=74",
"/mintbase": "https://banyan-collective.notion.site/Mintbase-b5ccac634f484935bfa775c17305d060?pvs=74",
"/metatransactions": "https://banyan-collective.notion.site/Metatransactions-635061e47c54424aada6ec5d775daef3?pvs=74",


      
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