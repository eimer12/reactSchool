import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	function restar() {
		if (count <= 0) return
		setCount(count => count - 1)
	}
	function sumar() {
		setCount(count => count + 1)
	}

	return (
		<div className="App">
			<h1 className="mt-5">Prueba de React</h1>
			<div className="border">
				<h3>{count}</h3>
				<div>
					<button onClick={sumar}>Sumar</button>
					<button onClick={restar}> Restar </button>
				</div>
			</div>
		</div>
	)
}

export default App
