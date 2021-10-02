import React from "react";

const AboutUs = () => (
	<div className='bg-light py-5'>
		<div className='container py-5'>
			<div className='row mb-4'>
				<div className='col-lg-5'>
					<h2 className='display-4 font-weight-light'>Our Team</h2>
					<p className='font-italic text-muted'>For the Love of Theme Parks</p>
				</div>
			</div>
			<div className='row text-center'>
				<div className='col-xl-3 col-sm-6 mb-5'>
					<div className='bg-white rounded shadow-sm py-5 px-4'>
						<img
							src='/images/portraits/ryan.png'
							className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
						/>
						<h5 className='mb-0'>Ryan</h5>
						<span className='small text-uppercase text-muted'>
							CEO - Founder
						</span>
					</div>
				</div>
				<div className='col-xl-3 col-sm-6 mb-5'>
					<div className='bg-white rounded shadow-sm py-5 px-4'>
						<img
							src='/images/portraits/isabelle.png'
							className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
						/>
						<h5 className='mb-0'>Isabelle</h5>
						<span className='small text-uppercase text-muted'>Co-Founder</span>
					</div>
				</div>
				<div className='col-xl-3 col-sm-6 mb-5'>
					<div className='bg-white rounded shadow-sm py-5 px-4'>
						<img
							src='/images/portraits/maya.jpg'
							className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
						/>
						<h5 className='mb-0'>Maya</h5>
						<span className='small text-uppercase text-muted'>Head of HR</span>
					</div>
				</div>
				<div className='col-xl-3 col-sm-6 mb-5'>
					<div className='bg-white rounded shadow-sm py-5 px-4'>
						<img
							src='/images/portraits/callie.jpeg'
							className='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
						/>
						<h5 className='mb-0'>Callie</h5>
						<span className='small text-uppercase text-muted'>Intern</span>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default AboutUs;
