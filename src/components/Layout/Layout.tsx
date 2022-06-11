import React from "react";
import { QUERY_CATEGORIES } from "./query";
type PropsLayout = { navsArray: string[] };

export class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  async componentWillMount() {
    const axios = require("axios").default;
    const query = {
      operationName: "getCategories",
      query: `query getCategories ${QUERY_CATEGORIES}`,
      variables: {},
    };
    const s = await axios({
      url: "http://localhost:4000/",
      method: "get",
      data: JSON.parse(JSON.stringify(query)),
    });
    // axios({
    //   url: endpoint,
    //   method: "post",
    //   headers: headers,
    //   data: graphqlQuery,
    // });
    console.log(s);
  }

  componentDidMount() {
    this.setState({ data: 43 });
  }

  render(): React.ReactNode {
    console.log(this.state, "props: ", this.props);
    return (
      <>
        <div>{this.props.children}</div>;
      </>
    );
  }
}
