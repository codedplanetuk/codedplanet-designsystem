import React from 'react';
import { Modal, Button } from 'antd';
import { withRouter } from 'react-router-dom'

const openNotification = (description) => {
  Modal.warning({
    title: 'This is a warning message',
    content: description,
  });
};

const guidGenerator = () => {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const showConfirm = (description) => {
  Modal.confirm({
    title: 'Information',
    content: description,
    onOk() {
      console.log('OK');
    }
  });
};

const NavButton = withRouter((props) => {
  return (
    <Button
      className="mr-5" size="small" type="primary"
      onClick={() => props.history.push(`/${props.route}`) }>
        {props.name}
    </Button>
  )
})

export {openNotification, showConfirm, guidGenerator, NavButton };
