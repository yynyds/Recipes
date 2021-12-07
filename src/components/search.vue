<template>
  <div id="search-page">
    <el-col :sm="24">
      <el-row>
        <h3>Find your food</h3>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :sm="12">
          <el-input v-model="dataQuery" placeholder="Type food name">
            <el-button slot="append" icon="el-icon-search" @click="searchFoodByQueryData"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <div id="search-result" v-show="foodData.length > 0">
        <br>
        <div class="line"></div>
        <br>
        <h3>Search results</h3>
        <food-card v-for="food in computedFoodData"
                   :fromSearchPage="true"
                   :key="food.id"
                   :id="food.id"
                   :image="food.image"
                   :title="food.title"/>
        <el-col :sm="24">
          <br>
          <el-pagination
              layout="sizes, prev, pager, next"
              @current-change="setPage"
              :total="foodData.length">
          </el-pagination>
        </el-col>
        <div v-loading="loadingFoodData" class="loading-food-data"></div>
      </div>
    </el-col>
  </div>
</template>

<script>
import foodCard from '@/components/foodCard'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    foodCard
  },
  data () {
    return {
      dataQuery: '',
      searchResults: [],
      totalResults: null,
      loadingFoodData: false,
      pageNumber: 1,
      count: 10,
      page: 1,
      pageSize: 10
    }
  },
  methods: {
    ...mapActions([
      'loadFoodData'
    ]),
    searchFoodByQueryData() {
      this.loadingFoodData = true
      this.loadFoodData(this.dataQuery).then(() => {
        this.loadingFoodData = false
      })
    },
    setPage (val) {
      this.page = val
    }
  },
  computed: {
    ...mapState({
      foodData: state => state.foodData.data
    }),
    computedFoodData () {
      return this.foodData.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
    }
  }
}
</script>

<style scoped lang="scss">
#search-page {
  #search-result {
    .line {
      width: 100%;
      height: 1px;
      background-color: #DCDFE6;
    }
  }
  .loading-food-data {
    width: 100%;
    height: 400px;
  }
}
</style>