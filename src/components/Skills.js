import { useRef, useState, useEffect } from 'react'
import './Skills.scss'

export default function Skills({ reference }) {
  const [activeSkillTags, setActiveSkillTags] = useState([])
  const [displayedSkills, setDisplayedSkills] = useState([])
  useEffect(() => {
    const skills = [
      { name: 'Algorithms and data structures', tags: ['technical'] },
      { name: 'Bash', tags: [] },
      { name: 'Big data', tags: ['data', 'technical'] },
      { name: 'Bootstrap', tags: ['design'] },
      { name: 'C', tags: ['low-level'] },
      { name: 'C++', tags: ['low-level'] },
      { name: 'CSS3', tags: ['client-side', 'design'] },
      { name: 'Data architecture', tags: ['data', 'technical'] },
      { name: 'Database management', tags: ['data', 'technical'] },
      { name: 'Elasticsearch', tags: [] },
      { name: 'Express', tags: ['server-side'] },
      { name: 'Git', tags: [] },
      { name: 'HTML5', tags: ['client-side'] },
      { name: 'InVision', tags: ['design'] },
      { name: 'Java', tags: [] },
      { name: 'JavaScript', tags: ['client-side', 'scripting'] },
      { name: 'jQuery', tags: ['client-side'] },
      { name: 'JSON', tags: ['data'] },
      { name: 'MATLAB', tags: ['math'] },
      { name: 'MongoDB', tags: ['data'] },
      { name: 'Mongoose', tags: ['data', 'server-side'] },
      { name: 'Node.js', tags: ['scripting', 'server-side'] },
      { name: 'NoSQL', tags: ['data'] },
      { name: 'OCaml', tags: [] },
      { name: 'PHP', tags: ['scripting', 'server-side'] },
      { name: 'PostgreSQL', tags: ['data'] },
      { name: 'Project management', tags: ['technical'] },
      { name: 'Prototyping', tags: ['design', 'technical'] },
      { name: 'Python', tags: ['scripting'] },
      {
        name: 'Quantitative analysis',
        tags: ['math', 'statistics', 'technical'],
      },
      { name: 'R', tags: ['math', 'statistics'] },
      { name: 'Rails', tags: ['server-side'] },
      { name: 'React', tags: ['client-side'] },
      { name: 'Redux', tags: [] },
      { name: 'Responsive design', tags: ['design', 'technical'] },
      { name: 'Ruby', tags: ['scripting'] },
      { name: 'Sass', tags: ['design', 'scripting'] },
      { name: 'SQL', tags: ['data'] },
      { name: 'UX/UI', tags: ['design', 'technical'] },
      { name: 'Web design', tags: ['design', 'technical'] },
      { name: 'WordPress', tags: [] },
      { name: 'x86 assembly', tags: ['low-level'] },
    ]

    let skillsToDisplay = []
    if (!activeSkillTags.length) {
      skillsToDisplay = skills.map(({ name }, i) => (
        <div className="skills__skill" key={i}>
          {name}
        </div>
      ))
    } else {
      let i = 0
      for (const skill of skills) {
        if (skill.tags.some(tag => activeSkillTags.includes(tag))) {
          skillsToDisplay.push(
            <div className="skills__skill" key={i}>
              {skill.name}
            </div>
          )
          i++
        }
      }
    }

    setDisplayedSkills(skillsToDisplay)
  }, [activeSkillTags])

  const skillTags = {
    'client-side': { ref: useRef(), text: 'Client-side' },
    data: { ref: useRef(), text: 'Data' },
    design: { ref: useRef(), text: 'Design' },
    'low-level': { ref: useRef(), text: 'Low-level' },
    math: { ref: useRef(), text: 'Math' },
    scripting: { ref: useRef(), text: 'Scripting' },
    'server-side': { ref: useRef(), text: 'Server-side' },
    statistics: { ref: useRef(), text: 'Statistics' },
    technical: { ref: useRef(), text: 'Technical' },
  }

  const handleFilter = key => () => {
    skillTags[key].ref.current.classList.toggle('skills__tag--active')
    if (activeSkillTags.includes(key))
      setActiveSkillTags(activeSkillTags.filter(tag => tag !== key))
    else setActiveSkillTags([...activeSkillTags, key])
  }

  const skillFilters = []
  for (const key of Object.keys(skillTags)) {
    skillFilters.push(
      <button
        className="skills__tag"
        ref={skillTags[key].ref}
        onClick={handleFilter(key)}
        key={key}
      >
        {skillTags[key].text}
      </button>
    )
  }

  return (
    <div className="skills" ref={reference}>
      <h2>Skills</h2>
      <div className="skills__main">
        <div className="skills__filters">
          <div className="skills__filters-wrapper">{skillFilters}</div>
        </div>
        <div className="skills__separator"> </div>
        <div className="skills__skills">{displayedSkills}</div>
      </div>
    </div>
  )
}
