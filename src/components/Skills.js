import { useEffect, useRef, useState } from 'react'
import './Skills.scss'

export default function Skills({ reference }) {
  const [activeSkillTags, setActiveSkillTags] = useState([])
  const [displayedSkills, setDisplayedSkills] = useState([])
  useEffect(() => {
    const skills = [
      { name: 'Algorithms and data structures', tags: ['technical'] },
      { name: 'Bash', tags: ['language'] },
      { name: 'Big data', tags: ['data', 'technical'] },
      { name: 'Bootstrap', tags: ['design'] },
      { name: 'C', tags: ['language', 'low-level'] },
      { name: 'C++', tags: ['language', 'low-level'] },
      { name: 'Concrete', tags: ['cms'] },
      { name: 'Contentful', tags: ['cms'] },
      { name: 'CSS3', tags: ['language', 'client-side', 'design'] },
      { name: 'Dart', tags: ['language'] },
      { name: 'Data architecture', tags: ['data', 'technical'] },
      { name: 'Database management', tags: ['data', 'technical'] },
      { name: 'Elasticsearch', tags: [] },
      { name: 'Express', tags: ['server-side'] },
      { name: 'Figma', tags: ['design'] },
      { name: 'Flutter', tags: ['mobile'] },
      { name: 'Full stack development', tags: ['technical'] },
      { name: 'Git', tags: [] },
      { name: 'HTML5', tags: ['language', 'client-side'] },
      { name: 'InVision', tags: ['design'] },
      { name: 'Java', tags: ['language'] },
      { name: 'JavaScript', tags: ['language', 'client-side', 'scripting'] },
      { name: 'jQuery', tags: ['client-side'] },
      { name: 'JSON', tags: ['data'] },
      { name: 'MATLAB', tags: ['language', 'math'] },
      { name: 'MongoDB', tags: ['data'] },
      { name: 'Mongoose', tags: ['data', 'server-side'] },
      { name: 'Node.js', tags: ['language', 'scripting', 'server-side'] },
      { name: 'NoSQL', tags: ['data'] },
      { name: 'OCaml', tags: ['language'] },
      { name: 'PHP', tags: ['language', 'scripting', 'server-side'] },
      { name: 'PostgreSQL', tags: ['data'] },
      { name: 'Project management', tags: ['technical'] },
      { name: 'Prototyping', tags: ['design', 'technical'] },
      { name: 'Python', tags: ['language', 'scripting'] },
      {
        name: 'Quantitative analysis',
        tags: ['math', 'statistics', 'technical'],
      },
      { name: 'R', tags: ['language', 'math', 'statistics'] },
      { name: 'Rails', tags: ['server-side'] },
      { name: 'React', tags: ['client-side'] },
      { name: 'React Native', tags: ['mobile'] },
      { name: 'Redux', tags: [] },
      { name: 'Responsive design', tags: ['mobile', 'design', 'technical'] },
      { name: 'Ruby', tags: ['language', 'scripting'] },
      {
        name: 'Sass',
        tags: ['language', 'client-side', 'design', 'scripting'],
      },
      { name: 'SQL', tags: ['language', 'data'] },
      { name: 'Swift', tags: ['language', 'mobile'] },
      { name: 'UX/UI', tags: ['design', 'technical'] },
      { name: 'Web design', tags: ['design', 'technical'] },
      { name: 'Wireframing', tags: ['design', 'technical'] },
      { name: 'WordPress', tags: ['cms'] },
      { name: 'x86 assembly', tags: ['language', 'low-level'] },
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
    cms: { ref: useRef(), text: 'CMS' },
    data: { ref: useRef(), text: 'Data' },
    design: { ref: useRef(), text: 'Design' },
    language: { ref: useRef(), text: 'Programming Language' },
    'low-level': { ref: useRef(), text: 'Low-level' },
    math: { ref: useRef(), text: 'Math' },
    mobile: { ref: useRef(), text: 'Mobile' },
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
