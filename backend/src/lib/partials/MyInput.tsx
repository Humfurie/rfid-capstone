const MyInput = (props:any) => {
    const {type, disabled, name, key, value, className, onChange} = props
    return (
        <>
        <input 
        type={type}
        disabled={disabled}
        name={name}
        id={key}
        value={value}
        className={className}
        onChange={onChange}
         />
        </>
    );
}

export default MyInput;