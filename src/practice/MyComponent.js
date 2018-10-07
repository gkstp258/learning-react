import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'React',
        age: 19,
      }
    
      static propTypes = {
        name: PropTypes.string.isRequired, // name props 타입을 문자열로 설정
        age: PropTypes.number.isRequired // 필수적으로 존재해야 하며, 숫자
      }

    state = {
        number: 0,
    }

    render() {
        return(
            <div>
                <h1>Hello, My name is {this.props.name}!</h1>
                <h2>My age is {this.props.age}</h2>
                <h3>My number is {this.state.number}</h3>
                <button onClick={() => this.setState({ //버튼을 누를때마다 this.setState()를 통해 number에 계속 1을 더해줌.
                    number: this.state.number + 1
                })
                }>더하기</button>
                <p></p>
                <button onClick={() => this.setState({
                    number: this.state.number - 1
                })
                }>빼기</button>
            </div>
        )
    }
}

export default MyComponent;