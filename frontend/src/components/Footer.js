import './Footer.css'

const Footer = ({}) => {
	return (
		<footer className="footer">

				<div className="footer_container">
					<div className="footer_box">
						<div className="footer1">
							<div>
								<a href="#"><img src="/images/logo.svg" alt="logo" /></a>
							</div>
							<div className="icons">
								<a href="#"><img src="/images/icon-facebook.svg" alt="facebook" /></a>
								<a href="#"><img src="/images/icon-youtube.svg" alt="facebook" /></a>
								<a href="#"><img src="/images/icon-twitter.svg" alt="facebook" /></a>
								<a href="#"><img src="/images/icon-pinterest.svg" alt="facebook" /></a>
								<a href="#"><img src="/images/icon-instagram.svg" alt="facebook" /></a>
							</div>

						</div>

					</div>
					<div className="footer_box">

						<div className="footer2">
							<a href="#">About Us</a>
							<a href="#">Contact</a>
							<a href="#">Blog</a>

						</div>

					</div>
					<div className="footer_box">

						<div className="footer3">
							<a href="#">Career</a>
							<a href="#">Support</a>
							<a href="#">Privacy Policy</a>
						</div>

					</div>
					<div className="footer_box">

						<div className="footer4">
							<button>Request Invite</button>
							<p>Easybank. All Rights Reserved</p>
						</div>

					</div>
				</div>
				</footer>
	)
}


export default Footer
