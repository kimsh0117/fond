function removeSpace(str: string): string {
  return str.replace(/\s/g, '')
}

function splitBy(str: string, mark: string): string[] {
  return str.split(mark)
}

function insertQueryStringsById(str: string, currentIndex: number, arr: string[]) {
  const total = arr.length
  // for first element
  if (currentIndex === 0 && total !== 0) {
    return `?id=${str}&`
  }
  if (currentIndex === 0 && currentIndex === total) {
    return `?id=${str}`
  }
  if (currentIndex !== 0 && currentIndex + 1 === total) {
    return `id=${str}`
  }
  return `id=${str}&`
}

function getQueries(str: string, mark: string) {
  return splitBy(removeSpace(str), mark).map(insertQueryStringsById).join('')
}

export default getQueries