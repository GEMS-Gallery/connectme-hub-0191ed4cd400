import { backend } from "declarations/backend";

async function loadPersonalInfo() {
  try {
    const name = await backend.getName();
    const bio = await backend.getBio();
    const [email, phone, location] = await backend.getContactInfo();
    const socialLinks = await backend.getSocialLinks();
    const profilePicture = await backend.getProfilePicture();
    const skills = await backend.getSkills();
    const projects = await backend.getProjects();
    const testimonials = await backend.getTestimonials();

    document.getElementById("name").textContent = name;
    document.getElementById("bio").textContent = bio;
    document.getElementById("profile-picture").src = profilePicture;

    const contactInfoElement = document.getElementById("contact-info");
    contactInfoElement.innerHTML = `
      <p>${email}</p>
      <p>${phone}</p>
      <p>${location}</p>
    `;

    const skillsListElement = document.getElementById("skills-list");
    skills.forEach((skill) => {
      const span = document.createElement("span");
      span.textContent = skill;
      skillsListElement.appendChild(span);
    });

    const projectsListElement = document.getElementById("projects-list");
    projects.forEach(([title, description, link]) => {
      const projectItem = document.createElement("div");
      projectItem.className = "project-item";
      projectItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${link}" target="_blank" rel="noopener noreferrer">View Project</a>
      `;
      projectsListElement.appendChild(projectItem);
    });

    const testimonialsListElement = document.getElementById("testimonials-list");
    testimonials.forEach(([name, position, text]) => {
      const testimonialItem = document.createElement("div");
      testimonialItem.className = "testimonial-item";
      testimonialItem.innerHTML = `
        <p>"${text}"</p>
        <p><strong>${name}</strong>, ${position}</p>
      `;
      testimonialsListElement.appendChild(testimonialItem);
    });

    const socialLinksElement = document.getElementById("social-links");
    socialLinks.forEach(([platform, url]) => {
      const a = document.createElement("a");
      a.href = url;
      a.textContent = platform;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      socialLinksElement.appendChild(a);
    });
  } catch (error) {
    console.error("Error loading personal information:", error);
  }
}

function setupContactForm() {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const message = document.getElementById("message-input").value;
    
    // Here you would typically send this data to a backend service
    console.log("Form submitted:", { name, email, message });
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
  });
}

window.addEventListener("load", () => {
  loadPersonalInfo();
  setupContactForm();
});