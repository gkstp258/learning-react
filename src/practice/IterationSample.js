import React, { Component } from 'react';

class IterationSample extends Component {
    
    state = {
        lines: ['abc','123','가나다'],
        line: '',
    };

    handleChnage = (e) => {
        this.setState({
            line: e.target.value,
        })
    }

    handleInsert = () => {
        // lines 배열에 값을 추가하고, line 값을 초기화
        this.setState({
            lines: this.state.lines.concat(this.state.line),
            line: '',
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleInsert();
        }
    }

    handleRemove = (index) => {
        // 편의상 line의 레퍼런스를 미리 만듬
        const { lines } = this.state;

        /* 배열을 나누는 내장 함수 slice와
            전개 연산자(...)를 사용해 index번째 값을 제외한 값들을
            배열에 넣어줌*/

            this.setState({
               /* lines: [
                    ...lines.slice(0, index),   // 배열의 0부터 주어진 index 전까지 원소들을 가진 새 배열을 만듬
                    ...lines.slice(index + 1, lines.length) // index + 1부터 마지막까지 원소들을 가진 새 배열을 만듬
                ] */

                // filter로 index번째를 제외한 원소만 있는 새 배열 생성
                lines: lines.filter((item, i) => i !== index )
            });
    }
    
    render() {
        const lineList = this.state.lines.map((line,index) => (
            <li key={index} onDoubleClick={() => this.handleRemove(index)}>{line}</li>  // index 값을 함수의 인수로 설정하기 위해 새 함수를 만듬
        ))
        return(
            <div>
                <input
                    onChange={this.handleChnage}
                    value={this.state.line}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {lineList}
                </ul>
            </div>       
        )
    }
}

export default IterationSample;