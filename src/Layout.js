import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import PreLoader from "./components/PreLoader/PreLoader";

export default function Layout() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const delay = () => {
			const randomDelay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1 to 3 seconds
			setTimeout(() => {
				setIsLoading(false);
			}, randomDelay);
		};
		delay();
	}, []);

	return isLoading ? (
		<PreLoader />
	) : (
		<div className="body">
			<NavBar />
			<main className="mt-24 min-h-[95vh]">
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</div>
	);
}