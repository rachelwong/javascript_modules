import React from "react"

// a functional componetn can accept an object called props which will contain all the attributes we have set in that element
export function About() {
	return (
		<section id='about-me'>
			<h2>About Me</h2>
			<img src='https://randomuser.me/api/portraits/women/8.jpg' alt='sandra_photo' />
			<article>
				<ol>
					<li>
						<p>
							<b>Pop</b> culture maven. Beer fan. Award-winning music junkie. Extreme coffee
							enthusiast. Thinker. Tv specialist.
						</p>
					</li>
					<li>
						<p>
							<b>Friendly</b> web maven. Bacon lover. General internet specialist. Incurable travel
							scholar.
						</p>
					</li>
					<li>
						<p>
							<b>Subtly</b> charming twitter lover. Social media fan. Incurable travel geek.
							Lifelong pop culture specialist. Tv scholar.
						</p>
					</li>
					<li>
						<p>
							<b>Unable</b> to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee
							ninja. Beer specialist.
						</p>
					</li>
				</ol>
			</article>
		</section>
	)
}
