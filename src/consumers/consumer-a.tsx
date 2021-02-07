import React, { PureComponent, ReactNode } from 'react'
import { MyContextConsumerProps, withMyContextConsumer } from '../my-context/my-context';

interface MyContextConsumerAProps extends MyContextConsumerProps {}
interface MyContextConsumerAState {}

class MyContextConsumerA extends PureComponent<MyContextConsumerAProps, MyContextConsumerAState> {
    constructor(props: MyContextConsumerAProps) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        const c = this.props.myContext;
        return (
            <div>
                <h1>My Context Consumer A</h1>
                <p>My Context Consumer A Part 1: {this.props.myContext.part1Value}</p>
                <p>My Context Consumer A Part 2: {this.props.myContext.part2Value}</p>
                <p>My Context Consumer A Part 3: {JSON.stringify(this.props.myContext.part3Value)}</p>
                <p>My Context Consumer A Part 3: <input type="text" value={this.props.myContext.part3Value.z.q} onChange={(e) => {
                    let part3temp = this.props.myContext.part3Value;
                    part3temp.z.q = e.target.value.toString()
                    c.setPart3Value && c.setPart3Value(part3temp); 
                    }}></input></p>
                <p>
                <button onClick={() => {c.setPart1Value && c.setPart1Value("A"); }}>Set A To Part 1</button>
                <button onClick={() => {c.setPart2Value && c.setPart2Value("A"); }}>Set A To Part 2</button>
                <button onClick={() => {c.setPart3Value && c.setPart3Value({ x: "xxxxA", y: 888, z: {q: "qqqqA", w: 999}}); }}>Set A To Part 3</button>
                <button onClick={() => {
                    let part3temp = this.props.myContext.part3Value;
                    part3temp.z.q = "aaaaaaaaaaaaaa";
                    c.setPart3Value && c.setPart3Value(part3temp); 
                    }}>Set aaaaaaaaaaaaaa To Part 3</button>
                </p>
            </div>
        )
    }
}

const myContextConsumerA = withMyContextConsumer(MyContextConsumerA);
export { myContextConsumerA as MyContextConsumerA };
