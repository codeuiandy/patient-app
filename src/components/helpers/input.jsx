import "./input.css";
export const Input = ({
  type,
  placeholder,
  onChange,
  label,
  labelSize,
  labelMargin,
  inputSize,
  width,
}) => {
  return (
    <div id="appInputWrap">
      {label ? (
        <label
          style={{
            fontSize: labelSize ? labelSize : "",
            margin: labelMargin ? labelMargin : "",
          }}
          htmlFor=""
          className="appInputWrapLabel"
        >
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        onChange={onChange}
        style={{
          fontSize: inputSize ? inputSize : "",
          width: width ? width : "100%",
        }}
        className="appInputWrapInput"
      />
    </div>
  );
};

export const Select = ({
  onChange,
  label,
  labelSize,
  labelMargin,
  selectSize,
  defaultValue,
  options,
}) => {
  return (
    <div className="appInputWrap">
      {label ? (
        <label
          style={{
            fontSize: labelSize ? labelSize : "",
            margin: labelMargin ? labelMargin : "",
          }}
          htmlFor=""
          className="appInputWrapLabel"
        >
          {label}
        </label>
      ) : (
        ""
      )}
      <select
        onChange={onChange}
        style={{ fontSize: selectSize ? selectSize : "" }}
        className="appInputWrapInput"
      >
        <option value="">{`${defaultValue}`}</option>
        {options.map((data) => {
          return <option key={data}>{data}</option>;
        })}
      </select>
    </div>
  );
};
