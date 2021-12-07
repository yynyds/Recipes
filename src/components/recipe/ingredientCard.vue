<template>
  <el-card :body-style="{ padding: '0px' }" style="height: 200px;">
    <div class="image" style="height: 100px;">
      <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${ingredients.image}`"
           style="cursor: pointer;" @click="getRecipeByIngredient(ingredients.name)">

    </div>
    <div style="padding: 10px;">
      <strong class="food-title">{{ingredients.name}}</strong>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    ingredients: {
      type: Object
    }
  },
  data () {
    return {
      recipeDataByIngredient: null
    }
  },
  methods: {
    getRecipeByIngredient (ingredientName) {
      Promise.resolve(this.loadRecipeDataByIngredient(ingredientName)).then(() => {
        this.$router.push({
          name: 'recipesByIngredient',
          params: {
            ingredient: ingredientName,
            recipeData: this.recipeDataByIngredient
          }
        })
      })
    },
    loadRecipeDataByIngredient (ingredientName) {
      const apiKey = 'f3e8c86571334078a41d68870655080a'
      return new Promise((resolve, reject) => {
        this.axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientName}&apiKey=${apiKey}`).then(res => {
          this.recipeDataByIngredient = res.data
          resolve(true)
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>