import Text "mo:base/Text";

actor {
  stable var name : Text = "John Doe";
  stable var bio : Text = "Full-stack developer passionate about building innovative solutions.";
  stable var email : Text = "john.doe@example.com";
  stable var phone : Text = "+1 (555) 123-4567";
  stable var location : Text = "New York, NY";
  stable var profilePicture : Text = "https://media.licdn.com/dms/image/v2/C5603AQGthJL_DcMSIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1518390992422?e=1731542400&v=beta&t=X8tUjTEP9pJa61ZhxEj6qPhjLjnGxvaaRt6c4_H65So";

  stable var socialLinks : [(Text, Text)] = [
    ("GitHub", "https://github.com/johndoe"),
    ("LinkedIn", "https://linkedin.com/in/johndoe"),
    ("Twitter", "https://twitter.com/johndoe")
  ];

  public query func getName() : async Text {
    name
  };

  public query func getBio() : async Text {
    bio
  };

  public query func getContactInfo() : async (Text, Text, Text) {
    (email, phone, location)
  };

  public query func getSocialLinks() : async [(Text, Text)] {
    socialLinks
  };

  public query func getProfilePicture() : async Text {
    profilePicture
  };
}