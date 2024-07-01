// react-router-dom
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import '../styles/Banner.css'
import Button from 'react-bootstrap/Button';

const Banner = () => {
	return (
		<div class="banner-layer1">
			<div class="banner-layer2">
				<div class = "banner-layer3">
					<h1>Writer's Deck</h1>
				</div>
				<div class = "banner-layer4">
					<p>Create vibrant, customizable cards to organize every <br/> <br/>facet of your writing.</p>
				</div>
				<div class = "banner-layer5">
					<Link to="writers-deck/signin"> <Button className="banner-button"> Start now </Button> </Link>
				</div>
		 	</div>
		</div>
	);
}

export default Banner;