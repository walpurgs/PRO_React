import "../../styles/index.scss"
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { MainPageLazy } from "../../pages/MainPage/MainPage.lazy"
import { AboutPageLazy } from "../../pages/AboutPage/AboutPage.lazy"
import { Suspense } from "react"
import { UseTheme } from "../../theme/useTheme"
import { classNames } from "../../helpers/classNames/classNames"

export const App = () => {
	const { theme, toggleTheme } = UseTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to="/">Главная</Link>
			<Link to="/about">О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPageLazy />} />
					<Route path="/about" element={<AboutPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}
