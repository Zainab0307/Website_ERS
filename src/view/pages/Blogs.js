import React from 'react'
import Careerhero from "../../components/Careerhero";
import Blogsimg from "../../assets/images/blogs-hero.png"
import FeaturedBlogs from '../../components/FeaturedBlogs';
function Blogs() {
  return (
    <>
     <Careerhero
        btnText={"Blogs"}
        Mainheading={"Want to be a part of <br /> An innovative team?"}
        subHeading={
          "We Offer An IT Guide To A Vast Variety Of Organizations Throughout The World. We Continue To Provide Strategic Value In The Days, Weeks & Years After The Launch Of The Product."
        }
        img={Blogsimg}
      />
      <FeaturedBlogs/>
    </>
  )
}

export default Blogs