import { BsBook } from "react-icons/bs";

export default function AppBar() {
  return (
    <div className="bg-black py-2 px-4 flex items-center gap-2 ">
      <BsBook size="50px" className="text-pink-500" />
      <h1 className="text-pink-500 text-xl">Bookshelf </h1>
    </div>
  );
}
