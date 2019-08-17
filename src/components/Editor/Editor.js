import React from 'react';
import './Editor.css';
import AceEditor from 'react-ace';

import 'brace/mode/asciidoc';
import 'brace/theme/clouds_midnight';

export default class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {...this.props};
	}

	componentWillReceiveProps(props, a) {
		if(this.props.value !== props.value) {
			this.setState({...props});
		}
	}

	onChange(newValue) {
		this.props.onEdit(newValue);
	}

	render() {
		return(
			<AceEditor
				mode="asciidoc"
				theme="clouds_midnight"
				onChange={this.onChange.bind(this)}
				name="test"
				editorProps={{$blockScrolling: true}}
				height="100vh"
				width="50%"
				fontSize="20px"
				value={this.state.value}
			/>
		);
	}
}