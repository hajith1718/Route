import Radium from 'radium';
import React from 'react';

function Appz() {
const style1={
	':hover':{
	backgroundColor:'red'
	}
}
return (
	<div>
	<button style={style1}>example of radium</button>
	</div>
);
}

export default Radium(Appz);