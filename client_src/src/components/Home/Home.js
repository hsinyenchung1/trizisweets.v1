import React from 'react';
import Parallax from ".././Parallax/Parallax";
import SignatureCake from ".././SignatureCake/SignatureCake";
import Hr from ".././StatelessComponents/HrTag/Hr";
import QuickView from ".././QuickView/QuickView";


const Home = () => (
  <div>
    <Parallax />
    
    <div className="p-lr-60">
      <div className="center-align letter-space-2 p-t-30 p-b-20 font-size-40"> SIGNATURE CAKES </div>
      <div className="center-align letter-space-2 p-b-25 font-size-10">AVAILABLE WITHIN 4 DAYS.</div>
      <SignatureCake />
    </div>

    <Hr />
    

  </div>
)

export default Home;