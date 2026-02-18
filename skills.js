const skillData = {
  frontend: [
    { name: "HTML / CSS", percent: 90 },
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 75 },
    { name: "Tailwind CSS", percent: 85 },
  ],
  backend: [
    { name: "Python", percent: 80 },
    { name: "SQL", percent: 70 },
    { name: "PostgreSQL", percent: 65 },
    { name: "REST APIs", percent: 70 },
  ],
  devops: [
    { name: "Linux", percent: 70 },
    { name: "Docker", percent: 55 },
    { name: "Postfix", percent: 60 },
    { name: "Bash", percent: 65 },
  ]
};

const skillBarsEl = document.getElementById("skillbars");
const tabButtons = document.querySelectorAll(".skills-tab button");

function renderSkills(tabKey) {
  const skills = skillData[tabKey];

  skillBarsEl.innerHTML = skills.map(skill => `
    <div class="skill">
      <div class="skill-row">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-prozent">${skill.percent} %</span>
      </div>

      <div class="bar">
        <span class="fill" style="width: ${skill.percent}%;"></span>
      </div>
    </div>
  `).join("");
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");


    renderSkills(btn.dataset.tab);
  });
});

renderSkills("frontend");


