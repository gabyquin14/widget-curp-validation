import { lazy } from "react";

const Widget = lazy(() => import("./components/template/Widget"));

function App() {
  return <Widget />;
}

export default App;
