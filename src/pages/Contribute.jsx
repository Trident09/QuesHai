import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Courses } from "../assets/Data";

const Contribute = () => {
	const [name, setName] = useState("");
	const [batch, setBatch] = useState("");
	const [course, setCourse] = useState(Courses[0]?.course || ""); // Setting initial course
	const [semester, setSemester] = useState(1); // Setting initial semester
	const [subject, setSubject] = useState("");
	const [link, setLink] = useState("");
	const [modalOpen, setModalOpen] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission logic here
		console.log({ name, batch, course, semester, subject, link });
	};

	const semesters = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

	const validateBatch = (value) => {
		const regex = /^\d{4}-\d{4}$/;
		const [start, end] = value.split("-").map(Number);
		return regex.test(value) && end - start === 1;
	};

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<div className="min-h-screen flex flex-col">
            <header className="bg-gray-900 text-white py-8">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl font-bold">Contribute</h1>
				</div>
			</header>
			<main className="flex-grow py-12">
				<div className="container mx-auto px-4">
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
								Name
							</label>
							<Input
								type="text"
								placeholder="Name"
								variant="outlined"
								color="primary"
								id="name"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="batch"
								className="block text-lg font-semibold mb-2"
							>
								Batch Year
							</label>
							<Input
								type="text"
								placeholder="Batch Year (e.g., 2023-2024)"
								variant="outlined"
								color="primary"
								id="batch"
								name="batch"
								value={batch}
								onChange={(e) => setBatch(e.target.value)}
								error={batch && !validateBatch(batch)}
								helperText={
									batch && !validateBatch(batch)
										? "Invalid batch year format"
										: ""
								}
							/>
						</div>
						<div>
							<label
								htmlFor="course"
								className="block text-lg font-semibold mb-2"
							>
								Course
							</label>
							<Autocomplete
								disablePortal
								id="course"
								options={Courses.map((course) => course.course)}
								renderInput={(params) => (
									<TextField
										{...params}
										variant="outlined"
										color="primary"
									/>
								)}
								value={course}
								onChange={(event, newValue) =>
									setCourse(newValue)
								}
							/>
						</div>
						<div>
							<label
								htmlFor="semester"
								className="block text-lg font-semibold mb-2"
							>
								Semester
							</label>
							<Autocomplete
								disablePortal
								id="semester"
								options={semesters}
								renderInput={(params) => (
									<TextField
										{...params}
										color="primary"
										variant="outlined"
									/>
								)}
								value={semester}
								onChange={(event, newValue) =>
									setSemester(newValue)
								}
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="block text-lg font-semibold mb-2"
							>
								Subject
							</label>
							<Input
								type="text"
								placeholder="Subject (with code)"
								variant="outlined"
								color="primary"
								id="subject"
								name="subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="link"
								className="block text-lg font-semibold mb-2"
							>
								Google Drive Link
							</label>
							<div className="flex items-center">
								<Input
									type="url"
									placeholder="Google Drive Link"
									variant="outlined"
									color="primary"
									id="link"
									name="link"
									value={link}
									onChange={(e) => setLink(e.target.value)}
								/>
								<Button
									variant="contained"
									onClick={handleOpenModal}
									sx={{ ml: 2 }}
								>
									How to Upload?
								</Button>
							</div>
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
			<Modal
				open={modalOpen}
				onClose={handleCloseModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "white",
						border: "2px solid #000",
						boxShadow: 24,
						p: 4,
					}}
				>
					<Typography
						variant="h6"
						component="h2"
						sx={{ textAlign: "center", mb: 2 }}
					>
						Uploading Question Papers to Google Drive
					</Typography>
					<Typography
						sx={{ textAlign: "left" }}
						id="modal-modal-description"
					>
						<ol
							style={{
								paddingLeft: "20px",
								textAlign: "justify",
							}}
						>
							<li>Sign in to your Google account.</li>
							<li>
								Click on the "New" button and select "File
								upload".
							</li>
							<li>
								Select the question paper file from your
								computer and upload it to Google Drive.
							</li>
							<li>
								Once the file is uploaded, right-click on it and
								select "Share".
							</li>
							<li>
								Click on "Change" next to "Restricted" to change
								the sharing settings.
							</li>
							<li>
								Choose "Anyone with the link" or "Public on the
								web" depending on your preference.
							</li>
							<li>
								Copy the shareable link and paste it into the
								"Google Drive Link" field in this form.
							</li>
							<li>Click on "Submit" to submit the form.</li>
						</ol>
					</Typography>
					<Button
						onClick={handleCloseModal}
						sx={{ mt: 2 }}
					>
						Close
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default Contribute;
