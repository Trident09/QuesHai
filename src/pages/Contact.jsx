import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import React, { useState } from "react";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission logic here
		console.log({ name, email, message });
	};

	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-gray-900 text-white py-8">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl font-bold">Contact Us</h1>
				</div>
			</header>
			<main className="flex-grow py-12">
				<div className="container mx-auto px-4">
					<p className="text-lg mb-4">
						Have any questions or suggestions? Feel free to reach
						out to us!
					</p>
					<Box
						component="form"
						className="max-w-lg mx-auto"
						sx={{
							display: "grid",
							gap: 2,
							alignItems: "center",
							flexWrap: "wrap",
						}}
						onSubmit={handleSubmit}
					>
						<div>
							<label
								htmlFor="name"
								className="block text-lg font-semibold mb-2"
							>
								Your Name
							</label>
							<Input
								placeholder="Your Name"
								variant="outlined"
								color="primary"
								id="name"
								name="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-lg font-semibold mb-2"
							>
								Your Email
							</label>
							<Input
								placeholder="Your Email"
								variant="outlined"
								color="primary"
								id="email"
								name="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-lg font-semibold mb-2"
							>
								Your Message
							</label>
							<Textarea
								placeholder="Your Message"
								color="primary"
								minRows={2}
								variant="outlined"
								id="message"
								name="message"
								type="text"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Submit
						</button>
					</Box>
				</div>
			</main>
		</div>
	);
};

export default ContactUs;
