import "./App.css";
import React from "react";
import EntryForm from "./component/EntryForm";
import ViewTable from "./component/ViewTable";
import { Provider } from "react-redux";
import store from "./store";
import SearchBar from "./component/SearchBar";

function App() {
  return (
    <Provider store={store}>
      <section className="container" style={{ width: "70%" }}>
        <EntryForm />
        <SearchBar />
        <ViewTable />
      </section>
    </Provider>
  );
}

export default App;
