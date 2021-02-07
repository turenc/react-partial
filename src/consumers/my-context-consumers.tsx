import React, { PureComponent, ReactNode } from 'react'
import { MyContextConsumerA } from './consumer-a'
import { MyContextConsumerB } from './consumer-b'
import { MyContextConsumerC } from './consumer-c'

interface MyContextConsumersProps {}
interface MyContextConsumersState {}

class MyContextConsumers extends PureComponent<MyContextConsumersProps, MyContextConsumersState> {
    constructor(props: MyContextConsumersProps) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (<>
            <MyContextConsumerA></MyContextConsumerA>
            <MyContextConsumerB></MyContextConsumerB>
            <MyContextConsumerC></MyContextConsumerC>
            </>
        )
    }
}

export default MyContextConsumers
