import { IconContext } from "react-icons/lib";

function IconElement({ name, icon }) {
  return (
    <a
      href={`https://www.${name}.com/`}
      className="px-1 lg:px-4 uppercase font-light hover:underline"
      target="_blank"
      rel="noreferrer"
    >
      <IconContext.Provider value={{ className: "hover:text-cyan-700" }}>
        {icon}
      </IconContext.Provider>
    </a>
  );
}

export default IconElement;
