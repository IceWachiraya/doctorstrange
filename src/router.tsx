import { LoaderFunctionArgs, createBrowserRouter, redirect } from "react-router-dom";
import TodoApp from "./TodoApp";
import HomePage from "./components/HomePage";
import App from "./App";
interface AuthProvider {
    isAuthenticated: boolean;
    username: null | string;
    signin(username: string): Promise<void>;
    signout(): Promise<void>;
  }
  
  /**
   * This represents some generic auth provider API, like Firebase.
   */
  export const fakeAuthProvider: AuthProvider = {
    isAuthenticated: false,
    username: null,
    async signin(username: string) {
      await new Promise((r) => setTimeout(r, 500)); // fake delay
      fakeAuthProvider.isAuthenticated = true;
      fakeAuthProvider.username = username;
    },
    async signout() {
      await new Promise((r) => setTimeout(r, 500)); // fake delay
      fakeAuthProvider.isAuthenticated = false;
      fakeAuthProvider.username = "";
    },
  };
  
function protectedLoader({request}:LoaderFunctionArgs){
    if(!fakeAuthProvider.isAuthenticated){
        return redirect("/");
    }
    return null;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    //   {
    //     path: "/todo",
    //     element: <TodoApp />,
    //   },
      {
        path:"/todo",
        loader:protectedLoader,
        Component:TodoApp,
      }
    ],
  },
]);

export default router;
