import React from "react";
import styled from "styled-components";
 
//*Image contracts
import nda from "../../assets/images/Contracts/NDA.jpg"
import cdi from "../../assets/images/Contracts/CDI_CDD_CIVP.jpg"
import freelance from "../../assets/images/Contracts/Freelance.jpg"
import carrental from "../../assets/images/Contracts/Car rental copie.jpg"
import houseRental from "../../assets/images/Contracts/Rental real estate .jpg"
import Referral from "../../assets/images/Contracts/PRet numerique .jpg"
import pret from "../../assets/images/Contracts/Contrat de pret .jpg"
import assurance from "../../assets/images/Contracts/Assurance Voyage.jpg"
import carbuy from "../../assets/images/Contracts/car buying.jpg"
import certificate from "../../assets/images/Contracts/certificate.jpg"
import devis from "../../assets/images/Contracts/Facture_Devis.jpg"
import partenariat from "../../assets/images/Contracts/Partnerariat .jpg"
import promise from "../../assets/images/Contracts/Promise of lease promesse de bail .jpg"
import salepurchase from "../../assets/images/Contracts/SALE_PURCHASE CONTRACT.jpg"
import vente from "../../assets/images/Contracts/Vente real estate .jpg"
import carbying from "../../assets/images/Contracts/car buying.jpg"
import domiciliation from "../../assets/images/Contracts/domiciliation.jpg"
import "./Card.css";
const Data = [
  {
    imageUrl: [nda],
    title: "NDA",
    description: "Protect your Business, ideas and future projects !",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [cdi],
    title: "CDI, CDD, CIVP",
    description: "Keep your business and work safe with E-Tafakna.",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [freelance],
    title: "Freelancer",
    description: "Give your side hustle some protection !",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [carrental],
    title: "Freelance",
    description: "Give your side hustle some protection !",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [houseRental],
    title: "Car rental",
    description: "It’s safer to rent or buy a car with E-Tafakna",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [Referral],
    title: "vente de voiture",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [pret],
    title: "location de biens immobilier",
    description: "Rent your room, apartment or house with E-Tafakna",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl:[assurance],
    title: "Contrat de location",
    description: "refref",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [carbuy],
    title: "Contrat de référencement",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [certificate],
    title: "Contrat de vente",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [devis],
    title: "Contrat d’engagement",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [partenariat],
    title: "CV",
    description: "Didn&#39;t find the right template to fill ? E-Tafakna.",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl:[promise],
    title: "Contrat de partenariat",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [salepurchase],
    title: "Devis/Facture",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [vente],
    title: "House rental agreement",
    description: "Rent your room, apartment or house with E-Tafakna",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl: [carbying],
    title: "Demande officielle",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
    time: "2 min",
    signed: "2380 signed",
  },
  {
    imageUrl:[domiciliation],
    title: "Contrat de Prêt numéraire",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
    time: "2 min",
    signed: "2380 signed",
  },
  //**TODO {
  //   imageUrl: [],
  //   title: "Contrat d’achat",
  //   description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
  //   time: "2 min",
  //   signed: "2380 signed",
  // },
  // {
  //   imageUrl: [],
  //   title: "Contrat de Domiciliation",
  //   description: "Vivamus suscipit tortor eget felis porttitor volutpat.er",
  //   time: "2 min",
  //   signed: "2380 signed",
  //**TODO },
];
const Cards = () => {
  return (
    <Wrapper id="projects ">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-20">
              Contracts for all kinds of life situations
            </h1>
          </HeaderInfo>
          <div className="row ">
            {Data.map((elem, index) => {
              return (
                <div className="card-container">
                  <div className="image-container">
                    <img src={elem.imageUrl} alt="" />
                  </div>
                  <div className="cont">
                    <div className="card-content">
                      <div className="card-title">
                        <h1 className="font">{elem.title}</h1>
                      </div>
                      <div className="card-body">
                        <p className="descripti">{elem.description}</p>
                      </div>
                    </div>

                    <div className="row texto">
                      <p href="" className="text">
                        {elem.time}
                      </p>

                      <p href="" className="text">
                        {elem.signed}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

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
  top: -300px;
  left: 0;
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
  width: 100%;
  padding: 0 15%;
  img {
    width: 77%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
export default Cards;
//     <div className="body">
//       {console.log(Data)}
//       {Data.map((elem, key) => {
//         return (
//           <div className="card-container">
//             <div className="image-container">
//               <img src={elem.imageUrl} alt="" />
//             </div>
//             <div className="card-content">
//               <div className="card-title">
//                 <Card.Title>{elem.title}</Card.Title>
//               </div>
//               <div className="card-body">
//                 <p>{elem.description}</p>
//               </div>
//             </div>

//             <div className="btn">
//               <button>
//                 <a href="">View more</a>
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;
