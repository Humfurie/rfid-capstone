const MyButton = (props:any) => {
    const {type, name, value, className, disabled, label, onClick} = props
    return (
        <>
        <button
        type={type}
        name={name}
        value={value}
        className={className}
        disabled={disabled}
        onClick={onClick}
        >
            {label}
        </button>
        </>
    );
}

export default MyButton;