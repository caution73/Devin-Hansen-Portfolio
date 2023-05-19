
export default function Algo(props) {
    return (
      <div className="algoCont">
        
          <h2>{props.title}</h2>
          <img src={props.url} alt={props.alt} className="webAppImg"/>
          <a href={props.repoLink} target="_blank"><h5>Click here to see and use the code.</h5></a>
          <p>{props.article}</p>
          <p>{props.tech}</p>
      
        
      </div>
    );
  }
  