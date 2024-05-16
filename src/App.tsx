import React from "react";
import "./App.css";
import { Button } from "antd";
import { Outlet } from "react-router-dom";
import Layout from "@/components/Layout";

function App() {
  return (
    <>
      <div className="App">
        <Button type="primary">Button</Button>
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </>
  );
}

export default App;
