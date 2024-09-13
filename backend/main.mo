import Nat "mo:base/Nat";
import Time "mo:base/Time";

import Text "mo:base/Text";
import Int "mo:base/Int";

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

  stable var skills : [Text] = [
    "JavaScript", "React", "Node.js", "Python", "Docker", "AWS"
  ];

  stable var projects : [(Text, Text, Text)] = [
    ("E-commerce Platform", "Built a scalable e-commerce platform using React and Node.js", "https://example.com/project1"),
    ("AI Chatbot", "Developed an AI-powered chatbot using Python and TensorFlow", "https://example.com/project2"),
    ("Mobile App", "Created a cross-platform mobile app using React Native", "https://example.com/project3")
  ];

  stable var testimonials : [(Text, Text, Text)] = [
    ("Jane Smith", "CEO, Tech Innovators", "John is an exceptional developer with a keen eye for detail."),
    ("Mike Johnson", "CTO, StartUp Co", "Working with John was a pleasure. His technical skills are top-notch."),
    ("Sarah Lee", "Project Manager, Big Corp", "John's ability to deliver high-quality work on time is impressive.")
  ];

  stable var timeAllocation : [(Text, Int)] = [
    ("Work", 85),
    ("Gym", 5),
    ("Family", 5),
    ("Learning", 3),
    ("Hobbies", 2)
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

  public query func getSkills() : async [Text] {
    skills
  };

  public query func getProjects() : async [(Text, Text, Text)] {
    projects
  };

  public query func getTestimonials() : async [(Text, Text, Text)] {
    testimonials
  };

  public query func getTimeAllocation() : async [(Text, Int)] {
    timeAllocation
  };
}