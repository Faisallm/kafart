import React from "react";
import "./Artist.css";
import Artist1 from "../../Components/ArtistAssets/artist1.jpg";
import Artist2 from "../../Components/ArtistAssets/artist2.jpg";
import Artist3 from "../../Components/ArtistAssets/artist3.jpg";
import Artist4 from "../../Components/ArtistAssets/artist4.jpg";
import Artist5 from "../../Components/ArtistAssets/artist5.jpg";
import TwoImage from "../../Components/TwoImage/TwoImage";
import OneImage from "../../Components/OneImage/OneImage";

const Artist = () => {
  return (
    <div className="artist">
      <TwoImage
        fashion1={Artist1}
        fashion2={Artist2}
        name1="IMRAN TILDE"
        name2="NEW PHASE"
        name3="ABDULRAZAQ AHMED"
        name4="KNOWMADS"
      />
      <OneImage
        fashion1={Artist3}
        name1="ALMOGERA ABDALBAGEA"
        name2="SARINA WEAR"
      />
      <TwoImage
        fashion1={Artist4}
        fashion2={Artist5}
        name1="SALI SAMORA"
        name2="SARINA WEAR"
        name3="SALI SAMORA"
        name4="SARINA WEAR"
      />
    </div>
  );
};

export default Artist;
