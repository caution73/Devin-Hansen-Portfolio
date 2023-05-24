import { Link } from "react-router-dom"
import { useState } from 'react'

export default function Nav() {
    const [ open ] = useState(false)
    console.log(open)
    return(
        <div className="nav">
             <Link to={`/`} className="navLink">
                        <div>
                            <h4 className="navLinkText">Home</h4>
                        </div>
                    </Link>
                    <Link to={`/qualifications`} className="navLink">
                        <div>
                            <h4 className="navLinkText">Qualifications</h4>
                        </div>
                    </Link>
                    <Link to={`/about`} className="navLink">
                        <div>
                            <h4 className="navLinkText">About</h4>
                        </div>
                    </Link>

        </div>
    )
}