import React from "react";
import { useLocation } from "react-router-dom";
import "./BlogDetail.css";
import cardSmall from '../../Components/FashionPageAssets/fashion-small.png';

const BlogDetail = () => {
  const location = useLocation();
  const { title, image, name, image2 } = location.state;
  return (
    <div className="blog-detail">
      <div className="detail-title">
        <div>{title}</div>
        <p>By {name}</p>
        AUG 31, 2023
      </div>
      <div className="blog-body">
        <img src={image} alt="Main Image" />
        <div className="blogs-body">
          <div className="content">
            <div className="content-title">
              A Journey Through the Desert's Beauty
            </div>
            <div className="content-body">
              The Sahara Desert, with its endless stretches of golden sands and
              captivating landscapes, has long been a source of inspiration for
              artists, writers, and adventurers alike. Beyond its barren
              appearance, this vast expanse of North Africa offers a profound
              sense of wonder and creativity that transcends the ordinary. In
              this blog post, we'll embark on a journey to explore the boundless
              inspiration found within the Sahara.
            </div>
          </div>
          <div className="content">
            <div className="content-title">The Colors of the Desert</div>
            <div className="content-body">
              The Sahara is a painter's dream, boasting an ever-changing palette
              of colors. From the soft, ethereal hues of sunrise and sunset to
              the deep ochres and reds of the dunes, the desert's color spectrum
              is a constant source of inspiration. Artists have long been
              captivated by the interplay of light and shadow, the contrast of
              earthy tones against the bright blue sky, and the vibrant flora
              and fauna that thrive in this seemingly harsh environment.
            </div>
          </div>
          <div className="content">
            <div className="content-title">
              Nomadic Traditions and Craftsmanship
            </div>
            <div className="content-body">
              The Sahara is home to nomadic communities that have preserved
              their traditional way of life for centuries. Their rich culture,
              vibrant clothing, intricate jewelry, and handcrafted textiles are
              a testament to the resilience of human creativity. Many travelers
              find inspiration in the stories, artistry, and warm hospitality of
              the desert's indigenous people.
            </div>
          </div>
          <img src={image2} alt="Main Image" className="image2" />
          <div className="content">
            <div className="content-title">Conclusion</div>
            <div className="content-body">
              The Sahara is not merely a desert; it is a wellspring of
              inspiration for those who seek beauty in the unexpected. Its
              colors, traditions, night skies, natural formations, and
              tranquility have ignited the imagination of countless individuals
              across time and cultures. Whether you are an artist, a writer, a
              photographer, or simply a soul in search of inspiration, the
              Sahara invites you to embark on a transformative journey through
              its majestic landscapes and boundless creative energy. It is a
              testament to the enduring allure of the world's most iconic
              desert.
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-imager">
          <img style={{ width: "144px" }} src={cardSmall} alt="Card Image" />
        </div>
        <div className="person-details">
          <p>{name}</p>
          <span className="circle"> </span> BY {name}
        </div>
        <div className="card-button">View</div>
      </div>
    </div>
  );
};

export default BlogDetail;
