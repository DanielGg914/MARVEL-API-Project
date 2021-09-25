import CharacterList from "../pages/CharacterList";
import ComicsList from "../pages/ComicsList";
import EventList from "../pages/EventList";


export const links = [
  {
    id: 1,
    url: "/characters",
    text: "characters",
    page: <CharacterList />,
  },
  {
    id: 2,
    url: "/comics",
    text: "comics",
    page: <ComicsList />,
  },
  {
    id: 3,
    url: "/events",
    text: "events",
    page: <EventList />,
  },
];
