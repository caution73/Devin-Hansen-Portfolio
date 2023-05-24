
export default function WebApp(props) {
  return (
    <div className="webAppCont">
      
        <h2>{props.title}</h2>
        <img src={props.url} alt={props.alt} className="webAppImg"/>
        <a href={props.deployLink} target="_blank" rel="noreferrer"><h4>Click here for the deployed app</h4></a>
        <a href={props.repoLink} target="_blank" rel="noreferrer"><h5>Click here for the app's repository.</h5></a>
        <p>{props.article}</p>
        <p>{props.tech}</p>
    
      
    </div>
  );
}
