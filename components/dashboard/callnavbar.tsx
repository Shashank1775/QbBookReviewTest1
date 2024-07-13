import Nav from "./navbar";

export default function CallNavbar({children}:{children:React.ReactNode}){
    return(
    <div className='bg-red-50 w-screen h-screen text-black flex'>
        <Nav/>
        <div>
            {children}
        </div>
    </div>
    )
}