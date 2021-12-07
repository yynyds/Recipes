<template>
  <div>
    <h3>Recipe detail: {{$route.params.recipeData.title}}</h3>
    <el-row>
      <img :src="$route.params.recipeData.image">
    </el-row>
    <p style="text-align: left;">
      <span style="font-weight: bold;">Instructions</span>:
      <span v-html="$route.params.recipeData.instructions"></span>
    </p>
    <h3>Ingredients</h3>
    <el-col :xs="12" :sm="6" :md="4" :xl="4" style="padding: 3px;"
            v-for="(recipe, index) in $route.params.recipeIngredientsData" :key="index">
      <ingredient-card :ingredients="recipe"/>
    </el-col>
  </div>
</template>

<script>
import ingredientCard from '@/components/recipe/ingredientCard'
export default {
  components: {
    ingredientCard
  }
}
</script>

<style scoped>

</style>