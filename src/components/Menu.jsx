import React from "react";
import { useCookies } from "react-cookie";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../styles/Menu.css";

function LoginButton() {
  return (
    <a
      href="https://github.com/login/oauth/authorize?client_id=c7c5ce32daad19cb2f37&redirect_uri=http://localhost:8080/callback"
      className="menu_button menu_button--login"
    >
      LOGIN
      <img className="menu_button_icon" src="icon_github.png" />
    </a>
  );
}

function ContributionButton() {
  return (
    <Link
      to="/contributions"
      className="menu_button menu_button--contributions"
    >
      CONTRIBUTIONS
      <img className="menu_button_icon" src="icon_contribution.png" />
    </Link>
  );
}

function MyReposButton() {
  return (
    <Link to="/myrepos" className="menu_button menu_button--myrepos">
      MY REPOS
      <img className="menu_button_icon" src="icon_myrepos.png" />
    </Link>
  );
}

function ReposButton() {
  return (
    <Link to="/" className="menu_button menu_button--repos">
      REPOS
      <img className="menu_button_icon" src="icon_repos.png" />
    </Link>
  );
}

function Menu(props) {
  const [cookies] = useCookies([]);

  return (
    <div className="menu">
      {!(cookies.token === undefined || cookies.token.error !== undefined) ? (
        <LoginButton />
      ) : (
        <>
          <ContributionButton />
          <MyReposButton />
          <ReposButton />
        </>
      )}
    </div>
  );
}

export default Menu;
