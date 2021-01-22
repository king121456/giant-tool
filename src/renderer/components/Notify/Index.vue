<template>
    <div>

        <div>
            <div style="display: flex;flex-direction: row;">
                <div class="notify-table">
                    <h3 class="notify_title">定时任务</h3>
                    <div class="notify-operate">
                        <el-button type="primary" size="mini" @click="addNotify">添加</el-button>
                    </div>
                    <el-table
                            :data="notifyData"
                            stripe
                            style="border-radius: 5px;">
                        <el-table-column prop="name" label="标题"  width="180"></el-table-column>
                        <el-table-column prop="notifyTime" label="通知时间"></el-table-column>
                        <el-table-column prop="everyday" label="是否每天运行"></el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="200">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="primary" size="mini">编辑</el-button>
                                <el-button @click="deleteNotify(scope.$index)" type="danger" size="mini">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="notify-detail">
                    <h3 class="notify_title">定时任务详情</h3>
                    <el-form size="medium" label-position="right" :rules="rules" :model="formData" ref="form"
                             label-width="120px">
                        <el-form-item label="名称：" prop="name">
                            <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                        <el-form-item label="触发时间：">
                            <el-date-picker placeholder="选择时间" type="datetime"
                                            v-model="formData.notifyTime"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="是否每日触发：">
                            <el-switch
                                    v-model="formData.everyday"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item>
                            <el-input type="textarea" v-model="formData.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="状态：">
                           <el-tag  v-if="formData.status === 10" type="success" size="small">新创建</el-tag >
                           <el-tag  v-if="formData.status !== 10" type="primary" size="small">修改中</el-tag >
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('form')">保存</el-button>
                            <el-button @click="resetForm('form')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'Index',
      data () {
        return {
          notifyData: [],
          formData: {
            name: '',
            notifyTime: '',
            everyday: false,
            desc: '',
            status: 10
          },
          rules: {
            name: [{required: true, message: '请输入定时任务名称', trigger: 'blur'}]
          }
        }
      },
      methods: {
        handleClick () {
        },
        resetForm (formName) {
          this.$refs[formName].resetFields()
        },
        submitForm (formName) {
          this.$refs[formName].validate(valid => {
            if (!valid) {
              return false
            }
            if (this.formData.status === 10) {
              this.notifyData.push(JSON.parse(JSON.stringify(this.formData)))
              this.formData.status = 20
            }
          })
        },
        addNotify () {
          this.resetForm('form')
          this.formData.status = 10
        },
        deleteNotify (index) {
          this.notifyData.splice(index, 1)
        }
      }
    }
</script>

<style scoped>
    .notify-operate {
        padding: 5px 0;
    }

    .notify_title {
        margin-bottom: 15px;
    }

    .notify-table {
        width: 50%;
        margin-top: 15px;
    }

    .notify-detail {
        width: 50%;
        padding: 35px;
    }
</style>
