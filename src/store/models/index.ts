import { Models } from '@rematch/core'

import indexPage from './indexPage'

export interface RootModel extends Models<RootModel> {
	indexPage: typeof indexPage
}

export const models: RootModel = { indexPage }