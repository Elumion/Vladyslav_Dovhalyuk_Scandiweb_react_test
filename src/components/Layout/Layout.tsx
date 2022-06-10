import React from "react";

type PropsLayout = { navsArray: string[] };

export class Layout extends React.Component<
  { children: React.ReactElement[] },
  {}
> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.setState({ data: 43 });
  }

  render(): React.ReactNode {
    console.log(this.state, this.props);
    return <div>{this.props.children}</div>;
  }
}
