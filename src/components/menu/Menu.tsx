import { FormEvent, useState } from 'react';
import Button from '../../GeneralComponents/Button';
import s from './menu.module.css'; 
export default function Menu() {
    const [openModal, setOpenModal] = useState(false);

    const openModalBerry = () => {
        setOpenModal(true);
    }

    const saveBerry = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;     
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        if(localStorage.getItem('berryList')) {
            const getList = JSON.parse(localStorage.getItem('berryList')!);
            localStorage.setItem('berryList', JSON.stringify([...getList, data]));
            form.reset();
            setOpenModal(false);
            return;
        }
        localStorage.setItem('berryList', JSON.stringify([data]));
        form.reset();
        setOpenModal(false);
    }

    return(
        <>
        <header className={s.header}>
            <div className='container'>
                <div className={s.contentContainer}>
                    <p>Стрtk</p>
                <Button type='button' func={openModalBerry} text='Добавить ягоду' styleB={s.button} styleContainerButton={s.bContainer} />
                
                <p className={s.menu}>Меню</p>
                </div>
            </div>
        </header>
                <p className={s.all}>Всего: 0</p>
                {openModal && <div className={`${s.modalBerry}`} >
                    <form onSubmit={saveBerry} className={s.formBerry}>

                        <input type='text' name='title' placeholder='Title' />
                        <input type="number" name='order' placeholder='Order' />
                        <input type='number' name='kwitne' placeholder='Kwitne' />
                        <input type='number' name='rc' placeholder='Rc' />
                        <input type='number' name='workers' placeholder='Workers' />
                        <input type='number' name='pinets' id="last" placeholder='Pinets' />
                        <textarea name='comment' placeholder='comment' />

                        <Button type='submit' styleB={s.saveButton} styleContainerButton='' text='Save' />
                    </form>
                </div>}
                
        </>
    )
};
