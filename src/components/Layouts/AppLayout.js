import Header from './Header'
import Section from './Section'

const AppLayout = ({ children }) => {
    return (
        <div className="max-h-screen">
            <Header />            
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
