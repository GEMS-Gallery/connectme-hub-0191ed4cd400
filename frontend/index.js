import { backend } from "declarations/backend";

async function loadPersonalInfo() {
  try {
    const name = await backend.getName();
    const bio = await backend.getBio();
    const [email, phone, location] = await backend.getContactInfo();
    const socialLinks = await backend.getSocialLinks();

    document.getElementById("name").textContent = name;
    document.getElementById("bio").textContent = bio;
    document.getElementById("email").textContent = `Email: ${email}`;
    document.getElementById("phone").textContent = `Phone: ${phone}`;
    document.getElementById("location").textContent = `Location: ${location}`;

    const socialLinksElement = document.getElementById("social-links");
    socialLinks.forEach(([platform, url]) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.textContent = platform;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      socialLinksElement.appendChild(li);
    });
  } catch (error) {
    console.error("Error loading personal information:", error);
  }
}

window.addEventListener("load", loadPersonalInfo);