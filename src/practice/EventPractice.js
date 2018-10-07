import React, { Component } from 'react';

/* state 초기 값은 공백 -> input에 value를 state에 있는 값으로 설정 -> onChange 이벤트는 setState로 state 업데이트 -> e.target.value로 message에는 입력한 텍스트 값이 저장됨
   -> 버튼을 누르면 -> onClick이벤트가 발생 -> state에 있는 값이 알람으로 뜬 후 -> setState로 message에 있는 값은 다시 공백  */
class EventPractice extends Component {
    state = {
        username: '',
        message: '',
        number: '',
    }

    handleChange = (e) => { // e 객체는 웹 브라우저의 네이티브 이벤트를 감싸는 객체
        this.setState({
            [e.target.name]: e.target.value // e.target.value: 앞으로 변할 인풋 값, [] 안에 있는 값을 key 값으로 사용
        });
    }

    handleClick = (e) => {
        alert(this.state.username + ': ' +this.state.message +this.state.number);
        this.setState({
            username:'',
            message: '',
            number: '',
        });
    }

    // 키(보드)를 눌렀을 때 발생하는 이벤트, 엔터키를 눌렀을 때 handleClick 메소드 호출
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return(
            <div>
                <h1>EventPractice</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='UserName'
                    vlaue={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='input anything'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <input
                    type='number'
                    name='number'
                    placeholder='input number'
                    value={this.state.number}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>complete</button>
            </div>
        )
    }
}

export default EventPractice;