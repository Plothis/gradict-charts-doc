import { createModel } from '@rematch/core'
import type { RootModel } from '.'

type State = {
	showMobileFilters: boolean
}

const indexPage = createModel<RootModel>()({
	state: {
		showMobileFilters: false,
	} as State,
	reducers: {
		toggleMobileFilters(state) {
			return { ...state, showMobileFilters: !state.showMobileFilters }
		},
	},
	effects: (dispatch) => ({
		async loadQuestions({ categoryId }: { categoryId: string }) {
			dispatch.questions.setQuestions([1, 2])
		},
		async otherLoadQuestion() {
			dispatch.questions.loadQuestions({ categoryId: '1' })
		},
	}),
})

export default indexPage