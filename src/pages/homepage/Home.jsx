import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/SideBar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(()=>{
    const getPosts = async ()=>{
      const res = await axios.get("http://localhost:5500/api/post" + search);
      setPosts(res.data);
    }
    getPosts();
  },[search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
