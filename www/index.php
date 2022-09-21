<!DOCTYPE HTML>
<!--
	(C) Cutespirit 2022
	service@cutespirit.org
	Updated on 2022/09/06 for version 2.0
	UpdInfo: finish the content
-->
<html>
	<head>
		<title>課表</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="/assets/css/main.css" />
		<noscript><link rel="stylesheet" href="/assets/css/noscript.css" /></noscript>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.2/vue.global.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
		<link rel="stylesheet" href="/assets/css/bootstrap-iso.css" />
		<!-- <link rel="stylesheet" href="https://formden.com/static/assets/demos/bootstrap-iso/bootstrap-iso/bootstrap-iso.css" /> -->
		<style>
			sup {
				vertical-align: super;
				font-size: 20px;
			}
		</style>
	</head>
	<body class="is-preload">		
		<script type="text/javascript">
			var cacheSearch = "<?php echo htmlspecialchars($_GET['search']); ?>";
		</script>
        <?php header('Access-Control-Allow-Origin: *'); ?>

		<!-- Wrapper -->
		<div id="app">
			<div id="wrapper">

				<div class="bootstrap-iso">

				</div>

				<!-- Header -->
					<header id="header">
						<h1>課表</h1>
						<p>中科大課表</p>
					</header>

                <!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="#curriculum" class="active">課表</a></li>
						</ul>
					</nav>

				<!-- Main -->
					<div id="main">
                        <!-- {{data}} -->
                        <!-- Curriculum -->
                        <input type="text" class="form-control" id="search" placeholder="搜尋您的課表吧!" v-model="cacheSearch">
						
						<template v-if="cacheSearch">
							<select name="school" v-if="school_id" v-model="cacheSearch">
								<option disabled>請選擇您的班級</option>
								<option v-for="(item, key) in school_id" :key="key" :value="item.id" > {{item.name}} </option>
							</select>
						</template>
						<!-- <template v-else>
						<select name="school" v-if="school_id" >
								<option selected="selected" disabled>請選擇您的班級</option>
								<option v-for="(item, key) in school_id" :key="key" :value="item.id" > {{item.name}} </option>
							</select>
						</template> -->
							<section id="curriculum" class="main inactive" v-if="cacheSearch">
                            
                                <table class="alt">
									<thead>
										<tr>
											<td v-for="(item,key) in data[0]" :key="key" v-html="item"></td>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(item, key) in data.slice(1)" :key="key">
                                            <td v-for="(item2, key2) in item" :key="key2" v-html="item2"></td>
                                        </tr>
									</tbody>
								</table>
							</section>
					</div>

				<!-- Footer -->
				<footer id="footer">
						<section>
							<h2>關於靈萌</h2>
							<p>靈萌團隊是一個民主自由且追求的團隊，我們正為了同一個目標努力，我們還有專屬於我們的Github Organization，我們團隊有經驗豐富的大佬與活潑的團員。如果你也喜歡我們並且也想撐起台灣的資訊業，可以加入我們呦。</p>
							<ul class="actions">
								<li><a target="_blank" href="https://www.cutespirit.org/#join" class="button">加入靈萌</a></li>
							</ul>
						</section>
						<section>	
							<h2>聯繫我們</h2>
							<dl class="alt">
								<dt>MyGamil</dt>
								<dd><a href="mailto:marryhan25648@gmail.com">marryhan25648@gmail.com</a></dd>
								<dt>MyEmail</dt>
								<dd><a href="mailto:admin@tershi.com">admin@tershi.com</a></dd>
								<dt>團電郵</dt>
								<dd><a href="mailto:tershi@cutespirit.org">service@cutespirit.org(棄用)</a></dd>
							</dl>
							<ul class="icons">
								<!--<li><a target="_blank" href="#" class="icon brands fa-twitter alt"><span class="label">Twitter</span></a></li> -->
								<li><a target="_blank" href="https://www.facebook.com/TershiXia/" class="icon brands fa-facebook-f alt"><span class="label">Facebook</span></a></li>
								<li><a target="_blank" href="https://www.instagram.com/tershixia/" class="icon brands fa-instagram alt"><span class="label">Instagram</span></a></li>
								<li><a target="_blank" href="https://github.com/mmm25002500" class="icon brands fa-github alt"><span class="label">GitHub</span></a></li>
								<li><a target="_blank" href="http://youtube.com/%E5%A4%8F%E7%89%B9%E7%A8%80" class="icon brands fa-youtube alt"><span class="label">Dribbble</span></a></li>
							</ul>
						</section>
                        <!-- <center>
                            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2160145108933116" crossorigin="anonymous"></script> -->
                            <!-- 廣告 -->
                            <!-- <ins class="adsbygoogle"
                                 style="display:block"
                                 data-ad-client="ca-pub-2160145108933116"
                                 data-ad-slot="2737071950"
                                 data-ad-format="auto"
                                 data-full-width-responsive="true"></ins>
                            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                    </center> -->
        			<p class="copyright">&copy; Cutespirit <?php echo date("Y"); ?>.</p>
				</footer>
			</div>
		</div>
		<script>
			const App = {
				data(){
					return{
                        data: [],
                        cacheSearch: '',
						school_id: []
					}
				},
				methods:{
					getClassRoom(){
						const url = 'https://api.tershi.com/getClassRoom';
						axios.get(url).then((res) => {
							this.school_id = res.data;
						});
					}
				},
				created(){
                    this.cacheSearch = cacheSearch;
					this.getClassRoom();
				},
                watch: {
                    cacheSearch: function (id){
                        const url = 'https://api.tershi.com/getTable?id=' + id;
						axios.get(url).then((res) => {
							this.data = res.data;
						});
                    }
                },
				computed:{
                    
				}
			};
			Vue.createApp(App).mount('#app');
		</script>
		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>