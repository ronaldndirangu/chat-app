import React, { Component } from 'react';
import { postMessage } from '../../redux/actions/messageActions';
import { connect } from 'react-redux';

class Input extends Component {
  state = {
    message: ''
  };

  _onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  _handleKeyPress = (e) => {
    const { postMessage } = this.props;
    if (e.key === 'Enter' && this.state.message.length ) {
      const msg = {
        message: this.state.message,
        createdAt: new Date()
      }
      postMessage(msg);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Write something and press enter to send...."
            onChange={this._onChange}
            onKeyPress={this._handleKeyPress}
            name="message"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  postMessage
};

export default connect(null, mapDispatchToProps)(Input);
