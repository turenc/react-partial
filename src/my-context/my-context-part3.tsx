import { IMyContextProviderProps, MyContextProvider } from "./my-context-provider";
import { PartialProtectedContextProvider } from "../core/partial-context-provider";

export interface Part3 {
    x: string;
    y: number;
    z: Part3ZValue
}

export interface Part3ZValue {
    q: string;
    w: number;
}

export interface MyContextPart3State {
    part3Value: Part3;
    setPart3Value?: (part3Value: Part3) => void;
}

export class MyContextPart3 extends PartialProtectedContextProvider<MyContextProvider, IMyContextProviderProps, MyContextPart3State> {

    static defaultState: MyContextPart3State = {
        part3Value: { x: "xxx", y: 111, z: {q: "qqq", w: 222}}
    }

    getProviderValues = (): MyContextPart3State => {
        return {
            part3Value: this.state.part3Value,
            setPart3Value: this.setPart3Value
        };
    };

    setPart3Value = (part3Value: Part3) => {
        this.setState( { part3Value: part3Value} );
    };
}