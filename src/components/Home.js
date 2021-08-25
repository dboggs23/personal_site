import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import fleur from '../assets/Fleur-de-lis-fill.svg'
import bike from '../assets/bike.svg'
import books from '../assets/books.svg'
import coffee from '../assets/coffee.svg'
import airplane from '../assets/airplane.svg'
import mountains from '../assets/mountains.svg'

const HomeStyled = styled.div`
	animation: FadeIn 0.9s 1;
	width: 500px;
	margin: 0 auto;

	@keyframes FadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;

	h1 {
		margin: 10px 0;
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-decoration-line: solid;
		text-decoration-color: var(--light-green);
	}
	h3 {
		margin-top: 30px;
		align-self: baseline;
	}
	h5 {
		margin: 30px 0;
	}
	img {
		margin-left: 5px;
		margin-bottom: 2.5px;
		width: 30px;
		height: auto;
	}
	.archHolder {
		display: flex;
		align-items: flex-end;
	}
	.interests-container {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin: 10px 0;

		.bike,
		.coffee,
		.plane,
		.mountains {
			position: relative;
		}
		.bike {
			top: 9px;
		}
		.coffee {
			bottom: 2px;
		}
		.plane {
			top: 1px;
		}
		.mountains {
			top: 2px;
		}
	}
	.interests {
		width: 50px;
	}
	.icons {
		display: flex;
		justify-content: space-between;
	}
`

function Home() {
	return (
		<HomeStyled className='garamond'>
			<Container>
				<h1>I'm Dalton.</h1>
				<div className='archHolder'>
					<h3>I'm a developer who lives in St. Louis.</h3>
					<img
						src={fleur}
						alt='A fleur de lis, which symbolizes the confluence of the Missouri and Mississippi rivers.'
					/>
				</div>
				<h5>
					I don't make computers go beep-boop. They already do that. I build
					things that make interacting with them nicer.
				</h5>
				<div>
					<h4>Minimalist clip art that represent my interests:</h4>
					<div className='interests-container'>
						<img
							className='interests books'
							src={books}
							alt='A shelf of books. If this were a true representation it would be fuller and leaning to the left.'
						/>
						<img className='interests bike' src={bike} alt='A neat bicycle' />
						<img
							className='interests coffee'
							src={coffee}
							alt='A piping cup of joe'
						/>
						<img
							className='interests plane'
							src={airplane}
							alt='A jet airliner'
						/>
						<img
							className='interests mountains'
							src={mountains}
							alt='Idyllic mountains that remind me of those in Colorado. '
						/>
					</div>
				</div>
				<div className='icons-container'>
					<h5>Some professional sort of links:</h5>
					<div className='icons'>
						<SocialIcon
							url='https://www.linkedin.com/in/dalton-boggs/'
							bgColor='black'
						/>
						<SocialIcon url='https://github.com/dboggs23' bgColor='black' />
					</div>
				</div>
			</Container>
		</HomeStyled>
	)
}

export default Home
