import MyWorks from "../assets/MyWorks";
import WebApp from "../components/WebApp";

export default function WebApps() {
    const apps = MyWorks[0]
    console.log(apps)
    return(
        <div>
            {apps?.webApps.map((app, idx) => {
                return(
                    <WebApp key={idx} {...app}/>
                )
            })}
        </div>
    )
}