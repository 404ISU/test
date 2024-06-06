import React from "react"
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return(

  <header className="container flex items-center justify-between h-16 px-4 mx-auto rounded dark:bg-gray-50">
			<a rel="noopener noreferrer" href="#" aria-label="Homepage">
					<img className="w-24 h-5 dark:text-violet-600" src="https://www.tatais.ru/images/logo.png" alt="" />

			</a>
			<div className="items-center hidden space-x-8 lg:flex">
				<div className="space-x-4">

					<NavLink to='/hero'>Главная</NavLink>
					<NavLink to='/catalog'>Каталог</NavLink>
					<NavLink to='/admin'>Админ панель</NavLink>
				</div>
				<button className="px-4 py-2 rounded-md dark:bg-violet-600 dark:text-gray-50"><NavLink to='/auth'>Войти</NavLink></button>
			</div>
			<button className="flex items-center justify-center p-2 lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-900">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</header>
  )
}
