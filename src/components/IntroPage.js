import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Gradient = styled.div`
	height: 100vh;
	width: 100vw;
	background: linear-gradient(269deg, #379683, #05386b, #8ee4af);
	background-size: 600% 600%;

	display: flex;
	justify-content: center;
	align-items: center;
	animation: StartingAnimation 6s infinite;

	.intro {
		text-align: center;
		color: var(--black);
		background-color: hsla(136, 0%, 91%, 0.85);
		opacity: 0.7;
		padding: 5rem;
		width: 20%;
		box-shadow: 0 0 5rem 5rem hsla(136, 0%, 91%, 0.85);
		cursor: pointer;
		/*background-image: -webkit-gradient(
			linear,
			left bottom,
			left top,
			color-stop(0.33, rgb(14, 173, 173)),
			color-stop(0.67, rgb(0, 255, 255))
		);
		background-image: -moz-linear-gradient(
			center bottom,
			rgb(14, 173, 173) 33%,
			rgb(0, 255, 255) 67%
		);*/
	}
	.intro:hover {
		text-decoration-line: underline;
		text-decoration-color: var(--black);
	}
	@keyframes StartingAnimation {
		0% {
			background-position: 0% 48%;
		}
		50% {
			background-position: 100% 53%;
		}
		100% {
			background-position: 0% 48%;
		}
	}
`

const OpacityContainer = styled.div`
	height: 100vh;
	width: 100vw;
	animation: ${(props) => (props.clickedThrough ? 'MaxOpacity 1s 1' : '')};
	@keyframes MaxOpacity {
		100% {
			opacity: 0;
		}
	}
`

function IntroPage() {
	let history = useHistory()
	const [clickedThrough, setClickedThrough] = useState(false)

	function setVisited() {
		if (process.env.NODE_ENV === 'production') {
			localStorage.setItem('visited', true)
		}
		window.setTimeout(() => {
			history.push('/home')
		}, 1000)
		setClickedThrough(true)
	}

	return (
		<OpacityContainer clickedThrough={clickedThrough}>
			<Gradient className={`introContainer`}>
				<p onClick={setVisited} className='intro'>
					Hello!
				</p>
			</Gradient>
		</OpacityContainer>
	)
}

export default IntroPage
