import React, { PureComponent, ReactNode } from 'react'
import { MyContextConsumerProps, withMyContextConsumer } from '../my-context/my-context';

interface MyContextConsumerCProps extends MyContextConsumerProps {}
interface MyContextConsumerCState {}

class MyContextConsumerC extends PureComponent<MyContextConsumerCProps, MyContextConsumerCState> {
    constructor(props: MyContextConsumerCProps) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        const c = this.props.myContext;
        return (
            <div>
                <h1>My Context Consumer C</h1>
                <p>My Context Consumer C Part 1: {this.props.myContext.part1Value}</p>
                <p>My Context Consumer C Part 2: {this.props.myContext.part2Value}</p>
                <p>My Context Consumer C Part 3: {JSON.stringify(this.props.myContext.part3Value)}</p>                
                <p>My Context Consumer C Part 3: <input type="text" value={this.props.myContext.part3Value.z.q} onChange={(e) => {
                    let part3temp = this.props.myContext.part3Value;
                    part3temp.z.q = e.target.value.toString()
                    c.setPart3Value && c.setPart3Value(part3temp); 
                    }}></input></p>
                <p>                
                <button onClick={() => {c.setPart1Value && c.setPart1Value("A"); }}>Set C To Part 1</button>
                <button onClick={() => {c.setPart2Value && c.setPart2Value("A"); }}>Set C To Part 2</button>
                <button onClick={() => {c.setPart3Value && c.setPart3Value({ x: "xxxxC", y: 888, z: {q: "qqqqC", w: 999}}); }}>Set C To Part 3</button>
                <button onClick={() => {
                    let part3temp = this.props.myContext.part3Value;
                    part3temp.z.q = "cccccccccccccc";
                    c.setPart3Value && c.setPart3Value(part3temp); 
                    }}>Set cccccccccccccc To Part 3</button>
                </p>
            </div>
        )
    }
}

const myContextConsumerC = withMyContextConsumer(MyContextConsumerC);
export { myContextConsumerC as MyContextConsumerC };
