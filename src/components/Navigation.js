// react-router-dom
import {Link} from 'react-router-dom';
//import {useTranslation} from 'react-i18next';

export default function Navbar() {

	const dropdownClick = () => {
		const dropdownItem = document.getElementById("dropdown-item")
		const dropdownActiveItem = document.getElementById("dropdown-active-item") // block 
		if (dropdownItem.classList.contains("hidden")) {
			dropdownItem.classList.remove("hidden")
			dropdownItem.classList.add("block")
		} else {
			dropdownItem.classList.remove("block")
			dropdownItem.classList.add("hidden")
		}
		dropdownActiveItem.classList.toggle("rounded-bl-xl")
	} 

	const burgerClick = () => {
		const burger = document.getElementById("burger")
		const burgerExit = document.getElementById("burger-exit")
		const navItems = document.getElementById("nav-items")
		navItems.classList.toggle("hidden")
		burgerExit.classList.toggle("hidden")
		burger.classList.toggle("hidden")
	}

	return (
		<div className = "flex-column md:flex bg-primary text-slate-100 md:justify-between items-center">
			<div className="md:hidden" onClick={burgerClick}>
			<div className="float-left cursor-pointer pt-8 px-4" id="burger" >
				<svg className="w-10 size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
          	</div>
			<div className="hidden float-left cursor-pointer pt-8 px-2" id="burger-exit">
				<svg className="w-10 size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</div>
			</div>

			<div className="text-3xl pb-8 pt-8 pr-12 md:px-8 md:py-8 text-center whitespace-nowrap"><Link to="/writers-deck">Writer's Deck</Link></div>
			<div id="nav-items" className = "hidden flex-column md:flex items-center">
				<div className="text-center text-xl px-4 md:pt-1"><Link to="/writers-deck/about-us"> About Us </Link> </div>
				<div className="text-center text-xl pl-4 pr-3 pt-4 md:pt-1"><Link to="/writers-deck/contact"> Contact </Link></div>
				<div className="text-center">
				<ul className="inline-block md:flex">
					<li className="pt-3 md:py-0">
						<div id="dropdown" className="inline-block divide-y divide-slate-600 relative" onClick={dropdownClick}>
							<button id="dropdown-active-item" type="button" className="ml-3 inline-flex justify-center gap-x-1.5 px-2 bg-gray-500 rounded-t-xl rounded-br-xl rounded-bl-xl py-2 mr-4 shadow-sm items-center" aria-expanded="true" aria-haspopup="true">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
								</svg>
								<span className="text-xl pt-1 pr-1">English</span>
								<svg className="-mr-1 h-5 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
								</svg>
							</button>
							<div id="dropdown-item" className="hidden z-10 absolute rounded-b-xl shadow bg-gray-500 py-2 ml-3 mr-4 gap-x-1.5 px-2">
								<span className="block text-xl pt-1 pl-7 pr-1">Français</span>
							</div>
						</div>
					</li>
					<li className="py-3 md:py-0">
						<button className="inline-flex relative justify-center gap-x-1.5 px-1 bg-secondary-100 rounded-xl py-2 mr-4 ml-3 md:ml-0">
							<span className="whitespace-nowrap text-xl px-4 pt-1"><Link to="/writers-deck/signin">Sign In </Link></span>
						</button>
					</li>
				</ul>
				</div>
			</div>
				
		</div>

		);
	}
