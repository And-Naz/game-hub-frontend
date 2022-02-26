import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../ui/Button";

function AfterSignIn() {
	const { logout } = useAuth()
	const navigate = useNavigate()
	return (
		<div className='navbar-login-form'>
			<div className='authorized-section'>
				<Button onClick={() => navigate("/profile")} type='button' buttonSize='btn-small'>Profile Page</Button>
				<Button onClick={logout} type='button' buttonSize='btn-small'>Log Out</Button>
			</div>
		</div>
	);
}

export default AfterSignIn;