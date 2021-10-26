export const Input = ({
  type,
  placeholder,
  onChange,
  label,
  labelSize,
  labelMargin,
  inputSize,
}) => {
  return (
    <div className="appInputWrap">
      {label ? (
        <label
          style={{
            fontSize: labelSize ? labelSize : '',
            margin: labelMargin ? labelMargin : '',
          }}
          htmlFor=""
        >
          {label}
        </label>
      ) : (
        ''
      )}
      <input
        type={type ? type : 'text'}
        placeholder={placeholder ? placeholder : ''}
        onChange={onChange}
        style={{ fontSize: inputSize ? inputSize : '' }}
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
            fontSize: labelSize ? labelSize : '',
            margin: labelMargin ? labelMargin : '',
          }}
          htmlFor=""
        >
          {label}
        </label>
      ) : (
        ''
      )}
      <select onChange={onChange} style={{ fontSize: selectSize ? selectSize : '' }}>
        <option value="">{`${defaultValue}`}</option>
        {options.map((data) => {
          return <option key={data}>{data}</option>;
        })}
      </select>
    </div>
  );
};
