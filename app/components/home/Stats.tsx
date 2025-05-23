import { useContext } from "react";
import { useTheme } from "./ThemeContext";
import { stats } from "../../constants";

const Stats = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section className="flexCenter flex-row flex-wrap sm:mb-20 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start items-center flex-row m-3"
        >
          <h1
            className={`font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {stat.value}
          </h1>
          <p
            className={`font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] uppercase ml-3 ${
              isDark ? "text-gradient" : "text-gradient1d"
            }`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
