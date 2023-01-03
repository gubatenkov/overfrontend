// Config file for global data
import type { IAuthor } from './types/Author'

interface ConfigType {
  origin: string
  siteTitle: string
  siteDescription: string
  paginatedPageSize: number
}

export const GLOBAL_CONFIG: ConfigType = {
  origin: 'https://overfrontend.pages.dev',
  siteTitle: 'Overfrontend',
  siteDescription:
    'Technical blog of a frontend developer where I write with words and snippets of code',
  paginatedPageSize: 3
}

export const regularAuthors: IAuthor[] = [
  {
    fullname: 'Мухулька',
    contactUrl: 'https://t.me/soko1enkov',
    imagePath: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    nickname: 'sokolenkov'
  },
  {
    fullname: 'Delba de Oliveira',
    contactUrl: 'https://t.me/lavskola',
    imagePath:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    nickname: 'delba_oliveira'
  }
]
