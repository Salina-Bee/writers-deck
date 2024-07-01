// components
import bannerImg from '../images/banner.png';
import img from '../images/banner-cards.png';

const Home = () => {

	return (
	<div className="border-t lg:border-none">
		<section className="bg-gradient-to-b from-primary to-blue-950 flex">
			<div className="px-4 pt-20 pb-8 mr-auto lg:ml-auto flex-column">
				<h1 className="max-w-2xl mb-4 text-4xl text-center  font-extrabold leading-none md:text-5xl xl:text-6xl">
					Writer's Deck
				</h1>

				<p className="text-center  max-w-2xl mb-6 font-light text-slate-100 lg:mb-8 md:text-xl lg:text-2xl">
					Build a deck that tells your story.
				</p>

				<div className="text-center max-w-2xl justify-center">

					<button className="inline-flex whitespace-nowrap items-center justify-center px-5 py-3 text-sm font-medium text-center text-slate-100 border border-slate-100 rounded-xl sm:w-auto focus:ring-4 focus:ring-slate-100 lg:text-2xl lg:mt-2">
						Get Started
					</button>
				</div>
			</div>
			<div className="mr-auto max-w-80 flex">
				<img src={img} alt="cards" className="object-cover" />
			</div>

		</section>
		<div class="home1">
			<div class="home2a">
				<span>
					For many writers, research and planning for your project can be quite the grueling task. 
				It's difficult to keep track of every little detail; sometimes, re-reading your past notes 
				leaves you more confused than when you started!  <br/> <br/>
				Enter <strong>Writer's Deck</strong>: a platform where you can be creative and concise, all while having 
				an engaging and enjoyable experience. <br/> <br/>
				Click the purple card with the staff icon and give it a try!	
				</span>
			</div>
			<div class="home2b">
				
			</div>
			
		</div>
		
		<div class="home3">
		<div class="home4a">(Placeholder text)</div>
		<div class="home4b">
			<ul><strong><span class="addFeatures">Additional Features </span></strong>
			<li><strong>Various Card Templates</strong>: Lorem ipsum dolor sit amet, 
			consectetur adipiscing elit. Morbi auctor, nisi vel feugiat tempus, leo 
			enim porta neque, ac dapibus nisi dolor quis quam. In gravida, ante at 
			malesuada fermentum.</li>
			<li><strong>File Attachments Supported</strong>: Have ideas that you can't
			explain with just plain text? No worries! You can attach multiple documents,
			images, and links directly to your cards.</li>
			<li><strong>Visibility Control</strong>: Lorem ipsum dolor sit amet, 
			consectetur adipiscing elit. Morbi auctor, nisi vel feugiat tempus, leo 
			enim porta neque, ac dapibus nisi dolor quis quam. In gravida, ante at 
			malesuada fermentum.</li>
			<li><strong>Community and Contests</strong>: Lorem ipsum dolor sit amet, 
			consectetur adipiscing elit. Morbi auctor, nisi vel feugiat tempus, leo 
			enim porta neque, ac dapibus nisi dolor quis quam. In gravida, ante at 
			malesuada fermentum.</li>
			</ul>
		</div>
	</div>
	</div>

	);
}


export default Home;