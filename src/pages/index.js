// import { useAuth } from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'
import axios from 'axios'

export default function Home(props) {
    // const { user } = useAuth({ middleware: 'guest' })
    // const user = props.users
    // console.log(user)
    return <AppLayout>{/*  */}</AppLayout>
}

// export async function getServerSideProps() {
//     const req = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`)
//     const res = await req.data.data

//     return {
//         props: {
//             users: res,
//         },
//     }
// }
