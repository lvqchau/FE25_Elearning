import React from 'react';
import Modal from '../../Components/Modal';
import MouseEvent from '../../RenderProps/MouseEvent';
import AddCourse from './AddCourse';

const Admin = () => {
  return (
    <div className="ml-5">
      Admin page
      <AddCourse />
      {/* <Modal
        renderFooter={props => {
          console.log(props);
          return (
            <>
              <button>Click</button>
              <button>Thoat</button>
              <button>Them</button>
              <button>{props.test}</button>
            </>
          );
        }}
      />
      <MouseEvent
        render={position => (
          <div style={{ width: '100%', height: '300px', background: 'red' }}>
            Position: ({position.x},{position.y})
          </div>
        )}
      /> */}
    </div>
  );
};

export default Admin;
