import React from 'react';
import './App.css';
import Editor from '../Editor';
import Jpeg from '../Jpeg';
import king from '../../assets/images/king.jpg';
import { chunk, hexToBase64 } from '../../utilities/helpers';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', uri: ''};
  }

  handleImageChange = (uri) => {
    let croppedUri = uri.slice(23);
    let value = atob(croppedUri);
    var HEX = '';
    for(let i=0; i<value.length; i++) {
      let _hex = value.charCodeAt(i).toString(16);
      HEX += (_hex.length===2?_hex:'0'+_hex);
    }
    HEX = HEX.toUpperCase();
    HEX = chunk(HEX, 8, "\n");
    
    this.setState({value: HEX});
  }

  handleEditorChange = (value) => {
    let v = value.split('\n').join('').split(' ').join('');
    let BASE64 = hexToBase64(v);
    BASE64 = "data:image/jpeg;base64,".concat(BASE64);

    this.setState({uri: BASE64});
  }

  render() {
    return (
      <div className="App">
        <Editor value={this.state.value} onEdit={this.handleEditorChange} />
        <Jpeg uri={this.state.uri} image={king} onEdit={this.handleImageChange} />
      </div>
    );
  }
}