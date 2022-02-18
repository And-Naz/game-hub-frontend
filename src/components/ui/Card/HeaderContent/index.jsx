import style from "./style.module.css"

const HeaderContent = ({name}) =>{

    return (
       <div className={style['over-info']}>
           <div>
               <div>
                   <h4>{name}</h4>
                </div>
            </div>
        </div>
    )
}

export default HeaderContent