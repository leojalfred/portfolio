const scrollTo = ref => () => {
  const top = ref.current.getBoundingClientRect().top + window.pageYOffset - 96
  window.scrollTo({ top, behavior: 'smooth' })
}

export default scrollTo
