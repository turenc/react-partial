import { Component, ReactNode } from "react";

export class ReactPartial<PartialComponent extends Component<PartialProps>, PartialProps, PartialState, OwnState> {
    private readonly partial: PartialComponent;

    constructor(partial: PartialComponent) {
        this.partial = partial;
    }

    get state(): PartialState & OwnState {
        return this.partial.state as PartialState & OwnState;
    }

    get props(): Readonly<PartialProps> & Readonly<{ children?: ReactNode }> {
        return this.partial.props;
    }

    setState = <K extends keyof PartialState & OwnState>(
        state: ((prevState: Readonly<PartialState & OwnState>, props: Readonly<PartialProps>) => (Pick<PartialState & OwnState, K> | PartialState & OwnState | null)) | (Pick<PartialState & OwnState, K> | PartialState & OwnState | null),
        callback?: () => void
    ) => {
        this.partial.setState(state, callback);
    }

    forceUpdate = (callback?: () => void) => {
        this.partial.forceUpdate();
    }
}

export abstract class ReactPartialProtected<ContextProvider extends Component<ContextProviderProps>, ContextProviderProps, ProtectedState> extends ReactPartial<ContextProvider, ContextProviderProps, ProtectedState, ProtectedState> {
    abstract getProviderValues?: (isDesignMode: boolean) => ProtectedState;
}