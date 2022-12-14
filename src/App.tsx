import React from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { LaunchDashboard } from "./screens/Launchdashboard";

// import GetUsers from "./Components/GetUsers";
// import Form from "./Components/Form";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphql error ${message}`);
//     });
//   }
// });

const link = from([
  new HttpLink({ uri: "https://api.spacex.land/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header flex justify-center items-center">
          SpaceX
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <div className="w-full h-10 pt-32 text-5xl text-cyan-600 mb-20 font-bold text-center">
          SpaceX Past Launches
        </div>
        <LaunchDashboard />
        <body className="app-body "></body>
      </div>
    </ApolloProvider>
  );
}

export default App;
