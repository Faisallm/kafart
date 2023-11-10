import React from "react";
import "./Blog.css";
import CardComponent from "../../Components/Card/Card";
import Desert from "../../Components/BlogAssets/blog1.jpg";
import Circle from "../../Components/BlogAssets/Ellipse 1.svg";
import Card from "../../Components/Card/Card";
import WomanBacking from "../../Components/BlogAssets/blog2.jpg";
import BlackWoman from "../../Components/BlogAssets/blog3.png";
import Drums from "../../Components/BlogAssets/blog4.png";
import newblog1 from "../../Components/newBlogAssets/newblog1.png";
import newblog2 from "../../Components/newBlogAssets/newblog2.png";
import newblog3 from "../../Components/newBlogAssets/newblog3.png";
import newblog4 from "../../Components/newBlogAssets/newblog4.png";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-title">
        <div className="left-title">
          OUR BLOG <span>7</span>
        </div>
        <div className="right-title">
          MEET DESIGNERS, WRITERS AND ARTIST CHANGING THE NARRATION ON OTHER
          SIDE OF THE WORLD
        </div>
      </div>
      <div className="cards">
        <Card
          image={newblog1}
          title="HOW I WAS INSPIRED BY THE SAHARA"
          blob={Circle}
          name="GANEEYAT SANI"
        />
        <Card
          image={newblog2}
          title="LANGUAGE BARRIER"
          blob={Circle}
          name="IAN MACHARIA"
        />
        <Card
          image={newblog3}
          title="IN THE MAKING OF AN AFRICAN FASHION DESIGNDR"
          blob={Circle}
          name="OLADIMEJI ODUNSI"
        />
        <Card
          image={newblog4}
          title="LET THE DRUM TALK"
          blob={Circle}
          name="LUZ MENDOZA"
        />
      </div>
    </div>
  );
};

export default Blog;
