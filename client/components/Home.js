import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
/**
 * COMPONENT
 */
export const Home = (props) => {
	const { username } = props;

	return (
		<div>
			<div
				id='carouselExampleSlidesOnly'
				className='carousel slide carousel-fade'
				data-bs-ride='carousel'>
				<div className='carousel-inner'>
					<div className='carousel-item r4-carousel-item active'>
						<div
							className='r4-carousel-overlay-image'
							style={{ backgroundImage: "url(/images/carousel/default01.png)" }}
						/>
						<div className='container r4-carousel-container'>
							<h1>Sign in to get exclusive content</h1>
							<Link
								to='/login'
								className='btn btn-primary btn-lg mb-5 text-light'>
								Sign in
							</Link>
						</div>
					</div>
					<div className='carousel-item r4-carousel-item'>
						<div
							className='r4-carousel-overlay-image'
							style={{ backgroundImage: "url(/images/carousel/default02.png)" }}
						/>
						<div className='container r4-carousel-container'>
							<h1>Merch Store</h1>
							<Link
								to='/merch'
								className='btn btn-primary btn-lg mb-5 text-light'>
								View
							</Link>
						</div>
					</div>
					<div className='carousel-item r4-carousel-item'>
						<div
							className='r4-carousel-overlay-image'
							style={{ backgroundImage: "url(/images/carousel/default03.png)" }}
						/>
						<div className='container r4-carousel-container'>
							<h1>Call to Action #3</h1>
							<Link
								to='/login'
								className='btn btn-primary btn-lg mb-5 text-light'>
								Action #3
							</Link>
						</div>
					</div>{" "}
				</div>
			</div>
			<div className='container'>
				<div className='container'>
					<h1 className='display-3 mt-4'>
						Hi, we're For the Love of Theme Parks!
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
						facilisis, mauris et rutrum sollicitudin, mi justo tristique nunc,
						eget aliquet lectus felis at diam. Nam faucibus ante non risus
						vestibulum sagittis. Phasellus posuere libero nec diam sodales
						maximus. Vivamus turpis velit, vehicula a scelerisque in, malesuada
						vel turpis. Nullam mollis lacus sed justo vehicula feugiat vitae sed
						quam. Curabitur vel sapien turpis. In hac habitasse platea dictumst.
						Donec lectus justo, mollis vel velit non, malesuada dictum ipsum.
						Vivamus lectus tellus, condimentum et lorem vitae, tempor cursus
						ipsum. Sed vestibulum in sem in ullamcorper. Quisque ex nisi,
						consequat a posuere eu, euismod nec augue. Quisque posuere aliquam
						urna sit amet posuere. In sit amet quam vestibulum, aliquet quam ut,
						volutpat odio. Duis at odio eget leo fermentum pharetra ut et
						tortor. Ut in molestie ipsum. Nam at odio nunc.
					</p>
					<p>
						Fusce in vestibulum urna, finibus sodales dui. Fusce facilisis
						iaculis purus a luctus. Proin a turpis non quam commodo laoreet.
						Fusce nec massa id mauris commodo convallis non ultricies elit.
						Nulla ultricies eros vitae mattis feugiat. Vestibulum cursus posuere
						lectus, sit amet posuere nisl malesuada a. Maecenas ultrices diam
						eget vehicula semper. Nullam vel turpis nec quam aliquet rutrum.
						Etiam elit odio, venenatis vitae dignissim vestibulum, lobortis
						vitae orci. Mauris libero nulla, aliquam sed ipsum vitae, bibendum
						congue leo. Donec molestie laoreet sapien, at tempus nisi sagittis
						at. Aliquam mollis mauris rutrum massa malesuada tincidunt. Aenean
						dictum metus cursus urna ornare, vitae rutrum velit consequat.
						Aliquam ligula magna, pellentesque nec ex ut, pulvinar cursus risus.
						Sed at ligula sed risus tincidunt varius. Donec vitae eleifend
						libero, et tincidunt libero. Praesent a dui sed diam feugiat iaculis
						nec non risus. Maecenas elementum vehicula ligula, non pellentesque
						nunc volutpat congue. Vivamus hendrerit nunc in ultrices luctus.
						Proin egestas malesuada turpis, in ornare odio feugiat vitae. Cras
						vitae risus a nisl placerat elementum et id erat. Vestibulum et
						euismod velit. Nulla facilisi. Donec eleifend est a mattis pulvinar.
						Fusce ac odio elit. Fusce arcu ante, iaculis eu commodo in,
						vulputate in erat. Donec fringilla fringilla pellentesque.{" "}
					</p>
					<p>
						Sed vehicula, ipsum at congue consequat, lacus arcu viverra sapien,
						ac ornare odio mauris eu nisl. Maecenas nec finibus tellus. Cras
						facilisis arcu lacinia vestibulum consequat. Praesent eu vulputate
						diam. Sed malesuada hendrerit nisi sit amet venenatis. In eu orci
						hendrerit, faucibus eros at, fermentum enim. Suspendisse dapibus
						augue vel lorem rhoncus placerat. Duis pulvinar, neque quis ornare
						aliquam, felis est gravida mi, id venenatis lorem massa non urna. In
						in bibendum neque. Donec convallis odio et sapien gravida, maximus
						porttitor nibh maximus. In imperdiet elit ut vulputate iaculis.
						Curabitur risus metus, tincidunt id dignissim tempor, tincidunt ut
						risus. Nulla cursus luctus odio, eget bibendum arcu convallis eget.
						Aenean auctor ligula in tellus lobortis auctor. Pellentesque ac
						ipsum quam. In ex magna, scelerisque sit amet tellus nec, feugiat
						condimentum urna. Integer eu aliquam tortor.
					</p>
					<p>
						{" "}
						Sed dolor orci, volutpat nec nisl quis, tincidunt pulvinar ante.
						Cras quam libero, volutpat et luctus sed, ultricies non diam. Etiam
						cursus luctus libero, et euismod lorem faucibus at. Mauris vel
						tristique nisl, id scelerisque dui. Maecenas eget arcu sed neque
						aliquet eleifend. Aliquam eleifend quis purus in pellentesque. Nam
						sollicitudin, libero vitae semper vulputate, dui nisl faucibus leo,
						et scelerisque odio justo at elit. Vestibulum dignissim efficitur
						nisl id placerat. Aenean porttitor dui orci, eget lobortis elit
						maximus pretium. Quisque lacus est, ultricies in justo nec, cursus
						ornare quam.
					</p>
				</div>
			</div>
		</div>
	);
};

/**
 * CONTAINER
 */
const mapState = (state) => {
	return {
		username: state.auth.username,
	};
};

export default connect(mapState)(Home);
