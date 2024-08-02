import "./styles/index.scss"
import { useTheme } from "./providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import { Suspense } from "react"


export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<main className="content-page">
					<Sidebar />
					<AppRouter />
				</main>
			</Suspense>
		</div>
	)
}
