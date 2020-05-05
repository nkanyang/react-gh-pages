import React from "react";
import "./style.css";
import ShortHeader from "./shortheader";
import BlockTitle from "./blocktitle";
import BlogItem from "./blogitem";

function BlogCard(){
  return(
    <div className="info-card">
      <ShortHeader>Blog</ShortHeader>
      <div className="card__content">
        <div className="content__row--wrap">
          <BlogItem
            imagesrc="https://hades217.github.io/images/blog/blog_post_2_full.jpg"
            title="Melbourne top 10 parks"
            category="Travel"
            date="6-Dec-2020"
            href=""
          />
          <BlogItem
            imagesrc="https://hades217.github.io/images/blog/blog_post_2_full.jpg"
            title="One Framework,Every Device"
            category="jQuery"
            date="23-Nov-2020"
          />
          <BlogItem
            imagesrc="https://hades217.github.io/images/blog/blog_post_2_full.jpg"
            title="How To Keep Fit"
            category="Sports"
            date="8-Sep-2020"
          />
          <BlogItem
            imagesrc="https://hades217.github.io/images/blog/blog_post_2_full.jpg"
            title="Most Popular Website Layout"
            category="CSS"
            date="6-April-2020"
          />
          <BlogItem
            imagesrc="https://hades217.github.io/images/blog/blog_post_2_full.jpg"
            title="Work hard,Play harder"
            category="Life"
            date="14-Jan-2020"
          />
          <BlogItem
            imagesrc="https://hades217.github.io/images/blog/blog_post_2_full.jpg"
            title="Melbourne top 10 parks"
            category="HTML5"
            date="15-Dec-2020"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;