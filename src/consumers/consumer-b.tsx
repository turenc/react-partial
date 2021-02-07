import React, { PureComponent, ReactNode } from 'react'
import { MyContextConsumerProps, withMyContextConsumer } from '../my-context/my-context';

interface MyContextConsumerBProps extends MyContextConsumerProps {}
interface MyContextConsumerBState {}

class MyContextConsumerB extends PureComponent<MyContextConsumerBProps, MyContextConsumerBState> {
    constructor(props: MyContextConsumerBProps) {
        super(props)

        this.state = {
            
        }
    }

    shouldComponentUpdate(nextProps: MyContextConsumerBProps, nextState: MyContextConsumerBState): boolean {
        return false;
    }

    render(): ReactNode {
        const c = this.props.myContext;
        return (
            <div>
                <h1>My Context Consumer B</h1>
                <p>My Context Consumer B Part 1: {this.props.myContext.part1Value}</p>
                <p>My Context Consumer B Part 2: {this.props.myContext.part2Value}</p>
                <p>My Context Consumer B Part 3: {JSON.stringify(this.props.myContext.part3Value)}</p>
                <p>My Context Consumer B Part 3: <input type="text" value={this.props.myContext.part3Value.z.q} onChange={(e) => {
                    let part3temp = this.props.myContext.part3Value;
                    part3temp.z.q = e.target.value.toString()
                    c.setPart3Value && c.setPart3Value(part3temp); 
                    }}></input></p>
                <p>
                <button onClick={() => {c.setPart1Value && c.setPart1Value("B"); }}>Set B To Part 1</button>
                <button onClick={() => {c.setPart2Value && c.setPart2Value("B"); }}>Set B To Part 2</button>
                <button onClick={() => {c.setPart3Value && c.setPart3Value({ x: "xxxxB", y: 888, z: {q: "qqqqB", w: 999}}); }}>Set B To Part 3</button>
                <button onClick={() => {
                    let part3temp = this.props.myContext.part3Value;
                    part3temp.z.q = "bbbbbbbbbbbbb";
                    c.setPart3Value && c.setPart3Value(part3temp); 
                    }}>Set bbbbbbbbbbbbb To Part 3</button>
                </p>
            </div>
        )
    }
}

const myContextConsumerB = withMyContextConsumer(MyContextConsumerB);
export { myContextConsumerB as MyContextConsumerB };
