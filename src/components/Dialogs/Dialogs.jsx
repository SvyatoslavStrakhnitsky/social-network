import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems + '' + style.active}>
                    <div className={style.dialog}>
                        <NavLink to='/dialogs/1'>Света</NavLink>
                    </div>
                    <div className={style.dialog}>
                        <NavLink to='/dialogs/2'>Света</NavLink>
                    </div>
                    <div className={style.dialog}>
                        <NavLink to='/dialogs/3'>Света</NavLink>
                    </div>
                    <div className={style.dialog}>
                        <NavLink to='/dialogs/4'>Света</NavLink>
                    </div>
                </div>
                <div className={style.messages}>
                    <div className={style.message}>
                        Света
                    </div>
                    <div className={style.message}>
                        Света
                    </div>
                    <div className={style.message}>
                        Света
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;