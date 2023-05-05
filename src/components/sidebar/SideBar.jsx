import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cates, setCates] = useState([]);
  useEffect(()=>{
    const getCates = async ()=>{
      const res = await axios.get("http://localhost:5500/api/category");
      setCates(res.data);
    }
    getCates();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://scontent.fsgn17-1.fna.fbcdn.net/v/t1.18169-9/20526243_335177186938171_262832646511591088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=qpEbgPqKDDcAX9bb7hQ&_nc_ht=scontent.fsgn17-1.fna&oh=00_AfA38cGH8Ox5LIOdIYz17qSSsIINm5Ng7T1lRBnKxgeTEQ&oe=6471BEA1"
          alt="About me Image"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cates.map(cate=>
            <Link to={`/?cate=${cate.name}`} className="link">
              <li className="sidebarListItem" key={cate._id}>{cate.name}</li>
            </Link>
          )}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}