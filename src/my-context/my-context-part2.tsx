import { IMyContextProviderProps, MyContextProvider } from "./my-context-provider";
import { PartialProtectedContextProvider } from "../core/partial-context-provider";

export interface MyContextPart2State {
    part2Value: string;
    setPart2Value?: (part2Value: string) => void;
}

export class MyContextPart2 extends PartialProtectedContextProvider<MyContextProvider, IMyContextProviderProps, MyContextPart2State> {

    static defaultState: MyContextPart2State = {
        part2Value: "Default part 2 value"
    }

    getProviderValues = (): MyContextPart2State => {
        return {
            part2Value: this.state.part2Value,
            setPart2Value: this.setPart2Value
        };
    };

    setPart2Value = (part2Value: string) => {
        this.setState( { part2Value: part2Value });
    };
}