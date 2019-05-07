// Rules subject to change - Mary Dang

const rules = {
  visitor: {
    static: ["posts:list", "home-page:visit"] /////////////REMEMBER TO CHANGE POSTLIST
  },
  tenant: {
    static: [
      "posts:list", /////////////REMEMBER TO CHANGE
      "posts:create",
      "users:getSelf",
      "home-page:visit",
      "dashboard-page:visit"
    ],
    dynamic: {
      "posts:edit": ({userId, postOwnerId}) => { /////////////REMEMBER TO CHANGE
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      }
    }
  },
  admin: {
    static: [
      "posts:list", /////////////REMEMBER TO CHANGE
      "posts:create",
      "posts:edit",
      "posts:delete",
      "users:get",
      "users:getSelf",
      "home-page:visit",
      "dashboard-page:visit"
    ]
  }
};

export default rules;