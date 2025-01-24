import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <h2 className="text-left text-6xl font-bold mb-6">Technologies</h2>
      <p className="text-left text-lg text-secondary mb-10">
        Here are some of the technologies I have worked with. </p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img src={technology.iconUrl} alt={technology.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
