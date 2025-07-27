import Button from "./Button";
import { basicFeatures, fontFeatures } from "../constants/availableFeatures";
import SelectButton from "./SelectButton";

function ButtonPannel(props) {
  const { isDark } = props;
  return (
    <>
      <div className="grid grid-rows-4 gap-2">
        <div className="grid grid-cols-4 gap-2">
          {basicFeatures.map((feature) => (
            <Button key={feature} isDark={isDark} btnText={feature}/>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {fontFeatures.map((feature) => (
            <SelectButton key={feature} isDark={isDark} btnText={feature}/>
          ))}
        </div>        
      </div>
    </>
  );
}

export default ButtonPannel;
