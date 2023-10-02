import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
///import styles from "./EmailVerifyStyles.css";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(false);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				
                const response = await fetch(`https://medantrikbackend.onrender.com/api/auth/${param.id}/verify/${param.token}`, { 
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
            }
                });
                if(response.ok){
				setValidUrl(true);
                }
			} catch (error) {
				console.log(error);
			} 
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
			{validUrl ? (
				<div >
					
					<h1>Email verified successfully</h1>
					<Link to="/signin">
						<button >sign in</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</>
	);
};

export default EmailVerify;
 