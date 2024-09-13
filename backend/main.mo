import Text "mo:base/Text";

actor {
  stable var name : Text = "John Doe";
  stable var bio : Text = "Full-stack developer passionate about building innovative solutions.";
  stable var email : Text = "john.doe@example.com";
  stable var phone : Text = "+1 (555) 123-4567";
  stable var location : Text = "New York, NY";

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
}