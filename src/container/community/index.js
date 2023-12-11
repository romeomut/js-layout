import {
  createElement,
  createHeader,
  createBlock,
} from '../../script/layout'

import {
  TABS_COMMUNITY,
  POST_COMMUNITY,
  LINK_COMMUNITY,
} from '../../script/data'

//

const page = document.querySelector('.page')

//header

const header = createHeader()
page.append(header)

//title

const title = createElement('h1', 'title', ' Коммьюніті')
page.append(title)

//content

const content = createElement('main', 'content')
page.append(content)

//tabs

const tabs = createBlock(TABS_COMMUNITY, 'tabs')
content.append(tabs)

//card

const card = createElement('div', 'card')

const img = createElement('img')
img.src = '/img/card.png'

card.append(img)
content.append(card)

//post

const post = createBlock(POST_COMMUNITY, 'post')
content.append(post)

//link

const link = createBlock(LINK_COMMUNITY)
content.append(link)
