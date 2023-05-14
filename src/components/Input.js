const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-sm border-slate-200 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
