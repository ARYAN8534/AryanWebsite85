import React, { useState } from 'react';

import './Skills.css';

function Skills() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: "Advanced", color: "#E44D26" },
    { name: "CSS", level: "Advanced", color: "#264DE4" },
    { name: "JavaScript", level: "Intermediate", color: "#F0DB4F" },
    { name: "React", level: "Intermediate", color: "#61DAFB" },
    { name: "Node.js", level: "Beginner", color: "#339933" },
    { name: "MySQL", level: "Beginner", color: "#0769AD" },
    { name: "jQuery", level: "Beginner", color: "#4789C7" },
    { name: "AJAX", level: "Beginner", color: "#00758F" },
  ]);

  const [newSkill, setNewSkill] = useState({ name: '', level: 'Beginner' });
  const [sortBy, setSortBy] = useState('name');
  const [filterLevel, setFilterLevel] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getLevelPercentage = (level) => {
    switch (level) {
      case "Beginner": return 33;
      case "Intermediate": return 66;
      case "Advanced": return 100;
      default: return 0;
    }
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.name) {
      setSkills(prevSkills => [...prevSkills, newSkill]); // Correctly adding new skill
      setNewSkill({ name: '', level: 'Beginner' }); // Resetting input field
    }
  };
  

  const handleUpdateLevel = (index, newLevel) => {
    const updatedSkills = [...skills];
    updatedSkills[index].level = newLevel;
    setSkills(updatedSkills);
  };

  const sortedAndFilteredSkills = skills
    .filter(skill => filterLevel === 'All' || skill.level === filterLevel)
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return getLevelPercentage(b.level) - getLevelPercentage(a.level);
    });

  return (
    <div className="skills-container">
      <h1 style= {{ color: 'red' }}>My Skills</h1>

      <div className="skills-grid">
        {sortedAndFilteredSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-box"
            style={{ '--skill-color': skill.color }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="skill-box-face skill-box-front">
              {skill.name} {/* Display the skill name */}
            </div>
            <div className="skill-box-face skill-box-back">
              {hoveredSkill === skill.name && <p>Click to learn more about {skill.name}</p>}
            </div>
            <div className="skill-box-face skill-box-right"></div>
            <div className="skill-box-face skill-box-left"></div>
            <div className="skill-box-face skill-box-top"></div>
            <div className="skill-box-face skill-box-bottom"></div>

            {/* Progress bar for skill */}
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${getLevelPercentage(skill.level)}%`, // Display the progress based on the level
                  backgroundColor: skill.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="level">Sort by Level</option>
        </select>
        <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)}>
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <ul>
        {sortedAndFilteredSkills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.name}:</strong>
            <select 
              value={skill.level} 
              onChange={(e) => handleUpdateLevel(index, e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <div className="progress-bar">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${getLevelPercentage(skill.level)}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddSkill} className="add-skill-form">
        <input 
          type="text" 
          value={newSkill.name} 
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          placeholder="New skill name"
        />
        <select 
          value={newSkill.level}
          onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button type="submit">Add Skill</button>
      </form>

   </div>  
  );
}

export default Skills;
