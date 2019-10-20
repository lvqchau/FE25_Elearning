import React from 'react';
import withMouse from '../HOC/withMouse';

const Modal = props => {
  console.log(props);
  const test = 'abc';
  return (
    <div>
      {/* Button to Open the Modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#myModal"
      >
        Open modal
      </button>
      {/* The Modal */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">Modal body..</div>
            {/* Modal footer */}
            {/* Dùng props render giao diện  */}
            <div className="modal-footer">{props.renderFooter({ test })}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withMouse(Modal);
