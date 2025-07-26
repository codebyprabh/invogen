import mktlogo from "../../assets/marketplace-logo.png";
import { X } from "lucide-react";
import TempCard from "../Cards/TemplateCard";
import invTempThumbL from "../../assets/inv-temp-01-light.png";
import invTempThumbD from "../../assets/inv-temp-01-dark.png";

interface MarketPlaceProps{
  onClose: () => void
  onTemplateSelect:(template: {title:string; file:string}) => void
}

const MarketPlace: React.FC<MarketPlaceProps> = ({ onClose, onTemplateSelect }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-neutral-200/25 z-50 backdrop-blur-sm
"
    >
      <div className="overflow-y-auto w-95 h-125 bg-white rounded md:w-185 ">
        <X
          className="float-right cursor-pointer text-neutral-500 mt-3 mr-3 transition-transform duration-200 hover:scale-115 hover:text-red-700"
          onClick={onClose}
        />

        <div className="flex items-start w-full gap-3 pl-6 pt-0 pb-5 shadow leading-none">
          <img className="w-15" src={mktlogo} alt="Marketplace Logo" />
          <div className="pt-2 text-neutral-500">
            <h1 className="text-2xl font-bold">Invoice-Bay</h1>
            <h3 className="">Invoice Template Marketplace</h3>
          </div>
        </div>
        
        <div className="flex justify-start gap-6 m-8 flex-wrap">
          <TempCard title="Classic Light" thumb={invTempThumbL} label="Free"
          onClick={() => {
            onTemplateSelect({
              title:"Classic Light",
              file: "templates/classic-template.docx"
            })
            onClose();
          }}
          />
          <TempCard title="Classic Dark" thumb={invTempThumbD} label="Paid" 
          onClick={() => {
            onTemplateSelect({
              title:"Classic Dark",
              file: "templates/classic-template.docx"
            })
            onClose();
          }}
          />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
