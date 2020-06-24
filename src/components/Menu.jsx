import React from "react";
import "../styles/Menu.css";

function LoginButton() {
  return (
    <span className="menu_button menu_button--login">
      LOGIN
      <img className="menu_button_icon" src="icon_github.png" />
    </span>
  );
}

function ContributionButton() {
  return (
    <span className="menu_button menu_button--contributions">
      CONTRIBUTIONS
      <img className="menu_button_icon" src="icon_contribution.png" />
    </span>
  );
}

function MyReposButton() {
  return (
    <span className="menu_button menu_button--myrepos">
      MY REPOS
      <img className="menu_button_icon" src="icon_myrepos.png" />
    </span>
  );
}

function ReposButton() {
  return (
    <span className="menu_button menu_button--repos">
      REPOS
      <img className="menu_button_icon" src="icon_repos.png" />
    </span>
  );
}

function Menu(props) {
  return (
    <div className="menu">
      {props.login ? (
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
