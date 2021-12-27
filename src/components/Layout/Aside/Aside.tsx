import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchTypes } from "../../../store/actionCreators/typesAC";
import s from './Aside.module.scss';

const Aside = () => {
   const dispatch = useAppDispatch();

   const { isLoading, types } = useTypedSelector(state => state.types)

   useEffect(() => {
      dispatch(fetchTypes());
   }, [])

   return (
      <aside className={s.aside}>
         <nav className={s.nav_col}>
            <ul className={s.nav_list}>
               {isLoading
                  ? <div className={s.loader}>Загрузка...</div>
                  : types
                     ? types.map(({ id, name }) => (
                        <li className={s.nav_item} key={id}>
                           <Link to={`/catalog?typeId=${id}`}>
                              <span>{name}</span>
                           </Link>
                        </li>
                     ))
                     : null}
            </ul>
         </nav>
      </aside>
   )
}

export default Aside
