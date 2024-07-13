
import {Button} from "../../../../components/ui/button"
import Link from "next/link"
import CallNavbar from "@/components/dashboard/callnavbar"
import NewBookForm from "@/components/dashboard/newbookform"

export default function Books(){
    
    return(
        <CallNavbar>
            <NewBookForm />
        </CallNavbar>
        
    )
}