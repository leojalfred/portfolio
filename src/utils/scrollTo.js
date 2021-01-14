import animateScrollTo from 'animated-scroll-to'

const scrollTo = (ref, pre) => () => {
  if (pre) pre()

  const options = { minDuration: 200, maxDuration: 1000 }
  if (ref) animateScrollTo(ref.current, { ...options, verticalOffset: -96 })
  else animateScrollTo(0, options)
}

export default scrollTo
