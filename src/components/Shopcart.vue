<template>
	<div class="list">
		<div class="item" v-for="goods in goodslist" :key="goods.id">
			<div class="item-l">
				<img class="item-img" :src="goods.src" />
			</div>
			<div class="item-r">
				<div class="item-title">{{goods.title}} <small>x {{goods.num}}</small> </div>
				<div class="item-price">{{goods.price | currency}}</div>
				<!-- 也可以<div class="item-price">￥{{goods.price}}</div> -->
				<div class="item-opt">
					<button @click="del(goods.id)">删除</button>
				</div>
			</div>
		</div>
		<div class="item-total" v-if="goodslist.length">
			商品总价:{{total | currency}}
		</div>
		<div class="item-empty" v-else>购物车中暂无商品</div>
	</div>
</template>

<script>
	import {mapState, mapActions, mapGetters} from 'vuex'
	export default{
		computed:{
			...mapState({
				goodslist: state=>state.shopcart.items //仓库里的goods.js中的list
			}),
			...mapGetters('shopcart', {total: 'totalPrice'})
		},
		methods:mapActions('shopcart',['del']), //调用仓库的shopcart.js的add方法
		filters:{
			currency(value){
				return '￥' + value
			}
		}
	}
</script>

<style>
	.item-total {
	  margin: 10px;
	  font-size: 15px;
	}
	.item-empty {
	  text-align: center;
	  margin-top: 20px;
	  font-size: 15px;
	}
</style>
