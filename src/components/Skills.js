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
      { name: 'Full stack development', tags: ['technical'] },
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

  const isDesktop = !(
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) || // eslint-disable-next-line no-useless-escape
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  )
  const classes = 'skills__tag' + (isDesktop ? ' skills__tag--desktop' : '')

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
        className={classes}
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
