import styles, { layout } from "../styles";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row gap-4 feature-card py-6 px-2 rounded-[20px] items-center justify-evenly`}>
    <div className=" w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center">
      <img src={icon} className=" w-[50%] h-[50%] object-contain" />
    </div>
    <div className=" flex-1 flex flex-col">
      <h2 className=" font-poppins text-white text-[18px] font-semibold">{title}</h2>
      <p className=" text-[16px] text-dimWhite font-normal">{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={` grid md:grid-cols-2 grid-cols-1 sm:mt-0 mt-20  justify-items-center`}>
      <div className="flex flex-col items-start justify-center">
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:flex hidden" />
          we’ll handle the money.
        </h2>
        <p className={` text-white/75 max-w-[490px] mt-4 ${styles.paragraph}`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button style={"mt-4"} />
      </div>
      <div className=" md:mt-0 mt-10 flex flex-col justify-center items-center">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      
    </section>
  );
};

export default Business;
