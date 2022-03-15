const Box=({title,items})=>{
    return(
        <div className="box">
                  <h3>{title}</h3>
                  <hr/>
                  <ul>
                      {items.map(x=><li key={x}>{x}</li>)}
                  </ul>
        </div>
    )
}

export default Box;