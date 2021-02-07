import { IMyContextState } from "./my-context";
import { IMyContextProviderProps, MyContextProvider } from "./my-context-provider";
import { PartialContextProvider } from "../core/partial-context-provider";

export interface MyContextPart1State {
    part1Value: string;
    setPart1Value?: (part1Value: string) => void;
}

export class MyContextPart1 extends PartialContextProvider<MyContextProvider, IMyContextProviderProps, IMyContextState, MyContextPart1State> {

    static defaultState: MyContextPart1State = {
        part1Value: "Default part 1 value"
    }

    getProviderValues = (): MyContextPart1State => {
        return {
            part1Value: this.state.part1Value,
            setPart1Value: this.setPart1Value
        };
    };

    setPart1Value = (part1Value: string) => {
        this.setState( { part1Value: part1Value });
    };
}