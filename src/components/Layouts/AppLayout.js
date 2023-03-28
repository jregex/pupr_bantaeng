import Section from './Section'

const AppLayout = ({ children }) => {
    // const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="max-h-screen">
            {/* Page Heading */}
            <Section />

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
