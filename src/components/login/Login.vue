<template>
  <div>
    <el-card class="logincard">
      <el-input v-model="input" :clearable="true" placeholder="请输入用户名" class="littlegap__top"></el-input>
      <el-input type="password" v-model="input" :clearable="true" placeholder="请输入密码" class="littlegap__top"></el-input>
      <el-button class="littlegap__top littlegap__bottom matchbutton" @click="login()">登录</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    login () {
      this.$message({
        message: '登录成功',
        type: 'success'
      })
      this.$router.push('/')
    }
  },
  computed: {},
  components: {}
}
</script>
