import Card from "./Card"

const Row = ({title,list}) => {
  return (
    <section>
          <div>
              {title && <h1>{title}</h1>}
        
              <ul>
                  {list?.map(movie => (
                      <Card data={movie} />
                  ))}
              </ul>
        
      </div>
    </section>
  )
}

export default Row
