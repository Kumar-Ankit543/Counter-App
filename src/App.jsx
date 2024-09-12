import React, { Suspense, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/count";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Landing = React.lazy(() => import("./pages/Landing"));

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
      <IsEven></IsEven>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function IsEven() {
  const even = useRecoilValue(countAtom);
  return <div>{even % 2 == 0 ? "It is even" : "It is odd"}</div>;
}

function Button() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        Decrease Count
      </button>
    </div>
  );
}

export default App;
