import {
    LOAD_FOOD_FAILURE,
    LOAD_FOOD_REQUEST,
    LOAD_FOOD_SUCCESS
} from '../../mutations'
import axios from 'axios'
import { Notification } from 'element-ui'

export default {
    state: {
        data: [],
        error: null
    },
    actions: {
        loadFoodData ({ commit }, dataQuery) {
            commit(LOAD_FOOD_REQUEST)
            const apiKey = 'f3e8c86571334078a41d68870655080a'
            return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${dataQuery}&number=100`).then(response => {
                return response.data
            })
                .then(data => {
                    commit(LOAD_FOOD_SUCCESS, data)
                    return true
                })
                .catch(error => {
                    commit(LOAD_FOOD_FAILURE, error)
                    return false
                })
        }
    },
    mutations: {
        [LOAD_FOOD_REQUEST] (state) {
            state.error = null
        },
        [LOAD_FOOD_SUCCESS] (state, data) {
            state.data = data.results
        },
        [LOAD_FOOD_FAILURE] (state, error) {
            state.data = []
            if (error) {
                if (error.response) {
                    if (error.response.status === 401) {
                        state.error = error.response.data.message
                    } else if (error.response.status === 509) {
                        Notification.error({
                            title: 'Error',
                            offset: 60,
                            message: error.response.data.error
                        })
                        state.error = error.message
                    } else {
                        state.error = error.message
                    }
                } else if (error.request) {
                    state.error = error.message
                }
            }
        }
    }
}
