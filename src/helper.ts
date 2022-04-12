export const camelize = (string: string) => {
  // eslint-disable-next-line no-useless-escape
  string = string.replace(/\w[\-_\s]+(.)?/g, function (match, chr) {
    const firstChr = match.charAt(0)
    return chr ? firstChr + chr.toUpperCase() : ''
  })
  return string
}
