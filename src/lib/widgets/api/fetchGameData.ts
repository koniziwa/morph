import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs'
import { convertFileSrc } from '@tauri-apps/api/tauri'
import { documentDir } from '@tauri-apps/api/path'
import type { GameObject } from '../types/GameObject'

export default async (username: string): Promise<GameObject[]> => {
  const { library } = JSON.parse(
    await readTextFile(`MorphData/userdata/${username}.json`, {
      dir: BaseDirectory.Document,
    })
  )
  const documentDirPath = await documentDir()
  const gameData = library.map((game: GameObject) => {
    game.thumbnail_url = convertFileSrc(
      documentDirPath + 'MorphData/thumbnails/' + game.thumbnail_url
    )
    game.background_url = convertFileSrc(
      documentDirPath + 'MorphData/backgrounds/' + game.background_url
    )
    return game
  })

  return gameData
}
