import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='min-h-screen bg-[var(--background)] text-[var(--text-primary)]'>
			{/* Hero Section */}
			<section className='relative h-[80vh] bg-black flex items-center'>
				<div className='absolute inset-0 z-0'>
					<div className='absolute inset-0 bg-black opacity-70'></div>
					<div className='w-full h-full relative'>
						<Image
							src='/proguitar.jpg'
							alt='Electric guitars in a shop'
							fill
							className='object-cover'
							priority
						/>
					</div>
				</div>
				<div className='container mx-auto px-4 z-10 text-[var(--foreground)]'>
					<div className='max-w-3xl'>
						<h1 className='text-4xl md:text-6xl font-bold mb-4'>
							A Musician's Safe Place
						</h1>
						<p className='text-xl md:text-2xl mb-8'>
							Buy, Sell, and Trade Quality Instruments
						</p>
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link
								href='#buy'
								className='bg-[var(--secondary)] hover:bg-[var(--secondary-hover)] text-white font-bold py-3 px-8 rounded-lg text-center transition-colors'>
								BUY
							</Link>
							<Link
								href='#sale-trade'
								className='bg-[var(--secondary)] hover:bg-[var(--secondary-hover)] text-[var(--text-primary)] font-bold py-3 px-8 rounded-lg text-center transition-colors border border-[var(--card-border)]'>
								SELL/TRADE
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Products Section */}
			<section id='buy' className='py-16 bg-[var(--secondary)]'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold mb-12 text-center text-[var(--foreground)]'>
						Featured Instruments
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer'>
						{/* Featured Product 1 */}
						<div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-[var(--card-border)]'>
							<div className='relative h-64'>
								<Image
									src='/strat2.jpg'
									alt='Electric Guitar'
									fill
									className='object-contain'
								/>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-bold mb-2 text-[var(--foreground)]'>
									Vintage Electric Guitar
								</h3>
								<p className='text-[var(--text-secondary)] mb-4'>
									Premium quality electric guitar with amazing tone and
									playability.
								</p>
								<div className='flex justify-between items-center'>
									<span className='text-[var(--primary)] font-bold text-xl'>
										$1,299
									</span>
									<button className='bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-2 px-4 rounded-lg transition-colors'>
										View Details
									</button>
								</div>
							</div>
						</div>

						{/* Featured Product 2 */}
						<div className='bg-[var(--card-bg)] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-[var(--card-border)] '>
							<div className='relative h-64'>
								<Image
									src='/martin.jpg'
									alt='Acoustic Guitar'
									fill
									className='object-contain'
								/>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-bold mb-2 text-[var(--foreground)]'>
									Acoustic-Electric Guitar
								</h3>
								<p className='text-[var(--text-secondary)] mb-4'>
									Versatile acoustic-electric with rich, warm tone and built-in
									electronics.
								</p>
								<div className='flex justify-between items-center'>
									<span className='text-[var(--primary)] font-bold text-xl'>
										$899
									</span>
									<button className='bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-2 px-4 rounded-lg transition-colors'>
										View Details
									</button>
								</div>
							</div>
						</div>

						{/* Featured Product 3 */}
						<div className='bg-[var(--card-bg)] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-[var(--card-border)]'>
							<div className='relative h-64'>
								<Image
									src='/bass.jpg'
									alt='Bass Guitar'
									fill
									className='object-contain'
								/>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-bold mb-2 text-[var(--foreground)]'>
									Professional Bass Guitar
								</h3>
								<p className='text-[var(--text-secondary)] mb-4'>
									Premium bass guitar with exceptional craftsmanship and deep,
									punchy sound.
								</p>
								<div className='flex justify-between items-center'>
									<span className='text-[var(--primary)] font-bold text-xl'>
										$1,499
									</span>
									<button className='bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-2 px-4 rounded-lg transition-colors'>
										View Details
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Sale/Trade Section */}
			<section id='sale-trade' className='py-16 bg-[var(--background)]'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold mb-12 text-center text-[var(--foreground)]'>
						Sell or Trade Your Gear
					</h2>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h3 className='text-2xl font-bold mb-4 text-[var(--foreground)]'>
								Fair Prices, Honest Appraisals
							</h3>
							<p className='text-[var(--text-secondary)] mb-6'>
								At RCS Guitars and Gear, we pride ourselves on offering fair
								prices for your used instruments and equipment. Our experienced
								team will provide honest appraisals based on condition, rarity,
								and market value.
							</p>
							<h3 className='text-2xl font-bold mb-4 text-[var(--foreground)]'>
								Trade-In Options
							</h3>
							<p className='text-[var(--text-secondary)] mb-6'>
								Looking to upgrade? Trade in your current gear and get credit
								toward your next purchase. We make the process simple and
								straightforward.
							</p>
							<div className='mt-8'>
								<Link
									href='mailto:rcscustommusic@gmail.com'
									className='bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-3 px-8 rounded-lg inline-block transition-colors'>
									Contact Us About Your Gear
								</Link>
							</div>
						</div>
						<div className='relative h-96 rounded-lg overflow-hidden shadow-xl border border-[var(--card-border)]'>
							<Image
								src='/tradeGuitars.jpg'
								alt='Guitar Shop Interior'
								fill
								className='object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Shop Hours Section */}
			<section className='py-16 bg-black text-[var(--foreground)]'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
						<div>
							<h2 className='text-3xl font-bold mb-6'>Shop Hours</h2>
							<p className='text-xl mb-8'>Come Visit Us</p>
							<ul className='space-y-2'>
								<li className='flex justify-between'>
									<span>Monday - Friday</span>
									<span>10am - 7pm</span>
								</li>
								<li className='flex justify-between'>
									<span>Saturday</span>
									<span>10am - 5pm</span>
								</li>
								<li className='flex justify-between'>
									<span>Sunday</span>
									<span>Closed</span>
								</li>
							</ul>
							<div className='mt-8'>
								<h3 className='text-2xl font-bold mb-4'>Location</h3>
								<address className='not-italic'>
									227 Courtyard Dr.
									<br />
									New Braunfels, TX 78130, USA
								</address>
								<div className='mt-4'>
									<p>
										<span className='font-bold'>Email:</span>{' '}
										<a
											href='mailto:thereedbrothers@gmail.com'
											className='text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors'>
											thereedbrothers@gmail.com
										</a>
									</p>
									<p>
										<span className='font-bold'>Phone:</span>{' '}
										<a
											href='tel:8308375553'
											className='text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors'>
											(830) 837-5553
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className='relative h-96 rounded-lg overflow-hidden border border-[var(--card-border)]'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.6701152345344!2d-98.12890632432195!3d29.6422261406897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cb8a8d8c9c0e5%3A0x9c9b9a5e3f86b9c7!2s227%20Courtyard%20Dr%2C%20New%20Braunfels%2C%20TX%2078130!5e0!3m2!1sen!2sus!4v1708976400000!5m2!1sen!2sus'
								width='100%'
								height='100%'
								style={{ border: 0 }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='RCS Guitars and Gear location'
								className='absolute inset-0'></iframe>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className='py-16 bg-[var(--secondary)]'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold mb-12 text-center text-[var(--foreground)]'>
						Get In Touch
					</h2>
					<div className='max-w-2xl mx-auto'>
						<form className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-[var(--text-primary)] mb-1'>
										Name
									</label>
									<input
										type='text'
										id='name'
										className='w-full px-4 py-2 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent'
										placeholder='Your name'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-[var(--text-primary)] mb-1'>
										Email
									</label>
									<input
										type='email'
										id='email'
										className='w-full px-4 py-2 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent'
										placeholder='Your email'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='subject'
									className='block text-sm font-medium text-[var(--text-primary)] mb-1'>
									Subject
								</label>
								<input
									type='text'
									id='subject'
									className='w-full px-4 py-2 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent'
									placeholder='Subject'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-[var(--text-primary)] mb-1'>
									Message
								</label>
								<textarea
									id='message'
									rows='5'
									className='w-full px-4 py-2 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent'
									placeholder='Your message'></textarea>
							</div>
							<div>
								<button
									type='submit'
									className='w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-3 px-8 rounded-lg transition-colors'>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-[var(--footer-bg)] text-[var(--footer-text)] py-12'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div>
							<h3 className='text-xl font-bold mb-4 text-[var(--foreground)]'>
								RCS Guitars and Gear
							</h3>
							<p>
								A musician's safe place to buy, sell, and trade quality
								instruments and gear.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-bold mb-4 text-[var(--foreground)]'>
								Quick Links
							</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='/'
										className='text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors'>
										Home
									</Link>
								</li>
								<li>
									<Link
										href='/meet-the-team'
										className='text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors'>
										Meet the Team
									</Link>
								</li>
								<li>
									<Link
										href='/gallery'
										className='text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors'>
										Gallery
									</Link>
								</li>
								<li>
									<Link
										href='mailto:rcscustommusic@gmail.com'
										className='text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors'>
										Get In Touch
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className='text-xl font-bold mb-4 text-[var(--foreground)]'>
								Contact Info
							</h3>
							<address className='not-italic'>
								227 Courtyard Dr.
								<br />
								New Braunfels, TX 78130, USA
							</address>
							<p className='mt-2'>
								<a
									href='mailto:thereedbrothers@gmail.com'
									className='text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors'>
									thereedbrothers@gmail.com
								</a>
							</p>
							<p>
								<a
									href='tel:8308375553'
									className='text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors'>
									(830) 837-5553
								</a>
							</p>
						</div>
					</div>
					<div className='border-t border-gray-800 mt-8 pt-8 text-center'>
						<p> 2025 by RCS Guitars and Gear. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
