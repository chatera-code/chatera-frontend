import React from 'react';
import LeftSidebar from './LeftSidebar';
import ChatContainer from './ChatContainer';
import RightSidebar from './RightSidebar';
import './ChateraUI.css';

function ChateraUI() {
  return (
    <div className="container">
      <LeftSidebar />
      <ChatContainer />
      <RightSidebar />
    </div>
  );
}

export default ChateraUI;
