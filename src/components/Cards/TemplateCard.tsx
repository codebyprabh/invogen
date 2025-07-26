import { BadgePlus } from "lucide-react";

interface TemplateCardProps {
  title: string;
  thumb: string;
  label: string;
  onClick?: () => void;
}

const TempCard: React.FC<TemplateCardProps> = ({ title, thumb, label, onClick }) => {
  return (
    <div onClick={onClick} className="shadow rounded cursor-pointer transition hover:shadow-lg hover:scale-105">
      <div className="relative group">
        <img className="w-35 h-auto rounded-md" src={thumb} alt={`${title} thumbnail`} />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition rounded-md">
          <BadgePlus className="text-white text-4xl font-bold" />
        </div>
      </div>

      <h3 className="text-neutral-600 text-sm p-2">
        {title}
        <span className={`text-xs ml-2 font-bold float-right ${label === 'Free' ? 'text-green-800' : 'text-yellow-600'}`}>
          {label}
        </span>
      </h3>
    </div>
  );
};

export default TempCard;
