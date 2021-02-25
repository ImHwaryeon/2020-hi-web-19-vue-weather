import { getDaily, getPosition } from '../api/weather-api'

export default {
	async ACT_WEATHER({ commit }, value) {
		commit('MUT_CITY', value);
		commit('MUT_DAILY', await getDaily(value))
		commit('MUT_DAYS', await getDaily(value))
	}
}