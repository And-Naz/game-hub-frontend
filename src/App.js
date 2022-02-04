import logo300x200 from './assets/images/300x200.jpg';
import logo500x375 from './assets/images/500x375.jpg';
import logo1400x775 from './assets/images/1400x775.jpg';
import './assets/css/App.css';
import Image from './components/ui/Image';

function App() {
	return (
		<div className="app">
			<header>
				<Image src={logo300x200} alt="logo 300x200" size="small"/>
			</header>
			<header>
				<Image src={logo500x375} alt="logo 500x375" size="medium"/>
			</header>
			<header>
				<Image src={logo1400x775} alt="logo 1400x775" size="big"/>
			</header>
		</div>
	);
}

export default App;
