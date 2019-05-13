import React, { Component } from "react";
import NavBar from "../ProfileNav/NavBar";
import YourTasks from "../../pages/yourtasks";
import Group from "../../pages/group";

class ProfileContainer extends React.Component {
  state = {
    currentPage: "yourtasks"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "yourtasks") {
      return <YourTasks />;
    } else if (this.state.currentPage === "group") {
      return <Group />;
    }
  };

  render() {
    return(
      <div>
        <NavBar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    )
  }
}

export default ProfileContainer;
