import React from "react";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";

const particlesInit = async (main) => {
	console.log(main);
	await loadFull(main);
};
const particlesLoaded = (container) => {
	console.log(container);
};

const particleEffect = {
	background: {
		color: {
			value: "linear-gradient(89deg, #ff5edf 0%, #04c8d3 100%)",
		},
	},
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: "push",
			},
			onHover: {
				enable: true,
				mode: "repulse",
			},
			resize: true,
		},
		modes: {
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: "#ffffff",
		},
		links: {
			color: "#ffffff",
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			direction: "left",
			enable: true,
			outModes: {
				default: "bounce",
			},
			random: false,
			speed: 6,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 50,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: "circle",
		},
		size: {
			value: { min: 1, max: 5 },
		},
	},
	detectRetina: true,
};

function App() {
	return (
		<div className="App">
			<Particles className="particles" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particleEffect} />
			<Navigation />
			<Logo />
			{/*<ImageLinkForm />
      <FaceRecognition /> */}
		</div>
	);
}

export default App;
