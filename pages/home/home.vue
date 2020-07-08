<template>
	<view>
		<cu-custom bgColor="bg-gradual-back" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">按钮</block>
		</cu-custom>
	<swiper class="screen-swiper swiper_home" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
	 :autoplay="true" interval="5000" duration="500">
		<swiper-item v-for="(item,index) in swiperList" :key="index">
			<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
			<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
		</swiper-item>
	</swiper>
	<text>{{userinfo.name}}{{zdata}}</text>
	<button class="cu-btn round lg bg-red" @click="ces">测试</button>
	<button open-type="getUserInfo" @click="appLogin" class="cu-btn round lg bg-red" >登录</button>
	《
	</view>
</template>

<script>
	import {mapState,mapMutations,mapActions} from 'vuex'
	export default {
		data() {
			return {
				zdata:'',
				swiperList: [
					{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
			};
		},
		created() {
			this.$store.commit('setlogin',{name:'zjk'})
		},
		methods:{
			ces(){
				this.zdata = this.$store.state.userinfo
				//this.$store.dispatch('AtmSetUsering',{name:'666'})
				console.log(this.userinfo)
				this.AtmSetUsering({name:'zjkss'})
			},
			...mapMutations({
			    totalAlise: 'setlogin' //
			}),
			...mapActions({
				AtmSetUsering:'AtmSetUsering'
			}),
			 appLogin: function() {
			                 uni.getProvider({
			                     service: 'oauth',
			                     success: function(res) {
									 
			                         console.log(res.provider);
			                         //支持微信、qq和微博等
			                         if (~res.provider.indexOf('weixin')) {
			                             uni.login({
			                                 provider: 'weixin',
			                                 success: function(loginRes) {
			                                     console.log('-------获取openid(unionid)-----');
			                                     console.log(JSON.stringify(loginRes));
			                                     // 获取用户信息
			                                     uni.getUserInfo({
			                                         provider: 'weixin',
			                                         success: function(infoRes) {
			                                             console.log('-------获取微信用户所有-----');
			                                             console.log(JSON.stringify(infoRes.userInfo));
			                                         }
			                                     });
			                                 }
			                             });
			                         }
			                     }
			                 });
			             },
		},
		computed:{
		   ...mapState(['userinfo'])
		  },
	}
</script>

<style>
.swiper_home{
	
}
.bg-gradual-back{
	background-color: #333333;
	color: #39B54A;
}
</style>
