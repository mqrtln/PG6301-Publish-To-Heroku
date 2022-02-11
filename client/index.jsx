import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
}

function Login() {
  return (
    //<form>
    // <h1>Login</h1>
    // <div>
    //  Username: <input />
    //</div>
    //<div>
    // Password <input type="password" />
    // </div>
    //<button>Submit</button>
    //</form>
    <>
      <h1>Bei Bandre HAr du det gøy med afk spillet ditt???</h1>
      <p>
        HAAAAAAAAAAAAAHAHAHAHAHHAAHAHAHHAHAHAHAHAHAHHAHAHAHAHAHAHHAHAHAHAHHAHAHAH
      </p>
      <h2>peepee</h2>
    </>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/*"} element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
