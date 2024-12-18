import React from 'react';
import Warper from './Warper';
import Popup from 'reactjs-popup';

const SimpleMenu = () => (
  <div className="example-warper-start">
    <div className="popup-menu">
      <div className="menu-item">Menu item 1</div>
      <div className="menu-item">Menu item 2</div>
      <div className="menu-item">Menu item 3</div>
      <Popup
        trigger={<div className="menu-item"> Sub menu </div>}
        position="right top"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
      >
        <div className="popup-menu">
          <div className="menu-item">item 1</div>
          <div className="menu-item">item 2</div>
          <div className="menu-item">item 3</div>
        </div>
      </Popup>
      <div className="menu-item"> Menu item 4</div>
    </div>
  </div>
);

export default Warper(SimpleMenu);
