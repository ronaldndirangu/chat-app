import React, { Component } from 'react';
import './chats.scss';
import Input from '../../components/chat/Input';
import { connect } from 'react-redux';
import { getChats } from '../../redux/actions/chatActions';
import Notifications from './Notifications';

class Chats extends Component {
  componentDidMount() {
    const { getChats } = this.props;
    getChats();
  }

  render() {
    const { chats } = this.props;
    return (
      <div className="main-container container">
        <div
          className="panel panel-container"
        >
          <h1 className="panel-heading panel-container__heading">ChatRoom</h1>
          <div className="panel-block panel-messages">
            {
              chats && chats.map(chat => {
                return (
                  <div key={chat.id} className="panel-messages__message">{chat.message}</div>
                );
              })
            }
          </div>
          <Input />
        </div>
        <div className="notifications-container">
            <Notifications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chats: state.chats.chats
})

const mapDispatchToProps = {
  getChats
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
