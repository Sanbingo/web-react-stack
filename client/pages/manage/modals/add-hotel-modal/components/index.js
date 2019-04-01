/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

// 动态引入组件
const FormComponent = Loadable({
  loader: () => import('./form'),
  loading: () => <p> Loading </p>,
});

class ModalComponent extends React.Component {
  render() {
    const { visible, closeModal, submitData } = this.props;
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <Modal
        title="标题"
        visible={visible}
        onCancel={() => closeModal()}
        onOk={() => submitData(123)}
      >
        <p>请输入你的姓名：</p>
        <FormComponent {...this.props} />
      </Modal>
    );
  }
}

export default ModalComponent;

ModalComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  submitData: PropTypes.func.isRequired,
};
