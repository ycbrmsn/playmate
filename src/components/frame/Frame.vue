<template>
  <div class="hello">
    <el-container>
      <el-header style="background-color: blue;">
        <dl class="headerlist">
          <dd class="headerlist-item">
            <router-link class="headerlist-itema" to="/userinfo">用户</router-link>
          </dd>
          <dd class="headerlist-item">
            <router-link class="headerlist-itema" to="/login">退出</router-link>
          </dd>
        </dl>
      </el-header>
      <el-container>
        <el-aside width="220px" style="background-color: #545c64;">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                :router="true"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="/welcome">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main style="background-color: pink;">
            <div style="height: 300px;">
              <router-view/>
            </div>
          </el-main>
          <el-footer style="background-color: grey;"></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {},
  components: {}
}
</script>
