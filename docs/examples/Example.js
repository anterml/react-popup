import React from 'react';
import Popup from '../../src/index';
//

export default () => (
  <Popup
    trigger={<button> type="button" Trigger </button>}
    position="right center"
    closeOnDocumentClick
  >
    <div>
      some text
      <Popup
        trigger={<button> type="button" testt </button>}
        position="right center"
        triggerOn="hover"
        style={{ padding: '5px' }}
      >
        <span>some text</span>
      </Popup>
    </div>
  </Popup>
);
