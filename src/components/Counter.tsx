import { useState } from "react"
import cl from "./counter.module.scss"

export const Counter = () => {
	const [count, setCount] = useState<number>(0)
	return (
		<div className={cl.asd}>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>+</button>
		</div>
	)
}
