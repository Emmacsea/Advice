import style from './Advice.module.css'
import divider from '../assets/images/pattern-divider-desktop.svg'
import dice from '../assets/images/icon-dice.svg'

export default function Advice ({
    changeAdvice,
    
}){
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h3>Advice <span></span></h3>

                <p>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>

                <div className={style.divider}>
                                     <img src={divider} alt="" />
                  
                </div>

                <button className={style.button}><img onClick={changeAdvice} src={dice} alt="" /></button>

            </div>


        </div>
    )
}