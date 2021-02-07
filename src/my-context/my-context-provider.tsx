import { Component } from "react";
import { DefaultMyContextState, IMyContextState, MyContext } from "./my-context";
import { MyContextPart1 } from "./my-context-part1";
import { MyContextPart2 } from "./my-context-part2";
import { MyContextPart3 } from "./my-context-part3";

export interface ISelectedDisplayItemInfo {
  kuikaId: string;
}

export interface IMyContextProviderProps {
  myContextText: string;
}

export class MyContextProvider extends Component<IMyContextProviderProps, IMyContextState> {

  public part1: MyContextPart1;
  public part2: MyContextPart2;
  public part3: MyContextPart3;

  constructor(props: IMyContextProviderProps) {
    super(props);
    this.state = DefaultMyContextState;
    this.part1 = new MyContextPart1(this);
    this.part2 = new MyContextPart2(this);
    this.part3 = new MyContextPart3(this);
  }

  getMyContextProviderValues = () => {
    return {
      ...this.part1.getProviderValues(), 
      ...this.part2.getProviderValues(), 
      ...this.part3.getProviderValues()
    };
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <h1>My Context Provider</h1>
        <p>My Context Provider Part 1: {this.state.part1Value}</p>
        <p>My Context Provider Part 2: {this.state.part2Value}</p>
        <p>My Context Provider Part 3: {JSON.stringify(this.state.part3Value)}</p>
        <p>My Context Provider Part 3: <input type="text" value={this.state.part3Value.z.q} onChange={(e) => {
                    let part3temp = this.state.part3Value;
                    part3temp.z.q = e.target.value.toString()
                    this.part3 && this.part3.setPart3Value(part3temp); 
                    }}></input></p>
        <p>
        <button onClick={() => {this.part1.setPart1Value && this.part1.setPart1Value("P"); }}>Set P To Part 1</button>
        <button onClick={() => {this.part2.setPart2Value && this.part2.setPart2Value("P"); }}>Set P To Part 2</button>
        <button onClick={() => {this.part3.setPart3Value && this.part3.setPart3Value({ x: "xxxxP", y: 888, z: {q: "qqqqP", w: 999}}); }}>Set P To Part 3</button>
        <button onClick={() => {
          let part3temp = this.state.part3Value;
          part3temp.z.q = "pppppppppppppppppp";
          this.part3.setPart3Value && this.part3.setPart3Value(part3temp); 
        }}>Set pppppppppppppppppp To Part 3</button>
        </p>
        <MyContext.Provider value={this.getMyContextProviderValues()}>{this.props.children}</MyContext.Provider>
      </div>
    );
  }
}