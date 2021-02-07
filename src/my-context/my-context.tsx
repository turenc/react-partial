import React from "react";
import { MyContextPart1, MyContextPart1State } from "./my-context-part1";
import { MyContextPart2, MyContextPart2State } from "./my-context-part2";
import { MyContextPart3, MyContextPart3State } from "./my-context-part3";

export type IMyContextState = MyContextPart1State & MyContextPart2State & MyContextPart3State;

export const DefaultMyContextState: IMyContextState = {
  ...MyContextPart1.defaultState, 
  ...MyContextPart2.defaultState,
  ...MyContextPart3.defaultState,
}

export const MyContext = React.createContext<IMyContextState>(DefaultMyContextState);

MyContext.displayName = "MyContext";

export const withMyContextConsumer = (Component: any) => {
  return function ConnectedComponent<TConnectedComponentProps>(props: TConnectedComponentProps) {
    return <MyContext.Consumer>{(myContext: IMyContextState) => <Component {...props} myContext={myContext} />}</MyContext.Consumer>;
  };
};

export interface MyContextConsumerProps {
  myContext: IMyContextState;
}