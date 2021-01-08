const scrollTo = ref => () =>
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

export default scrollTo
