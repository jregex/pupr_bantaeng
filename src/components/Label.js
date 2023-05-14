const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block font-bold text-sm text-primary`}
        {...props}>
        {children}
    </label>
)

export default Label
