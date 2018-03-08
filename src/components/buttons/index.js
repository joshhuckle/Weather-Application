// import preact
import { h, render, Component } from 'preact';

export default class Button extends Component {

	// rendering a function when the button is clicked
	render({clickFunction}) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
			<div>
				<button onClick={clickFunction}>
					<img src={"../../assets/img/today.png"} />
				</button>
				<button onClick={clickFunction}>
					<img src={"../../assets/img/week.png"} />
				</button>
			</div>

		);
	}
}
