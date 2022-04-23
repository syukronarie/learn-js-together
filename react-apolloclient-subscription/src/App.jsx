import React from "react";
import Banner from "./components/Banner/Banner";
import SetupRouters from "./routes/index";
import "./App.css";

import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import client from "./libs/client";
import store, { persistor } from "./store";

function App() {
	return (
		<>
			<div className="App">
				<ApolloProvider client={client}>
					<Provider store={store}>
						<PersistGate loading={null} persistor={persistor}>
							<Banner />
							<SetupRouters />
						</PersistGate>
					</Provider>
				</ApolloProvider>
			</div>
		</>
	);
}

export default App;
