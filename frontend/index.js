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
    document.getElementById("email").innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${email}">${email}</a>`;
    document.getElementById("phone").innerHTML = `<i class="fas fa-phone"></i> ${phone}`;
    document.getElementById("location").innerHTML = `<i class="fas fa-map-marker-alt"></i> ${location}`;
    document.getElementById("profile-picture").src = profilePicture;

    const socialLinksElement = document.getElementById("social-links");
    socialLinks.forEach(([platform, url]) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.innerHTML = `<i class="fab fa-${platform.toLowerCase()}"></i> ${platform}`;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      socialLinksElement.appendChild(li);
    });

    const skillsListElement = document.getElementById("skills-list");
    skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsListElement.appendChild(li);
    });

    const projectsListElement = document.getElementById("projects-list");
    projects.forEach(([title, description, link]) => {
      const projectItem = document.createElement("div");
      projectItem.className = "project-item";
      projectItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${link}" target="_blank" rel="noopener noreferrer">View Project <i class="fas fa-external-link-alt"></i></a>
      `;
      projectsListElement.appendChild(projectItem);
    });

    const testimonialsListElement = document.getElementById("testimonials-list");
    testimonials.forEach(([name, position, text]) => {
      const testimonialItem = document.createElement("div");
      testimonialItem.className = "testimonial-item";
      testimonialItem.innerHTML = `
        <p><i class="fas fa-quote-left"></i> ${text} <i class="fas fa-quote-right"></i></p>
        <p><strong>${name}</strong>, ${position}</p>
      `;
      testimonialsListElement.appendChild(testimonialItem);
    });
  } catch (error) {
    console.error("Error loading personal information:", error);
  }
}

function setupDarkModeToggle() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const icon = darkModeToggle.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
  });
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
  setupDarkModeToggle();
  setupContactForm();
});