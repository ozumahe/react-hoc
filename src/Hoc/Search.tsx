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
      const { data, term } = this.state;

      let filteredData = data.filter((d) => {
        if (entity === "users") {
          const { name }: { name: string } = d;
          return name.indexOf(term) >= 0;
        }

        if (entity === "todos") {
          const { title }: { title: string } = d;
          return title.indexOf(term) >= 0;
        }
      });
      return (
        <>
          <h1>{entity}</h1>
          <input
            type="text"
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponent data={filteredData} />{" "}
        </>
      );
    }
  };
};

export default Search;
