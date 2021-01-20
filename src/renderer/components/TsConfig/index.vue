<template>
    <div>
        <h1 style="margin-bottom: 15px">配置信息</h1>
         <div>
             <h3 style="padding:15px 0">项目选项</h3>
             <el-form :inline="true" :model="options" size="mini">
                 <el-form-item label="允许编译js文件">
                     <el-switch v-model="options.allowJs"></el-switch>
                 </el-form-item>
                 <el-form-item label="checkJs">
                     <el-switch v-model="options.checkJs"></el-switch>
                 </el-form-item>
                 <el-form-item label="composite">
                     <el-switch v-model="options.composite"></el-switch>
                 </el-form-item>
                 <el-form-item label="生成.d.ts文件">
                     <el-switch v-model="options.declaration"></el-switch>
                 </el-form-item>
                 <el-form-item label="declarationMap">
                     <el-switch v-model="options.declarationMap"></el-switch>
                 </el-form-item>

             </el-form-item>

             </el-form>
         </div>
        <div>
            <h3 style="padding:15px 0">文件包含选项</h3>
            <el-form :model="options" size="mini">
                <el-form-item label="需要解析的目录:">
                    <slot>
                        <el-button size="mini" @click="options.include.push({value:''})" >添加</el-button>
                        <el-button @click="options.include.shift()">删除</el-button>
                    </slot>
                    <el-input v-for="item in options.include" v-model="item.value" style="margin-top:10px"  ></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'index',
      data () {
        return {
          options: {
            allowJs: false,
            checkJs: false,
            composite: true,
            declaration: false,
            declarationMap: false,
            include: []
          }
        }
      }
    }
</script>

<style scoped>
</style>
