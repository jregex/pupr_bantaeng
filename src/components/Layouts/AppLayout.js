import Footer from './Footer'
import Header from './Header'

const AppLayout = ({ children }) => {
    return (
        <div className="max-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default AppLayout
