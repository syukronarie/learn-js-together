import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "../pages/TodoPage/TodoPage";
import FollowersPage from "../pages/FollowersPage/FollowersPage";
import TodoLatest from "../components/TodoLatest/TodoLatest";

const SetupRouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodoPage />} />
				<Route path="/followers" element={<FollowersPage />} />
				<Route path="/todoLatest" element={<TodoLatest />} />
			</Routes>
		</BrowserRouter>
	);
};

export default SetupRouters;
