import React from 'react';
import NavBar from 'components/Navbars/NavBar';

class Homepage extends React.Component {
	componentDidMount() {
		document.body.classList.toggle('index-page');
	}

	componentWillUnmount() {
		document.body.classList.toggle('index-page');
	}

	render() {
		return (
			<>
				<NavBar />
				<div className='wrapper'>
					{/* <PageHeader /> */}
					<div className='main'></div>
					{/* <Footer /> */}
				</div>
			</>
		);
	}
}

export default Homepage;
