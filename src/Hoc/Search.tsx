import { Component } from "react";

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
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const data = await res.json();
        this.setState({ ...this.state, data });
      };
      fetchData();
    }
    render() {
      return <WrappedComponent data={this.state.data} />;
    }
  };
};

export default Search;
