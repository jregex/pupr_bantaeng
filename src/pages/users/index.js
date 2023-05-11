import React from 'react'

function User() {
    return (
        <div>
            <h1>Selamat Datang</h1>
            {/* {users.map((item,index)=>{
           return (
            <p className='text-lg text-amber-900' key={item.id}>{item.name}</p>
           )
        })} */}
        </div>
    )
}

// export async function getServerSideProps() {
//     const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`)
//     const users = await req.json()
//     return {
//         props: {
//             users:users.data,
//         },
//     }
// }

export default User
