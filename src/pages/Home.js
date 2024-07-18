// react-router dom
import {Link} from 'react-router-dom';

// components
import Testimonial from '../components/Testimonial';

// images
import img from '../images/logo (1).png';
import staff from '../images/wooden-stick.png';
import cardstack from '../images/card-templates.png';
import pfp1 from '../images/pfp1.png'
import pfp2 from '../images/pfp2.png'
import pfp3 from '../images/pfp3.png'

const Home = () => {

	return (
	<div className="border-t border-slate-200 md:border-none">
		<section className="bg-gradient-to-b from-primary to-blue-950 flex">
			<div className="px-4 pt-20 pb-8 mr-auto ml-auto flex-column">
				<h1 className="max-w-2xl mb-4 text-4xl text-center font-extrabold text-slate-100 leading-none md:text-5xl xl:text-6xl">
					Writer's Deck
				</h1>

				<p className="text-center  max-w-2xl mb-6 font-light text-slate-100 lg:mb-8 md:text-xl lg:text-2xl">
					Build a deck that tells your story.
				</p>

				<div className="text-center max-w-2xl justify-center">

					<button className="inline-flex whitespace-nowrap items-center justify-center px-5 py-3 text-sm font-medium text-center text-slate-100 border border-slate-100 rounded-xl sm:w-auto lg:text-2xl lg:mt-2">
						<Link to="/writers-deck/login">Get Started</Link>
					</button>
				</div>
			</div>
			<div className="hidden md:mr-auto md:flex">
				<img src={img} alt="cards" className="hidden md:block object-contain" />
			</div>
		</section>

		<section className="text-primary font-semibold">
			<div className="flex-column lg:flex">
			<div className="mt-10 mx-auto lg:ml-auto lg:mr-14 pl-16 pr-12 max-w-2xl lg:max-w-3xl">
				<span className="text-xl leading-8 lg:leading-10">
					For many writers, research and planning for your project can be quite the grueling task. 
				It's difficult to keep track of every little detail; sometimes, re-reading your past notes 
				leaves you more confused than when you started!  <br/> <br/>
				Enter <strong>Writer's Deck</strong>: a platform where you can be creative and concise, all while having 
				an engaging and enjoyable experience. <br/> <br/>
				Click/tap the purple card with the staff icon and give it a try!	
				</span>
			</div>
			<div className="items-center mt-10 flex justify-center mx-auto lg:mr-auto lg:ml-0 max-w-2xl">
				<div className="bg-card-200 cursor-pointer rounded-xl border-8 border-card-100 w-52 h-72 lg:h-80 lg:w-60 flex justify-center items-center">
					<img src={staff} alt="wooden-staff icon" className="w-28" />
				</div>
			</div>
			</div>
		</section>

		<section className="text-primary font-semibold mt-20 lg:mt-32">
			<div className="lg:flex">
				<div className="hidden lg:flex lg:flex-col mx-auto lg:mr-0 max-w-2xl lg:max-w-2xl">
					<img className="w-40 mt-10" src={cardstack} alt="stack of cards" />
					<svg className="w-32 mt-6 ml-5" viewBox="0 0 47 40" xmlns="http://www.w3.org/2000/svg">
						<path d="m28.16,33.51a4.57,5.04 0 0 0 4.57,-5.04l0,-7.57a4.57,5.04 0 0 0 -4.57,-5.04l-22.85,0a4.57,5.04 0 0 0 -4.57,5.04l0,7.57a4.57,5.04 0 0 0 4.57,5.04l22.85,0zm-27.42,-18.24l0,-6.98a4.57,5.04 0 0 1 4.57,-5.04l8.2,0a3.43,3.79 0 0 1 2.43,1.11l3.23,3.56c0.22,0.24 0.5,0.37 0.81,0.37l8.2,0a4.57,5.04 0 0 1 4.57,5.04l0,1.93a6.83,7.54 0 0 0 -4.57,-1.93l-22.85,0a6.83,7.54 0 0 0 -4.57,1.93l0,0.01l-0.02,0z" fill="#faff7a" id="svg_2" stroke="#dbbc40"/>
						<path clip-rule="evenodd" d="m26.85,30.94c0,-4.74 4.19,-8.61 9.36,-8.61s9.36,3.86 9.36,8.61s-4.19,8.61 -9.36,8.61s-9.36,-3.84 -9.36,-8.61zm12.79,-1.6a0.72,0.66 0 1 0 -1.17,-0.79l-3.11,4l-1.54,-1.42a0.72,0.66 0 0 0 -1.02,0.94l2.16,1.99a0.72,0.66 0 0 0 1.11,-0.08l3.6,-4.63l-0.02,0l0,-0.01l-0.01,0z" fill="#59ba59" fill-rule="evenodd" id="svg_1"/>
					</svg>
					<svg className="w-28 mt-5 ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E1C9C9" stroke="#A25CE4">
						<path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
					</svg>
					<svg className="w-28 mt-5 ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0b214f" >
						<path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
						<path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
					</svg>
				</div>

				<div className="mx-auto lg:ml-0 max-w-2xl lg:max-w-3xl">
					<div className="mx-auto">
						<span className="font-bold text-3xl px-10">Additional Features </span> <br/><br/>
					</div>
					
					<ul className="text-start text-xl leading-8 lg:leading-10 list-disc px-10 pr-0">
						<li className="lg:mb-5"><span> <span className="font-bold">Various Card Templates: </span>
						Save time in card customization by perusing our selection of card templates,
						for both writing and design!
						</span>
						<div className="flex justify-center mr-2 mb-10 lg:hidden">
							<img className="w-40 mt-5" src={cardstack} alt="stack of cards" />
						</div>
						</li>
						
						
						<li className="mb-5"><span className="text-xl leading-8"> <span className="font-bold">File Attachments Supported: </span>
						Have ideas that you can't explain with just plain text? No worries! You can attach multiple documents,
						images, and links directly to your cards.
						</span> 
						<div className="flex justify-center mr-2 mb-10 lg:hidden">
							<svg className="w-32 mt-3 ml-5" viewBox="0 0 47 40" xmlns="http://www.w3.org/2000/svg">
								<path d="m28.16,33.51a4.57,5.04 0 0 0 4.57,-5.04l0,-7.57a4.57,5.04 0 0 0 -4.57,-5.04l-22.85,0a4.57,5.04 0 0 0 -4.57,5.04l0,7.57a4.57,5.04 0 0 0 4.57,5.04l22.85,0zm-27.42,-18.24l0,-6.98a4.57,5.04 0 0 1 4.57,-5.04l8.2,0a3.43,3.79 0 0 1 2.43,1.11l3.23,3.56c0.22,0.24 0.5,0.37 0.81,0.37l8.2,0a4.57,5.04 0 0 1 4.57,5.04l0,1.93a6.83,7.54 0 0 0 -4.57,-1.93l-22.85,0a6.83,7.54 0 0 0 -4.57,1.93l0,0.01l-0.02,0z" fill="#faff7a" id="svg_2" stroke="#dbbc40"/>
								<path clip-rule="evenodd" d="m26.85,30.94c0,-4.74 4.19,-8.61 9.36,-8.61s9.36,3.86 9.36,8.61s-4.19,8.61 -9.36,8.61s-9.36,-3.84 -9.36,-8.61zm12.79,-1.6a0.72,0.66 0 1 0 -1.17,-0.79l-3.11,4l-1.54,-1.42a0.72,0.66 0 0 0 -1.02,0.94l2.16,1.99a0.72,0.66 0 0 0 1.11,-0.08l3.6,-4.63l-0.02,0l0,-0.01l-0.01,0z" fill="#59ba59" fill-rule="evenodd" id="svg_1"/>
							</svg>
						</div>	
						</li>


						<li className="mb-5"><span className="text-xl leading-8"> <span className="font-bold">Visibility Control: </span>
						Share your cards at your own discretion! Each card can be set to private, protected (only those with a link
						can see it), or public.
						</span>
							
						<div className="flex justify-center mr-2 mb-10 lg:hidden">
							<svg className="w-28 mt-5 ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E1C9C9" stroke="#A25CE4">
								<path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
							</svg>
						</div>		
						</li>


						<li className="mb-5"><span className="text-xl leading-8"> <span className="font-bold">Growing Community and Contests: </span>
						interact with a global community of writers and participate in monthly contests, ranging between amateurs,
						hobbyists, and professionals.
						</span>
						
						<div className="flex justify-center mr-2 mb-10 lg:hidden">
							<svg className="w-28 mt-5 ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0b214f" >
								<path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
								<path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
							</svg>
						</div>
						</li>
					</ul>
				</div>
			</div>	
		</section>

		<section className="text-primary font-semibold mt-20 lg:mt-28">
			<div className="flex">
				<div className="mx-auto">
					<span className="font-bold text-3xl px-10">Testimonials</span> <br/><br/>
				</div>
			</div>
			<div className="flex-column">
				<Testimonial
					name="Sarah L."
					description="Writer's Deck has completely transformed how I approach my writing projects. 
                	I can keep my notes organized and concise without feeling the need to reach a
                	certain word count. Planning for my story has never been easier!"
					image={pfp1}
					date="06/06/2024"
				/>
				<Testimonial
					name="James T."
					description="As a co-author, collaboration is key for me. Writer's Deck has made it 
					incredibly easy to share and develop ideas with my writing partner. We've never been 
					more in sync with our storytelling."
					image={pfp2}
					date="05/17/2024"
				/>
				<Testimonial
					name="Thomas P."
					description="Joining the Writer's Deck community has been a game-changer. The feedback from other 
					writers has been invaluable, and I've loved sharing my resources and seeing how others approach 
					their writing. It's a fantastic, supportive environment."
					image={pfp3}
					date="05/28/2024"
				/>
			</div>
		</section>

		<section className="text-primary font-semibold mt-20 lg:mt-28">
			<div className="flex justify-center mb-5">
				<span className="text-4xl font-bold">Ready to write?</span>
			</div>
			<div className="flex justify-center pb-20">
				<button className="inline-flex relative justify-center gap-x-1.5 px-1 bg-secondary-100 rounded-xl ">
					<span className="whitespace-nowrap text-3xl px-5 py-3 text-white"><Link to="/writers-deck/login">Join Now</Link></span>
				</button>

			</div>

		</section>
		
		

	</div>

	);
}


export default Home;