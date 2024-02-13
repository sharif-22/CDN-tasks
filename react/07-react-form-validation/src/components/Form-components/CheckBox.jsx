import PropTypes from "prop-types";

const CheckBox = ({ width, name, desc, required }) => {
  return (
    <div className={`flex gap-2 px-3 ${width}`}>
      <input type="checkbox" name={name} id={name} required={required} />
      <label className="text-sm" htmlFor={name}>
        {desc}
        {required ? (
          <span className="text-pink-500 font-bold px-1">*</span>
        ) : (
          ""
        )}
      </label>
    </div>
  );
};

CheckBox.PropTypes = {
  width: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
};

export default CheckBox;
