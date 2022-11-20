import React from "react";
import Content from "./components/content/Content";
import Footer from "./components/content/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<Content />
			<Footer />
		</>
	);
};

export default App;
