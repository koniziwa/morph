type timeObject = {
  time: string
  postfix: string
}

// TODO: Get time string, f.e.: 03:54PM, 00:12AM
export default (hours: number, minutes: number): timeObject => {
  let postfix = hours >= 12 ? 'PM' : 'AM'
  let hh = hours % 12 ? hours % 12 : 12
  let mm = minutes < 10 ? '0' + minutes : minutes

  const time = (hh < 10 ? '0' + hh : hh) + ':' + mm

  return {
    time,
    postfix,
  }
}
