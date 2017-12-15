<template>
  <div class="framebox">
    <header class="framebox-header">
      <dl class="headerlist">
        <dd class="headerlist-item">
          <router-link class="headerlist-itema" to="/userinfo" @click.native="toMenu('用户中心')">用户中心</router-link>
        </dd>
        <dd class="headerlist-item">
          <router-link class="headerlist-itema" to="/login">退出</router-link>
        </dd>
      </dl>
    </header>
    <el-aside width="220px" class="framebox-aside">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            :default-active="defaultActive"
            :router="true"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="selectMenu"
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
            <el-menu-item :index="item.url" v-for="(item, index) in menus" :key="index">
              <i :class="item.class"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <section class="framebox-section">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: 'welcome' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentmenu != ''">{{ currentmenu }}</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view/>
    </section>
  </div>
</template>

<script>
import { domHelper } from '@/js/commonhelper'
export default {
  name: 'HelloWorld',
  data () {
    return {
      defaultActive: '',
      currentmenu: '',
      menus: [
        {
          title: '舞蹈管理',
          class: 'el-icon-menu',
          url: '/dancelist'
        },
        {
          title: '玩伴管理',
          class: 'el-icon-setting',
          url: '/playmatelist'
        }
      ]
    }
  },
  methods: {
    toMenu (title) {
      this.currentmenu = title
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    selectMenu (index, indexPath) {
      this.currentmenu = this.menu[index]
    }
  },
  computed: {
    menu () {
      let menu = {
        '/userinfo': '用户中心'
      }
      for (let m of this.menus) {
        menu[m.url] = m.title
      }
      return menu
    }
  },
  components: {},
  beforeRouteEnter (to, from, next) {
    next(vm => {
      domHelper.adapteFrame()
      vm.defaultActive = to.path
      vm.currentmenu = vm.menu[to.path]
    })
  }
}
</script>
