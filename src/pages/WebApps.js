import { webApps } from "../assets/MyWorks"

export default function WebApps() {
    const apps = webApps
    console.log(webApps)
    return(
        <div>
            <h4>Here's the webapps page</h4>
            {/* {apps.map((webApp) => {
                return(
                    <div>
                        {webApp.title}
                    </div>
                )
            })} */}
        </div>
    )
}