import React, { Component } from 'react';
import './chats.scss';

class Chats extends Component {
  state = {
    chats: [
      { id: 1, message: 'Hey there I am new here', createdAt: '2 hours ago' },
      { id: 2, message: 'Welcome to the app Sean', createdAt: '2 hours ago' }
    ]
  };

  render() {
    return (
      <div
        className="panel container panel-container"
      >
        <h1 className="panel-heading panel-container__heading">ChatRoom</h1>
        <div className="panel-block panel-messages">
          <div className="panel-messages__message">Chat message 1</div>
          <div className="panel-messages__message">Chat message 2</div>
          <div className="panel-messages__message">Chat message 3</div>
          <div className="panel-messages__message">Chat message 4</div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="input is-link"
              type="text"
              placeholder="Write something and press enter to send...."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chats;
