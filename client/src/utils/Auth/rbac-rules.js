// Rules subject to change - Mary Dang

const rules = {
  visitor: {
    static: ["posts:list", "home-page:visit"]
  },
  tenant: {
    static: [
      "posts:list",
      "posts:create",
      "users:getSelf",
      "home-page:visit",
      "dashboard-page:visit"
    ],
    dynamic: {
      "posts:edit": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      }
    }
  },
  admin: {
    static: [
      "posts:list",
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