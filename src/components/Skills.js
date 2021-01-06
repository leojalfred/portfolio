import { useRef, useState, useEffect } from 'react'
import './Skills.scss'

export default function Skills({ reference }) {
  const skillTags = {
    'client-side': { ref: useRef(null), text: 'Client side' },
    data: { ref: useRef(null), text: 'Data' },
    design: { ref: useRef(null), text: 'Design' },
    'document-based': { ref: useRef(null), text: 'Document based' },
    'general-purpose': { ref: useRef(null), text: 'General purpose' },
    'low-level': { ref: useRef(null), text: 'Low level' },
    math: { ref: useRef(null), text: 'Math' },
    relational: { ref: useRef(null), text: 'Relational' },
    scripting: { ref: useRef(null), text: 'Scripting' },
    'server-side': { ref: useRef(null), text: 'Server side' },
    statistics: { ref: useRef(null), text: 'Statistics' },
    technical: { ref: useRef(null), text: 'Technical' },
  }

  const [activeSkillTags, setActiveSkillTags] = useState([])
  const [displayedSkills, setDisplayedSkills] = useState([])
  useEffect(() => {
    const skills = [
      { name: 'Algorithms and data structures', tags: ['technical'] },
      { name: 'Bash', tags: [] },
      { name: 'Big Data', tags: ['data', 'technical'] },
      { name: 'Bootstrap', tags: ['design'] },
      { name: 'C', tags: ['general-purpose', 'low-level'] },
      { name: 'C++', tags: ['general-purpose', 'low-level'] },
      { name: 'CSS3', tags: ['client-side', 'design'] },
      { name: 'Data Architecture', tags: ['data', 'technical'] },
      { name: 'Database Management', tags: ['data', 'technical'] },
      { name: 'Elasticsearch', tags: [] },
      { name: 'Express', tags: ['server-side'] },
      { name: 'Git', tags: [] },
      { name: 'HTML5', tags: ['client-side'] },
      { name: 'InVision', tags: ['design'] },
      { name: 'Java', tags: ['general-purpose'] },
      {
        name: 'JavaScript',
        tags: ['general-purpose', 'client-side', 'scripting'],
      },
      { name: 'jQuery', tags: ['client-side'] },
      { name: 'JSON', tags: ['data'] },
      { name: 'MATLAB', tags: ['math'] },
      { name: 'MongoDB', tags: ['data', 'document-based'] },
      {
        name: 'Mongoose',
        tags: ['data', 'document-based', 'server-side'],
      },
      { name: 'Node.js', tags: ['scripting', 'server-side'] },
      { name: 'NoSQL', tags: ['data', 'document-based'] },
      { name: 'OCaml', tags: [] },
      { name: 'PHP', tags: ['general-purpose', 'scripting', 'server-side'] },
      { name: 'PostgreSQL', tags: ['data', 'relational'] },
      { name: 'Project Management', tags: ['technical'] },
      { name: 'Prototyping', tags: ['design', 'technical'] },
      {
        name: 'Python',
        tags: ['general-purpose', 'scripting', 'relational'],
      },
      {
        name: 'Quantitative Analysis',
        tags: ['math', 'statistics', 'technical'],
      },
      { name: 'R', tags: ['math', 'statistics'] },
      { name: 'Rails', tags: ['server-side'] },
      { name: 'Responsive Design', tags: ['design', 'technical'] },
      { name: 'Ruby', tags: ['general-purpose', 'scripting'] },
      { name: 'Sass', tags: ['design', 'scripting'] },
      { name: 'SQL', tags: ['data', 'relational'] },
      { name: 'UX/UI', tags: ['design', 'technical'] },
      { name: 'Web Design', tags: ['design', 'technical'] },
      { name: 'WordPress', tags: [] },
      { name: 'x86 Assembly', tags: ['low-level'] },
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
      <div className="skills__filters">
        <h2>Skills</h2>
        {skillFilters}
      </div>
      <div className="skills__skills">{displayedSkills}</div>
    </div>
  )
}
