<template>
    <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="jine" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li>
                <span>香辣鸡腿堡</span>
                <span class="o-price">￥16元</span>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>
</template>

<script>
    export default {
        name: "pos",
        data(){
          return {
            tableData:[{
              goodsName: '可口可乐',
              price: 8,
              count:1
            }, {
              goodsName: '香辣鸡腿堡',
              price: 15,
              count:1
            }, {
              goodsName: '爱心薯条',
              price: 8,
              count:1
            }, {
              goodsName: '甜筒',
              price: 8,
              count:1
            }]
          }
        },
        mounted:function () {
          var orderHeight = document.body.clientHeight;

          document.getElementById('order-list').style.height = orderHeight+'px';
        }
    }
</script>

<style scoped>
.pos-order{
  background-color: #F9FAFC;
  border-right: 1px solid #C0CCDA;
  height: 100%;
}
.div-btn{
  margin-top: 10px;
}
</style>
