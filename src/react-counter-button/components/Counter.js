import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, color, index, onIncrement, onDecrement, onSetColor }) => {
  return(
    <div
      className="Counter"
      onClick={() => onIncrement(index)}
      // onContextMenu는 마우스 오른쪽 버튼을 눌렀을 때 메뉴가 열리는 이벤트를 의미
      // e.preventDefault() 함수를 호출하면 메뉴가 열리는 것을 방지
      onContextMenu={(e) => {
        e.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={() => onSetColor(index)}
      style={{
        backgroundColor: color
      }}>
      {number}
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;