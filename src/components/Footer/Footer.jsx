import React from "react";
import PartnersSlider from "./PartnersSlider/PartnersSlider";
import FooterC from "../FooterSocial";
import './Footer.css';

const Footer = () => {

	// const open = (path) => window.open(path)

	return (
		<>
			<PartnersSlider />

			<footer>
				<div className="footer__wrapper">
					<FooterC />

					<div className="social">
						<h3>Connect socially with
							<strong>AVAHas Games</strong>
						</h3>
						<div className="container">
							<div className="social-icons">
								<div className="social-icon">
									<a href="https://www.facebook.com/"
										target="_blank" rel="noopener noreferrer">
										<svg className="svg-inline--fa fa-facebook-square fa-w-14"
											aria-hidden="true"
											focusable="false" data-prefix="fab" data-icon="facebook-square"
											role="img"
											xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
											data-fa-i2svg="">
											<path fill="currentColor"
												d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
										</svg>
										<span>Like on Facebook</span>
									</a>
								</div>
								<div className="social-icon">
									<a href="https://twitter.com/" target="_blank"
										rel="noopener noreferrer">
										<svg className="svg-inline--fa fa-twitter-square fa-w-14" aria-hidden="true"
											focusable="false" data-prefix="fab" data-icon="twitter-square"
											role="img"
											xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
											data-fa-i2svg="">
											<path fill="currentColor"
												d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path>
										</svg>
										<span>Follow on Twitter</span>
									</a>
								</div>
								<div className="social-icon">
									<a href="https://plus.google.com/"
										target="_blank" rel="noopener noreferrer">
										<svg className="svg-inline--fa fa-google-plus-square fa-w-14"
											aria-hidden="true"
											focusable="false" data-prefix="fab" data-icon="google-plus-square"
											role="img"
											xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
											data-fa-i2svg="">
											<path fill="currentColor"
												d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z"></path>
										</svg>
										<span>Follow on Google+</span>
									</a>
								</div>
								<div className="social-icon">
									<a href="https://www.youtube.com/user/"
										target="_blank" rel="noopener noreferrer">
										<svg className="svg-inline--fa fa-youtube-square fa-w-14" aria-hidden="true"
											focusable="false" data-prefix="fab" data-icon="youtube-square"
											role="img"
											xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
											data-fa-i2svg="">
											<path fill="currentColor"
												d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"></path>
										</svg>
										<span>Watch on Youtube</span>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="copyright">
						<div className="container">
							<div>
								<strong>AVAHas Games</strong> © 2022. All rights reserved
							</div>
						</div>
					</div>

				</div>
			</footer>
		</>
	)
}

export default Footer


