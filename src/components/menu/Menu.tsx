import Button from '../../GeneralComponents/Button';
import s from './menu.module.css'; 
export default function Menu() {
    return(
        <>
        <header className={s.header}>
            <div className='container'>
                <div className={s.contentContainer}>
                    <p>Стрtk</p>
                <Button text='Добавить ягоду' styleB={s.button} styleContainerButton={s.bContainer} />
                <p className={s.menu}>Меню</p>
                </div>
            </div>
        </header>
                <p className={s.all}>Всего: 0</p>
        </>
    )
};
