import type { GameObject } from '../types/GameObject.ts'

export default (gameData: GameObject[]): GameObject[] => {
  const time = new Date()
  const yyyy = time.getFullYear()
  let mm: number | string = time.getMonth() + 1
  let dd: number | string = time.getDate()

  if (dd < 10) dd = '0' + dd
  if (mm < 10) mm = '0' + mm

  const formattedDate = mm + '-' + dd + '-' + yyyy

  return gameData.filter(gameObject => gameObject.last_played === formattedDate)
}
