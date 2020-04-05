<template>
  	<section id="sidebar">

						<!-- Intro -->
							<section id="intro">
								<a href="#" class="logo"><img :src="theBabes" alt="" /></a>
								<header>
									<h2>The Bahblog</h2>
									<p>The blog of Claire and Nate Spilman</p>
								</header>
							</section>

							<!-- <section>
								<div class="mini-posts">

										<article class="mini-post">
											<header>
												<h3><a href="single.html">Vitae sed condimentum</a></h3>
												<time class="published" datetime="2015-10-20">October 20, 2015</time>
												<a href="#" class="author"><img src="images/avatar.jpg" alt="" /></a>
											</header>
											<a href="single.html" class="image"><img src="images/pic04.jpg" alt="" /></a>
										</article>


								</div>
							</section> -->

							<!-- <section>
								<ul class="posts">
									<li>
										<article>
											<header>
												<h3><a href="single.html">Lorem ipsum fermentum ut nisl vitae</a></h3>
												<time class="published" datetime="2015-10-20">October 20, 2015</time>
											</header>
											<a href="single.html" class="image"><img src="images/pic08.jpg" alt="" /></a>
										</article>
									</li>
								</ul>
							</section> -->

						<!-- About -->
							<section class="blurb">
								<h2>About</h2>
								<p>Thank you for stopping by our blog. This website serves as a place for us to share travel photos and stories, favorite recipes and general updates for friends and family.</p>
							</section>

						<!-- Footer -->
							<!-- <section id="footer">
								<ul class="icons">
									<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
									<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="#" class="icon solid fa-rss"><span class="label">RSS</span></a></li>
									<li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
								</ul>
							</section> -->

					</section>
</template>

<script>
import theBabes from "../assets/img/theBabes.jpg";
export default {
  data(){
    return {
      theBabes
    }
  }
};
</script>

<style>
#sidebar{

}

#intro{

}

</style>