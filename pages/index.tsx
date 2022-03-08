import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	function menuToggle() {
		const toggleMenu = document.querySelector(".toggle");
		const section = document.querySelector("section");
		toggleMenu.classList.toggle("active");
		section.classList.toggle("active");
	}

	// useEffect(() => {

	// });

	return (
		<section>
			<header>
				<a href="#" className="logo">
					PalmaView
				</a>
				<div className="toggle" onClick={menuToggle}></div>
			</header>
			<div className="glass"></div>
			<div className="content">
				<h2>
					Create...
					<br />
					<span>A digital footprint of you.</span>
				</h2>
			</div>
			<video
				src={require("/public/digitize.mp4")}
				type="video/mp4"
				autoPlay
				muted
				loop
			></video>
			<ul className="sci">
				<li style={{ "--i": "1" }}>
					<a href="#">Facebook</a>
				</li>
				<li style={{ "--i": "2" }}>
					<a href="#">Twitter</a>
				</li>
				<li style={{ "--i": "3" }}>
					<a href="#">Instagram</a>
				</li>
			</ul>
			<ul className="navigation">
				<li style={{ "--i": "1" }}>
					<a href="#">Home</a>
				</li>
				<li style={{ "--i": "2" }}>
					<a href="#">About</a>
				</li>
				<li style={{ "--i": "3" }}>
					<a href="#">Tour</a>
				</li>
				<li style={{ "--i": "4" }}>
					<a href="#">Contact</a>
				</li>
			</ul>
		</section>
	);
};

export default Home;
