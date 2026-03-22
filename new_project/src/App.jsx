import React from 'react'
import { Routes, Route } from "react";
import Login from './components/Auth/Login';
import Hearder from './components/other/Hearder';
import TaskListNumber from './components/other/TaskListNumber';

export default function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Login />} />
      </Routes> */}
      {/* <Login /> */}
      <Hearder />
      <TaskListNumber />
    </>
  )
}
