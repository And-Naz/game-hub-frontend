import logo from './logo.svg';
import './App.css';
import Image from './components/ui/Image';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Image src={logo} className="App-logo" alt="logo" />
			</header>
			<header className="App-header">
				<Image src={logo} alt="logo" size="small"/>
			</header>
			<header className="App-header">
				<Image src={logo} alt="logo" size="medium"/>
			</header>
			<header className="App-header">
				<Image src={logo} alt="logo" size="big"/>
			</header>
		</div>
	);
}

export default App;
