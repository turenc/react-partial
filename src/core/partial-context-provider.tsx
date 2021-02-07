import { Component } from "react";
import { ReactPartial, ReactPartialProtected } from "./react-partial-component";

export abstract class PartialContextProvider<ContextProvider extends Component<ContextProviderProps>, ContextProviderProps,ContextProviderState, ProtectedState> extends ReactPartial<ContextProvider, ContextProviderProps, ContextProviderState, ProtectedState> {

    abstract getProviderValues?: (isDesignMode: boolean) => ProtectedState;
}

export abstract class PartialProtectedContextProvider<ContextProvider extends Component<ContextProviderProps>, ContextProviderProps, ProtectedState> extends ReactPartialProtected<ContextProvider, ContextProviderProps, ProtectedState> {

    abstract getProviderValues?: (isDesignMode: boolean) => ProtectedState;
}