import { Link } from "react-router-dom"
import { useState, setState} from 'react'

export default function Nav() {
    const [ open, setOpen ] = useState(false)
    const links = ["Home", "Qualifications", "About"]
    console.log(open)
    return(
        <div className="nav">
        {links.map((link, i) => {
                return(
                    <Link to={`/${link}`} className="navLink">
                        <div>
                            <h4 className="navLinkText">{link}</h4>
                        </div>
                    </Link>
                )})
                }
            
        </div>
    )
}