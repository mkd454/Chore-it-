import React, { Component } from "react";

import RoommateCard from "../components/roommatecard";
import Roommates from "../components/roommates";
import {AuthConsumer} from "../utils/Auth/authContext";
import Can from "../utils/Auth/Can";

class PostsList extends Component {

  render() {
    return (
      <AuthConsumer>
        {({user}) => (
          <div>
            <h2>Roommates</h2>
            <div className="card-columns">
              {Roommates.map(roommate => (
                <RoommateCard
                  key={roommate.id}
                  id={roommate.id}
                  name={roommate.name}
                  description={roommate.description}
                  ownerId={roommate.ownerId}
                  image={roommate.image}
                />
              ))}
            </div>
          </div>
        )}
      </AuthConsumer>
    )
  }
}

export default PostsList;