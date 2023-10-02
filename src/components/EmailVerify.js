import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import styles from "./EmailVerifyStyles.css";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				
                const response = await fetch(`http://localhost:5000/api/auth/${param.id}/verify/${param.token}`, { 
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
            }
                });
                if(response.ok){
				setValidUrl(false);
                }
			} catch (error) {
				console.log(error);
				setValidUrl(true);
			} 
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
			{validUrl ? (
				<div className={styles.container}>
					
					<h1>Email verified successfully</h1>
					<Link to="/signin">
						<button className={styles.green_btn}>sign in</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</>
	);
};

export default EmailVerify;
 