import { BsBook } from "react-icons/bs";
import LinkButton from "../Components/LinkButton.js";

export default function AppBar() {
  return (
    <div className="bg-black py-2 px-4 flex items-center gap-2 ">
      <div className="flex flex-1 items-center gap-3">
        <BsBook size="50px" className="text-pink-500" />
        <h1 className="text-pink-500 text-xl">Bookshelf </h1>
      </div>
      <div>
        <LinkButton to="/client/src/App.tsx">Log in</LinkButton>
      </div>
    </div>
  );
}
