<template>
  <div>
    <template v-if="fromSearchPage">
      <el-col :xs="24" :sm="12" :md="8" :xl="6" style="padding: 3px;">
        <el-card :body-style="{ padding: '0px' }" style="height: 400px;">
          <div class="image" style="height: 350px;">
            <img :src="image" style="cursor: pointer;" @click="recipeDetail">
          </div>
          <div style="padding: 10px;">
            <strong class="food-title">{{title}}</strong>
          </div>
        </el-card>
      </el-col>
    </template>
    <template v-else>
      <el-col :xs="24" :sm="12" :md="8" :xl="6" style="padding: 3px;"
              v-for="recipe in $route.params.recipeData" :key="recipe.id">
        <el-card :body-style="{ padding: '0px' }" style="height: 400px;">
          <div class="image" style="height: 350px;">
            <img :src="recipe.image" style="cursor: pointer;" @click="recipeDetail(recipe.id)">
          </div>
          <div style="padding: 10px;">
            <strong class="food-title">{{recipe.title}}</strong>
          </div>
        </el-card>
      </el-col>
    </template>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    fromSearchPage: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      recipeData: null,
      recipeIngredientsData: null
    }
  },
  methods: {
    recipeDetail (id = null) {
      const promises = [
          this.loadRecipeInfo(id),
          this.loadRecipeIngredients(id)
      ]
      Promise.all(promises).then(() => {
        this.$router.push({
          name: 'recipeDetalization',
          params: {
            recipeID: this.id,
            recipeData: this.recipeData[0],
            recipeIngredientsData: this.recipeIngredientsData
          }
        })
      })
    },
    loadRecipeInfo (id = null) {
      let ID = null
      if (typeof this.id === 'string') {
        ID = id
      } else {
        ID = this.id
      }
      const apiKey = 'f3e8c86571334078a41d68870655080a'
      return new Promise((resolve, reject) => {
        this.axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=${ID}&apiKey=${apiKey}`).then(res => {
          this.recipeData = res.data
          resolve(true)
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    loadRecipeIngredients (id = null) {
      let ID = null
      if (typeof this.id === 'string') {
        ID = id
      } else {
        ID = this.id
      }
      const apiKey = 'f3e8c86571334078a41d68870655080a'
      return new Promise((resolve, reject) => {
        this.axios.get(`https://api.spoonacular.com/recipes/${ID}/ingredientWidget.json?apiKey=${apiKey}`).then(res => {
          this.recipeIngredientsData = res.data.ingredients
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

<style scoped lang="scss">
.image {
  height: 350px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.food-title {
  cursor: pointer;
}
.food-title:hover {
  color: #3c92c4;
}
</style>