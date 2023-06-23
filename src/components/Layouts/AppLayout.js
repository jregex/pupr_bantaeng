import Footer from './Footer'
import Header from './Header'

const AppLayout = ({ children }) => {
    return (
        <div className="max-h-screen w-screen overflow-x-hidden">
            <Header />
            <main
                className="w-screen"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout
