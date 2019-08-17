import React from 'react';
import './Editor.css';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/abc';
import 'brace/theme/clouds_midnight';

export default class Editor extends React.Component {
	constructor(props) {
		super(props);
	}

	onChange(newValue) {
		console.log('change',newValue)
	}

	render() {
		return(
			<AceEditor
				mode="abc"
				theme="clouds_midnight"
				onChange={this.onChange}
				name="test"
				editorProps={{$blockScrolling: true}}
				height="100vh"
				width="50%"
				fontSize="20px"
			/>
		);
	}
}