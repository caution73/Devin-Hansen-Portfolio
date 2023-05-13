import { Link } from "react-router-dom"

export default function Nav() {
    const links = ["My work", "My skills", "My life"]
    return(
        <div className="nav">
            {links.map((link, i) => {
                return(
                    <Link to={`/${link}`}>
                        <div>
                            <h4>{link}</h4>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}