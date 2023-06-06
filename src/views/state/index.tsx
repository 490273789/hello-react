import React from 'react';

interface StateMap {
  number: number;
  age: number;
  money: number;
}
export default class State extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      number: 1,
      age: 30,
      money: 0
    };
    // setTimeout(() => {
    //   this.setState({ number: this.state.number + 1 });
    //   console.log('我是同步的setState：', this.state.number);
    // }, 1000);
  }
  componentDidMount() {
    this.setState({
      number: 10
    });
    console.log('number1 ', this.state.number);

    setTimeout(() => {
      this.setState({
        number: 11
      });
      console.log('setTimeout1 ', this.state.number);
      this.setState({
        number: 12
      });
      console.log('setTimeout2 ', this.state.number);
    });
  }

  handleChangeNumber() {
    // 如果想要提前获取异步结果,方法1
    // const newNumber = this.state.number + 1;
    // this.setState({ number: newNumber });
    // 方法2
    this.setState({ number: this.state.number + 1 }, () => {
      console.log('state:', this.state.number);
    });
    console.log('我是异步的setState：', this.state.number);
  }

  handleChangeMoney() {
    this.setState((state: StateMap) => ({ money: state.money + 1 }));
    this.setState((state: StateMap) => ({ money: state.money + 1 }));
    this.setState((state: StateMap) => ({ money: state.money + 1 }));
    console.log('我是异步的setState：', this.state.money);
  }

  handleChangeAge() {
    this.setState({ age: this.state.age + 1 });
    this.setState({ age: this.state.age + 1 });
    this.setState({ age: this.state.age + 1 });
  }

  render() {
    console.log('render');
    return (
      <>
        <h1 className="content_title">状态和组件传值</h1>
        <div className="common_block">
          <div>number:{this.state.number}</div>
          <div
            className="common_button"
            onClick={() => this.handleChangeNumber()}
          >
            改变number
          </div>
        </div>

        <div className="common_block">
          <div>age:{this.state.age}</div>
          <div className="common_button" onClick={() => this.handleChangeAge()}>
            多次改变age
          </div>
          <div className="comment_part">
            1、多次调用state.age+1,react呢不会用Object.assign()进行合并，最终只会+1，页面也只会渲染一次。
          </div>
          <div className="comment_part">
            2、同步和异步的问题：在18.x以下的版本写在事件中的setState是异步的，写在setTimeout中的setState是同步的，在setTimeout中写多个setState页面也会选多次。
          </div>
          <div className="comment_part">
            3、同步和异步的问题：在18.x版本都是异步的，react18尽可能的都了批量处理，写多个setState会进行批量处理页面只会渲染一次。
          </div>
        </div>
        <div className="common_block">
          <div>money:{this.state.money}</div>
          <div
            className="common_button"
            onClick={() => this.handleChangeMoney()}
          >
            改变money
          </div>
          <div className="comment_part">
            1、用回调函数的方式调用三次，都会执行，最终+3，渲染只会渲染一次
          </div>
        </div>
      </>
    );
  }
}
