import Card from '../UI/Card'


const Clublist = ({image, name, descr, socials}) => {
  return (
    <Card className="clublist">
        <div className="clublist__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{descr}</p>
        <div className="clublist__socials">
            {
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target="_blank" rel='noreffer noopener'>{icon}</a>
                })
            }
        </div>
    </Card>
  )
}

export default Clublist