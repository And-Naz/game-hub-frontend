import style from "./style.css"

const HeaderContent = ({name}) =>{

    return (
       <div className="over-info">
           <div>
               <div>
                   <h4>{name}</h4>
                </div>
            </div>
        </div>
    )
}

export default HeaderContent