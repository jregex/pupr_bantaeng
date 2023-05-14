import Footer from './Footer'
import Header from './Header'

const AppLayout = ({ children }) => {
    return (
        <div className="max-h-screen w-screen">
            <Header />
            <main className="w-screen">{children}</main>
            <Footer />
        </div>
    )
}

export default AppLayout
