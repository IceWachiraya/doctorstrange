import { createBrowserRouter } from "react-router-dom";
import TodoApp from "./TodoApp";
import HomePage from "./components/HomePage";
import App from "./App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path:"/",
            element:<HomePage/>,
        },
        {
            path:"/todo",
            element:<TodoApp/>
        }
      ]
    },

  ]);
  export default router;