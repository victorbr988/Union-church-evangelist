import { IconBaseProps, IconTree } from "react-icons/lib";

interface IFeaturesProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Features: React.FC<IFeaturesProps> = ({title, description, children}: IFeaturesProps) => {
  return (
    <div className="bg-blue-600 shadow-xl p-4 rounded-lg">
      {children}
      <h1 className="mt-4 text-xl font-semibold text-white ">{ title }</h1>
      <p className="mt-2 text-gray-300 ">{description}</p>
    </div>
  );
};
