import './HomeScreen.css'

const HomeScreen = () => {
	return (
		<div className="homeScreen">
				<section className="intro">
					<div className="intro_1">
						<h1>Next Generation digital banking</h1>
						<p>Take your financial online. Your Easybank account will be a one-top-shop for spending,saving, budgeting, investing, and much more.</p>
						<button>Request Invite</button>
					</div>
					<div className="intro_2">
						<img className="mockup" src="/images/image-mockups.png" alt="mockup" />
					</div>
				</section>
				<section className="options">
								<div className="options_intro">
										<h1>Why Choose Easybank?</h1>
										<p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
								</div>
								<div className="options_container">
										<div className="options_box">
											<img src="/images/icon-online.svg" alt="hand"/>
											<h1>Online Banking</h1>
											<p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
										</div>
										<div className="options_box">
											<img src="/images/icon-budgeting.svg" alt="budgeting" />
											<h1>Simply Budgeting</h1>
											<p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits</p>
										</div>
										<div className="options_box">
												<img src="/images/icon-onboarding.svg" alt="onboarding" />
												<h1>Fast Onboarding</h1>
												<p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
										</div>
										<div className="options_box">
												<img src="/images/icon-api.svg" alt="hand" />
												<h1>Open API</h1>
												<p>Manage your saving, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
										</div>
						</div>
				</section>
				<section className="articles">
					<div className="articles_intro">
						<h1>Latest Articles</h1>
					</div>
						<div className="articles_container">

							<div className="articles_box">
								<img src="/images/image-currency.jpg" alt="hand" />
								<div className="pic_box">
									<h1>Online Banking</h1>
									<p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
								</div>

							</div>
							<div className="articles_box">
								<img src="/images/image-restaurant.jpg" alt="budgeting" />
								<div className="pic_box">
									<h1>Simply Budgeting</h1>
									<p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits</p>
								</div>

							</div>
							<div className="articles_box">
									<img src="/images/image-plane.jpg" alt="onboarding" />
									<div className="pic_box">
											<h1>Fast Onboarding</h1>
											<p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
									</div>

							</div>
							<div className="articles_box">
								<img src="/images/image-confetti.jpg" alt="hand" />
								<div className="pic_box">
									<h1>Open API</h1>
									<p>Manage your saving, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
								</div>

							</div>
						</div>
				</section>
				<section className="currencies">
				</section>
		</div>
	)
}

export default HomeScreen
