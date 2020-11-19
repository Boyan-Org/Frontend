<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Personal Info" name="first"><Person /></el-tab-pane>
    <el-tab-pane label="Medical Info" name="second"><Med /></el-tab-pane>
    <el-tab-pane label="Schedule" name="third">Schedule</el-tab-pane>
  </el-tabs>
</template>

<script>
import Person from "./Person.vue";
import Med from "./Med.vue";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  components:{
      Person,
      Med
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.el-tab-pane{
  padding: 0 100px 0 100px;
}
</style>