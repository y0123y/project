<template>
  <div :class="[activeClass,'nav-container']">
    <header>
      <p>首页</p>
      <span>{{activeTitle}}</span>
    </header>
    <nav>
      <ul>
        <li @click="clickHandle(item)" v-for="(item,index) in navList" :key="index">{{item.title}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  // created() {
  //     console.log(window.location.pathname)
  // },
  props: ["activeObj"],
  // mounted(){
  //     this.activeClass = this.activeObj.navName;
  //     this.activeTitle = this.activeObj.title;
  //     console.log(this.activeTitle)
  // },
  computed: {
    activeObj2() {
      return this.activeObj.title;
    }
  },
  watch: {
    activeObj2() {
      this.activeClass = this.activeObj.navName;
      this.activeTitle = this.activeObj.title;
    }
  },
  methods: {
    clickHandle(obj) {
      // console.log(obj.pathName)
      this.$router.push(obj.pathName);
      this.activeClass = obj.navClass;
      this.activeTitle = obj.title;
    }
  },

  data() {
    return {
      activeClass: "movie",
      activeTitle: "电影",
      navList: [
        {
          title: "电影",
          pathName: "/",
          navClass: "movie"
        },
        {
          title: "书籍",
          pathName: "/book",
          navClass: "book"
        },
        {
          title: "音乐",
          pathName: "/music",
          navClass: "music"
        },
        {
          title: "聊天",
          pathName: "/talk",
          navClass: "talk"
        }
      ]
    };
  }
};
</script>
<style scoped>
.nav-container header,
.nav-container nav {
  height: 3rem;
  background-color: gray;
  width: 100%;
}
.nav-container header {
  position: fixed;
  top: 0;
  font-size: 2rem;
  position: relative;
  text-align: center;
}
.nav-container header p {
  font-size: 0.8rem;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.nav-container nav {
  position: fixed;
  bottom: 0;
  font-size: 1.5rem;
}
.nav-container nav ul {
  width: 100%;
  display: flex;
}
.nav-container nav ul li {
  flex-grow: 1;
  text-align: center;
  line-height: 2rem;
}

.movie header,
.movie nav {
  background-color: rgb(130, 130, 253);
}
.music header,
.music nav {
  background-color: rgb(247, 144, 144);
}
.book header,
.book nav {
  background-color: rgb(156, 245, 156);
}
.talk header,
.talk nav {
  background-color: rgb(236, 174, 81);
}
.left{
    position: fixed;
    float: left;
    background-color: lightblue;
    height: 6rem;
}
</style>