import React from "react";
import "./style.css";
import BlogCard from "./blogcard";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function PostDate({day,month}){
  return(
    <div className="post__date">
      <span className="day">{day}</span>
      <span className="month">{month}</span>
    </div>);
}

function BlogItem({imagesrc,category,title,date,href}){
  const d = new Date(date);
  // const itemID = d.getTime();
  const month = months[d.getMonth()];
  const day = d.getDate();
  return (
    <div className="blog__item" /*style={{order:itemID}}*/>
      <a href={href}><img height="204px" src={imagesrc}></img></a>      
      <a href="">{category}</a>
      <a href={href}><h4>{title}</h4></a>
      <PostDate day={day} month={month}/>
    </div>
  );
}

export default BlogItem;