const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-full font-semibold text-sm text-slate-800 tracking-widest hover:opacity-80 active:bg-sky-900 focus:outline-none focus:border-primary focus:ring ring-sky-300 disabled:opacity-25 transition shadow-lg shadow-sky-400 hover:shadow-sm active:shadow focus:shadow ease-in-out duration-300`}
        {...props}
    />
)

export default Button
