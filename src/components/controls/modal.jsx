import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.getStyles(),
      overlayVisible: false,
      modalVisible: false
    };
  }

  componentWillReceiveProps(newProps) {
    let visible = {};
    if (newProps.visible) {
      visible = {
        overlayVisible: true,
        modalVisible: true
      };
    } else {
      visible = {
        overlayVisible: false,
        modalVisible: false
      };
    }
    this.setState(visible);
  }

  getStyles = () => ({
    overlay: {
      background: 'rgba(0,0,0,0.6)',
      bottom: 0,
      display: 'block',
      left: 0,
      overflowY: 'auto',
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 9999999
    },
    wrapper: {
      bottom: 0,
      boxSizing: 'border-box',
      display: 'table',
      height: '100%',
      left: 0,
      position: 'absolute',
      right: 0,
      textAlign: 'center',
      top: 0,
      width: '100%'
    },
    subWrapper: {
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    modal: {
      margin: '0 auto'
    }
  })

  stopPropagation = (e) => {
    e.stopPropagation();
  }

  renderModal = () => {
    if (this.state.modalVisible) {
      return (
        <div
          role="presentation"
          style={this.state.styles.modal}
          className={this.props.className}
          onClick={this.stopPropagation}
        >
          {this.props.children}
        </div>
      );
    }
    return null;
  }

  renderContentOverlay = () => (
    <div
      role="presentation"
      style={this.state.styles.subWrapper}
      onClick={this.props.onClickOverlay}
    >
      {this.renderModal()}
    </div>
  )

  renderOverlay = () => {
    if (this.state.overlayVisible) {
      return (
        <div style={this.state.styles.overlay}>
          <div style={this.state.styles.wrapper}>
            {this.renderContentOverlay()}
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.renderOverlay()}
      </div>
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClickOverlay: PropTypes.func.isRequired
  // visible: PropTypes.bool
};

Modal.defaultProps = {
  className: 'modal'
};

export default Modal;
