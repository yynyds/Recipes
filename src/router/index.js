import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/search'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Search,
            name: 'search'
            // children: [
            //     {
            //         path: '/recipe-detalization/:recipeID',
            //         props: (route) => {
            //             return {
            //                 recipeID: route.params.recipeID,
            //                 // recipeData: null
            //             }
            //         },
            //         component: () => import('../components/recipe/recipeDetalization'),
            //         name: 'recipeDetalization',
            //         meta: {
            //             title: 'recipe detalization'
            //         }
            //     },
            // ]
        },
        {
            path: '/recipe-detalization/:recipeID',
            props: (route) => {
                return {
                    recipeID: route.params.recipeID,
                    // recipeData: null
                }
            },
            component: () => import('../components/recipe/recipeDetalization'),
            name: 'recipeDetalization',
            meta: {
                title: 'recipe detalization'
            }
        },
        {
            path: '/recipe-by-ingredient/:ingredient',
            props: (route) => {
                return {
                    ingredient: route.params.ingredient,
                    id: route.params.ingredient
                }
            },
            component: () => import('../components/foodCard'),
            name: 'recipesByIngredient',
            meta: {
                title: 'recipe by ingredient'
            }
        },
        {
            path: '*',
            redirect: {
                name: 'search'
            }
        }
    ]
})

export default router