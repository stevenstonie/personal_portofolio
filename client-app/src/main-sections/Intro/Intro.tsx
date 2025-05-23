import React from "react";
import styles from "./Intro.module.css";
import { ScrambleTexts } from "@twistezo/react-text-scramble/lib/types";
import TextScramble from "@twistezo/react-text-scramble/lib/TextScramble";

const Intro: React.FC = () => {
	// const name: ScrambleTexts = [
	// 	'Stefan Petrea'
	// ]
	const web: ScrambleTexts = [
		'Web+'
	]
	const developer: ScrambleTexts = [
		'Developer'
	]

	return (
		<section className={styles.intro_container}>
			<div className={styles.inner_container}>
				<div>
					<p>Hello, this is my</p>
				</div>
				{/* <TextScramble texts={name}
					letterSpeed={75}
					nextLetterSpeed={60}
					paused={false}
					pauseTime={15000000000}
				/> */}
				<div className={styles.bigger_text}>
					<TextScramble texts={web}
						letterSpeed={75}
						nextLetterSpeed={130}
						paused={false}
						pauseTime={15000000000}
					/>
					<div className={styles.highlighted}>
						<TextScramble texts={developer}
							letterSpeed={75}
							nextLetterSpeed={110}
							paused={false}
							pauseTime={15000000000}
						/>
					</div>
				</div>
				<div>
					<p style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'right' }}>portofolio</p>
				</div>
			</div>
		</section>
	);
};

export default Intro