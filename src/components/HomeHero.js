
function HomeHero(props) {
  return (
    <>
      <div className={props.cName}>
        {/* Thay img bằng video */}
        <video className="hero-video" src={props.heroVideo} autoPlay loop muted />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
