import { Link } from "react-router-dom"

export default function Nav() {
    const links = ["Home", "Qualifications", "About"]
    return(
        <div className="nav">
            {links.map((link, i) => {
                return(
                    <Link to={`/${link}`} className="navLink">
                        <div>
                            <h4>{link}</h4>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}