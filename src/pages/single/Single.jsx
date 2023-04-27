import Sidebar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/single post/SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}