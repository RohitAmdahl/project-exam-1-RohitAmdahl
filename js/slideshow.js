const url = "https://rohitkumar.rkamdahl.no/wp-json/wp/v2/posts?_embed";
console.log(url);
const post = document.querySelector(".slideshow_items");
async function blogPost() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    post.innerHTML = "";
    results.forEach(function (postPic) {
      post.innerHTML += ` <div class="slideshow">
                          <div class ="img">
                          <img src="${postPic.jetpack_featured_media_url}"alt="${postPic._embedded["wp:featuredmedia"]["0"].alt_text}" class="slideshow_img" id ="slide" />
                          <p class="title">
                            ${postPic.title.rendered}
                          </p>
                          </div>
                          <a href="blog_specific.html?id=${postPic.id}">
                          <div class="read_post">
                            <button class="read-post">
                              Read-post
                            </button>
                          </div>
                          </div></a>`;
    });
  } catch (err) {
    post.innerHTML = displayError("we have found an error");
    function displayError(massage) {
      return `<div class ="found-error"> ${massage}</div>`;
    }
  }

  //------------making slide show

  const carouselSlider = document.querySelector(".carousel-slider");
  const slider = document.querySelector(".slideshow_items");
  const rightButton = document.getElementById("right-icon");
  const leftButton = document.getElementById("left-icon");

  leftButton.addEventListener("click", () => {
    carouselSlider.scrollLeft -= 370;
    console.log("left");
  });

  rightButton.addEventListener("click", () => {
    carouselSlider.scrollLeft += 370;
    console.log("right");
  });
}

blogPost();

//-----scroll function on the page----
const scrollTop = document.querySelector(".scroll-top");
scrollTop.addEventListener("click", () => {
  // window.scrollTo(0, 0)
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//....video player---
const videoPlayer = document.querySelector(".animation");
console.log(videoPlayer);
const video = videoPlayer.querySelector(".video");
console.log(video);
const button = videoPlayer.querySelector(".play-pause");
const buttonPaused = videoPlayer.querySelector(".pause-play");
console.log(button);
console.log(button);

button.onclick = () => {
  video.play();
};
buttonPaused.onclick = () => {
  video.pause();
};
