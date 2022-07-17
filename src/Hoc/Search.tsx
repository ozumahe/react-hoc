import { Component, ComponentType } from "react";

interface State {
  data: [];
  term: string;
}

const Search = (WrappedComponent: any, entity: string) => {
  return class extends Component {
    state: State = {
      data: [],
      term: "",
    };

    componentDidMount() {
      (async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const data = await res.json();
        this.setState({ ...this.state, data });
      })();
    }
    render() {
      return <WrappedComponent data={this.state.data} />;
    }
  };
};

export default Search;
