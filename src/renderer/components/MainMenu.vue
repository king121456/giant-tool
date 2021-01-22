<template>
    <el-menu
            :router="true"
            class="el-menu-vertical-demo"
            background-color="#7c9473"
            text-color="#222831"
            active-text-color="#ffd04b"
            >
        <el-menu-item index="1" route="/tsconfig">
            <i class="el-icon-menu"></i>
            <span slot="title">TsConfig配置文件生成</span>
        </el-menu-item>
        <el-menu-item index="2" route="/notify">
            <i class="el-icon-menu"></i>
            <span slot="title">定时提醒</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
      name: 'MainMenu'
    }
</script>

<style scoped>

</style>
