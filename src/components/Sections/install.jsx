import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/images/projects/1.png";
import ProjectImg2 from "../../assets/images/projects/2.png";
import ProjectImg3 from "../../assets/images/projects/3.png";
import ProjectImg4 from "../../assets/images/projects/4.png";
import ProjectImg5 from "../../assets/images/projects/5.png";
import ProjectImg6 from "../../assets/images/projects/6.png";
import AddImage2 from "../../assets/images/ContractPub/add2.png";
import contact from "../../assets/images/Differtent/legal.png"
import pro from "../../assets/images/Differtent/Pro.png"
import MobileStoreButton from "react-mobile-store-button";

export default function Projects() {
    const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
  return (
    <Wrapper id="projects">
      <div className="">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper >
                  <img  src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <div>
                
            </div>
            <AddRight>
              <h2 className="font40 extraBold">Now and forever</h2>
              <p className="font12">
              First 3 created contracts are <span className="span-free">free</span> and you can<br/> use it <span className="span-free">forever</span>.All incoming contracts are always<br/> free.    
              </p>
              <div className="mt-5 sm:mt-4 sm:flex sm:justify-center lg:justify-start font40">
          <div className="rounded-md shadow">
            {/* <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a> */}
            <MobileStoreButton
              store="ios"
              url={iOSUrl}
              linkProps={{ title: "iOS Store Button" }}
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            {/* <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Live demo
                  </a> */}
            <MobileStoreButton
              store="android"
              url={iOSUrl}
              linkProps={{ title: "iOS Store Button" }}
            />
          </div>
        </div>
            </AddRight>
            
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
 
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -200px;
  marginLeft:20px;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 80%;
  padding: 0 15%;
  img {
    width: 77%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
