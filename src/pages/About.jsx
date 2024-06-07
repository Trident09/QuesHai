import React from "react";

const About = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-gray-900 text-white py-8">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl font-bold">About Us</h1>
				</div>
			</header>
			<main className="flex-grow py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h2 className="text-2xl font-bold mb-4">
								Our Mission
							</h2>
							<p className="text-lg">
								Welcome to the National Forensic Sciences
								University Question Paper Repository! We're on a
								mission to build an extensive collection of
								question papers from the National Forensic
								Sciences University. As of now, we have a
								limited number of papers. Your contribution can
								make a significant difference in enriching the
								repository and helping countless students in
								their academic journey.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-bold mb-4">
								Our Vision
							</h2>
							<p className="text-lg">
								Our vision is bold yet simple: to become the
								ultimate destination for students seeking past
								question papers from the National Forensic
								Sciences University. Together, we can cultivate
								an environment of collaboration and
								knowledge-sharing, empowering students to unlock
								their full potential. Let's embark on this
								journey together and redefine the way students
								learn and grow.
							</p>
						</div>
					</div>
					<p className="mt-8 mb-4 text-2xl font-bold min-w-full items-center justify-center">
						Meet the creators of this website:
					</p>
					<div className="mt-4 grid grid-cols-3 gap-8">
						<div className="text-center">
							<img
								src="https://avatars.githubusercontent.com/u/100141945?v=4"
								alt="Saty"
								className="rounded-full h-32 w-32 mx-auto mb-4"
							/>
							<h3 className="text-xl font-bold">
								Satyam Kumar Prasad
							</h3>
							<p className="text-sm">
								Student at Lok Nayak Jayaprakash Narayan
								National Institute of Criminology and Forensic
								Science
							</p>
						</div>
						<div className="text-center">
							<img
								src="https://avatars.githubusercontent.com/u/98939183?v=4"
								alt="Rupam"
								className="rounded-full h-32 w-32 mx-auto mb-4"
							/>
							<h3 className="text-xl font-bold">Rupam Barui</h3>
							<p className="text-sm">
								Student at Lok Nayak Jayaprakash Narayan
								National Institute of Criminology and Forensic
								Science
							</p>
						</div>
						<div className="text-center">
							<img
								src="https://avatars.githubusercontent.com/u/88451512?v=4"
								alt="Kush"
								className="rounded-full h-32 w-32 mx-auto mb-4"
							/>
							<h3 className="text-xl font-bold">
								Kushagra Singh
							</h3>
							<p className="text-sm">
								Cybersecurity Student at National Forensic
								Sciences University , MHA || Contributor @
								SSOC'24 || Volunteer at Internet Society
							</p>
						</div>
					</div>
					<div className="mt-8 text-center">
						<p className="text-lg mb-4">
							We need your help! Contribute your question papers
							to improve the repository and help others in their
							academic journey.
						</p>
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							<a href="/contribute">Contribute Now</a>
						</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default About;
