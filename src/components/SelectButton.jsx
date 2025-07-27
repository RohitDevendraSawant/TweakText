import { fontListMap } from "../constants/fontOptions";

function SelectButton(props) {
    const {isDark, btnText} = props;
    return (
        <>
            <div className="flex gap-5 items-center`">
                <label className={`${isDark ? 'bg-gray-900 text-white' : 'bg-black text-white'} text-center p-3 rounded-xl`}>{btnText}</label>
                <select className={`${isDark ? 'bg-gray-900 text-white' : 'bg-black text-white'} text-center p-3 rounded-xl w-30`}>
                    {fontListMap[btnText].map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

            </div>
        </>
    );
}

export default SelectButton;