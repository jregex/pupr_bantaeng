import Image from 'next/image'

const ApplicationLogo = () => (
    <Image
        src={require('assets/img/logo_dpupr.svg')}
        className="w-20 h-20"
        alt="Brand-logo"
    />
)

export default ApplicationLogo
