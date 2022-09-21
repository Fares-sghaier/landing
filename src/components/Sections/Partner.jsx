import { clients } from "../../constants";
import styles from "../../style";

const Partner = () => (
  <div>
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-2`}>
      <h4 className="font-poppins font-semibold xs:text-[30.70px] text-[15.60px] xs:leading-[30.16px] leading-[20.16px] text-black">
        Approved by Tunisian regulators and financial institutions
      </h4>
    </div>
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Partner;
