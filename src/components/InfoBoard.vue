<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Personal Info" name="first"><Person /></el-tab-pane>
    <el-tab-pane v-if="role=='patient'" label="Medical Info" name="second"><Med /></el-tab-pane>
    <el-tab-pane v-else label="Schedule" name="third"><Schedule /></el-tab-pane>
  </el-tabs>
</template>

<script>
import Person from "./Person.vue";
import Med from "./Med.vue";
import Schedule from "./Schedule.vue";
export default {
  data() {
    return {
      activeName: "first",
      role: "doctor"
    };
  },
  components:{
      Person,
      Med,
      Schedule
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