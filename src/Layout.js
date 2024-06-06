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
			setTimeout(() => {
				setIsLoading(false);
			}, 1650);
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