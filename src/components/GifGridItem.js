const GifGridItem = ({title, id, url}) => {
  return(
    <div className="card animate__animated animate__fadeIn" style={{maxWidth: "200px", minWidth: "100px"}}>
      <img style={{backgroundSize: "cover", height:"200px"}} width="100%" src={url} alt={title}/>
      <p style={{padding:"0px 10px"}}>{title}</p>
    </div>
  );
}

export default GifGridItem;