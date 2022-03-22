// const showMore = document
//   .getElementById("show-more")
//   .addEventListener("click", function () {
//     const toggleContent = document.getElementById("portfolio-toggle-container");
//     toggleContent.style.visibility = "visible";
//     const mainSection = document.getElementById("main");
//     mainSection.textContent = "";
//     const carouselSection = document.getElementById("carousel");
//     carouselSection.textContent = "";
//   });

// show more porjects

// const showMoreButtons = document.getElementsByClassName("show-more");
// for (const showmoreButton of showMoreButtons) {
//   showmoreButton.addEventListener("click", function () {
//     const toggleContent = document.getElementById("portfolio-toggle-container");
//     toggleContent.style.visibility = "visible";
//     document.getElementById("toggle-content").style.display = "block";
//     const mainSection = document.getElementById("main");
//     mainSection.style.display = "none";
//     const carouselSection = document.getElementById("carousel");
//     carouselSection.style.display = "none";
//   });
// }

// hide content

const hideContent = document
  .getElementById("go-to-back")
  .addEventListener("click", function () {
    const toggleContent = document.getElementById("portfolio-toggle-container");
    toggleContent.style.visibility = "hidden";
    document.getElementById("toggle-content").style.display = "none";
    const mainSection = document.getElementById("main");
    mainSection.style.display = "block";
    const carouselSection = document.getElementById("carousel");
    carouselSection.style.display = "block";
    const portfolioSection = document.getElementById("portfolio-section");
    portfolioSection.textContent = "";
  });

const quickLookButtons = document.getElementsByClassName("quick-look");
for (const quickLookButton of quickLookButtons) {
  quickLookButton.addEventListener("click", function () {
    const projectToggle = document.getElementById("toggle-container-project");
    projectToggle.style.visibility = "visible";
    document.getElementById("toggle-content").style.display = "none";
    document.getElementById("portfolio-toggle-container").textContent = "";
  });
}

// change content of pricing section by clicking button
// static section
function packageStatic() {
  const packagePrice = document
    .getElementById("static")
    .addEventListener("click", function () {
      const priceSectionHeader = (document.getElementById(
        "basic-price-header"
      ).innerHTML = `Make Your Single Page`);

      const packagePrice = (document.getElementById(
        "price-package"
      ).innerHTML = `30.00`);

      const pricingSectionTextP = (document.getElementById(
        "pricing-section-text-p"
      ).innerHTML = `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`);
    });
}
packageStatic();

// standard section
function packageStandard() {
  const packagePrice = document
    .getElementById("standard")
    .addEventListener("click", function () {
      const priceSectionHeader = (document.getElementById(
        "basic-price-header"
      ).innerHTML = `Design Make this Page`);

      const packagePrice = (document.getElementById(
        "price-package"
      ).innerHTML = `45.00`);

      const pricingSectionTextP = (document.getElementById(
        "pricing-section-text-p"
      ).innerHTML = `Making this the first true generator on the Internet. It uses a dictionary & plugin Development.`);
    });
}
packageStandard();

// premium section
function packagePremium() {
  const packagePrice = document
    .getElementById("premium")
    .addEventListener("click", function () {
      const priceSectionHeader = (document.getElementById(
        "basic-price-header"
      ).innerHTML = `Customize Your Single Page`);

      const packagePrice = (document.getElementById(
        "price-package"
      ).innerHTML = `70.00`);

      const pricingSectionTextP = (document.getElementById(
        "pricing-section-text-p"
      ).innerHTML = `I will install your desire theme and made like Theme demo and customize your single page( homepage)`);
    });
}
packagePremium();

// testimonial section
// left arrow buttons
const leftArrow = () => {
  // set event handler to display testmonial one
  const rightArrow = document
    .getElementById("arrow-left")
    .addEventListener("click", function () {
      // when click the left arrow button the testimonial one section will be hide
      const testimonialOne = document.getElementById("client-message-1");
      testimonialOne.style.display = "block";

      // when click the left arrow button the testimonial tow section will be visible
      const testmonialTwo = document.getElementById("client-message-2");
      testmonialTwo.style.display = "none";

      // set background for radio button one
      const radioOne = (document.getElementById(
        "button-1"
      ).style.backgroundColor = "black");

      // set background for radio button two
      const radioTwo = (document.getElementById(
        "button-2"
      ).style.backgroundColor = "#fff");
    });
};

// set event handler to display testmonial two
const rightArrow = () => {
  const arrowRight = document
    .getElementById("arrow-right")
    .addEventListener("click", function () {
      // when click the left arrow button the testimonial one section will be hide
      const testimonialOne = document.getElementById("client-message-1");
      testimonialOne.style.display = "none";

      // when click the left arrow button the testimonial tow section will be visible
      const testmonialTwo = document.getElementById("client-message-2");
      testmonialTwo.style.display = "block";

      // set background for radio button one
      const radioOne = (document.getElementById(
        "button-1"
      ).style.backgroundColor = "#fff");

      // set background for radio button two
      const radioTwo = (document.getElementById(
        "button-2"
      ).style.backgroundColor = "black");
    });
};
leftArrow();
rightArrow();

// testimonial slider section
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// when click the show more button, display all the projects you have done
function portfolioSection() {
  const portfolioSection = document.getElementById("portfolio-section");
  portfolioSection.textContent = "";

  // project number one
  const newProjectsColumn1 = document.createElement("div");
  newProjectsColumn1.classList.add("col");
  newProjectsColumn1.textContent = "";
  newProjectsColumn1.innerHTML = `
    <div class="portfolio-box">
      <div class="portfolio-image">
        <img
          class="img-fluid"
          src="images/portfolios/h4-product-1.jpg"
          alt=""
        />
        <div class="btn hello quick-look">
          <a href="#"
            >quick look
            <i
              style="margin-left: 5px"
              class="fa-solid fa-right-long"
            ></i>
          </a>
        </div>
      </div>
      <div class="portfolio-text">
        <div class="project-name">
          <h3>
            <a href="#">product name</a>
          </h3>
          <small>home decor</small>
        </div>
        <div class="project-price">
          <div class="delete">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>45</span>
          </div>
          <div class="stock-price">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
    `;

  // project number two
  const newProjectsColumn2 = document.createElement("div");
  newProjectsColumn2.classList.add("col");
  newProjectsColumn2.innerHTML = `
    <div class="portfolio-box">
      <div class="portfolio-image">
        <img
          class="img-fluid"
          src="images/portfolios/h4-product-1.jpg"
          alt=""
        />
        <div class="btn hello quick-look">
          <a href="#"
            >quick look
            <i
              style="margin-left: 5px"
              class="fa-solid fa-right-long"
            ></i>
          </a>
        </div>
      </div>
      <div class="portfolio-text">
        <div class="project-name">
          <h3>
            <a href="#">product name</a>
          </h3>
          <small>home decor</small>
        </div>
        <div class="project-price">
          <div class="delete">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>45</span>
          </div>
          <div class="stock-price">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
    `;

  // project number three
  const newProjectsColumn3 = document.createElement("div");
  newProjectsColumn3.classList.add("col");
  newProjectsColumn3.innerHTML = `
    <div class="portfolio-box">
      <div class="portfolio-image">
        <img
          class="img-fluid"
          src="images/portfolios/h4-product-1.jpg"
          alt=""
        />
        <div class="btn hello quick-look">
          <a href="#"
            >quick look
            <i
              style="margin-left: 5px"
              class="fa-solid fa-right-long"
            ></i>
          </a>
        </div>
      </div>
      <div class="portfolio-text">
        <div class="project-name">
          <h3>
            <a href="#">product name</a>
          </h3>
          <small>home decor</small>
        </div>
        <div class="project-price">
          <div class="delete">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>45</span>
          </div>
          <div class="stock-price">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
    `;

  // project number four
  const newProjectsColumn4 = document.createElement("div");
  newProjectsColumn4.classList.add("col");
  newProjectsColumn4.innerHTML = `
    <div class="portfolio-box">
      <div class="portfolio-image">
        <img
          class="img-fluid"
          src="images/portfolios/h4-product-1.jpg"
          alt=""
        />
        <div class="btn hello quick-look">
          <a href="#"
            >quick look
            <i
              style="margin-left: 5px"
              class="fa-solid fa-right-long"
            ></i>
          </a>
        </div>
      </div>
      <div class="portfolio-text">
        <div class="project-name">
          <h3>
            <a href="#">product name</a>
          </h3>
          <small>home decor</small>
        </div>
        <div class="project-price">
          <div class="delete">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>45</span>
          </div>
          <div class="stock-price">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
    `;

  // project number five
  const newProjectsColumn5 = document.createElement("div");
  newProjectsColumn5.classList.add("col");
  newProjectsColumn5.innerHTML = `
    <div class="portfolio-box">
      <div class="portfolio-image">
        <img
          class="img-fluid"
          src="images/portfolios/h4-product-1.jpg"
          alt=""
        />
        <div class="btn hello quick-look">
          <a href="#"
            >quick look
            <i
              style="margin-left: 5px"
              class="fa-solid fa-right-long"
            ></i>
          </a>
        </div>
      </div>
      <div class="portfolio-text">
        <div class="project-name">
          <h3>
            <a href="#">product name</a>
          </h3>
          <small>home decor</small>
        </div>
        <div class="project-price">
          <div class="delete">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>45</span>
          </div>
          <div class="stock-price">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
    `;

  // project number six
  const newProjectsColumn6 = document.createElement("div");
  newProjectsColumn6.classList.add("col");
  newProjectsColumn6.innerHTML = `
    <div class="portfolio-box">
      <div class="portfolio-image">
        <img
          class="img-fluid"
          src="images/portfolios/h4-product-1.jpg"
          alt=""
        />
        <div class="btn hello quick-look">
          <a href="#"
            >quick look
            <i
              style="margin-left: 5px"
              class="fa-solid fa-right-long"
            ></i>
          </a>
        </div>
      </div>
      <div class="portfolio-text">
        <div class="project-name">
          <h3>
            <a href="#">product name</a>
          </h3>
          <small>home decor</small>
        </div>
        <div class="project-price">
          <div class="delete">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>45</span>
          </div>
          <div class="stock-price">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
    `;

  // project number seven
  const newProjectsColumn7 = document.createElement("div");
  newProjectsColumn7.classList.add("col");
  newProjectsColumn7.innerHTML = `
    <div class="portfolio-box">
      <div class="portfolio-image">
        <img
          class="img-fluid"
          src="images/portfolios/h4-product-1.jpg"
          alt=""
        />
        <div class="btn hello quick-look">
          <a href="#"
            >quick look
            <i
              style="margin-left: 5px"
              class="fa-solid fa-right-long"
            ></i>
          </a>
        </div>
      </div>
      <div class="portfolio-text">
        <div class="project-name">
          <h3>
            <a href="#">product name</a>
          </h3>
          <small>home decor</small>
        </div>
        <div class="project-price">
          <div class="delete">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>45</span>
          </div>
          <div class="stock-price">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
    `;

  // project number eight
  const newProjectsColumn8 = document.createElement("div");
  newProjectsColumn8.classList.add("col");
  newProjectsColumn8.innerHTML = `
    <div class="portfolio-box">
      <div class="portfolio-image">
        <img
          class="img-fluid"
          src="images/portfolios/h4-product-1.jpg"
          alt=""
        />
        <div class="btn hello quick-look">
          <a href="#"
            >quick look
            <i
              style="margin-left: 5px"
              class="fa-solid fa-right-long"
            ></i>
          </a>
        </div>
      </div>
      <div class="portfolio-text">
        <div class="project-name">
          <h3>
            <a href="#">product name</a>
          </h3>
          <small>home decor</small>
        </div>
        <div class="project-price">
          <div class="delete">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>45</span>
          </div>
          <div class="stock-price">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
    `;

  // project number nine
  const newProjectsColumn9 = document.createElement("div");
  newProjectsColumn9.classList.add("col");
  newProjectsColumn9.innerHTML = `
    <div class="portfolio-box">
      <div class="portfolio-image">
        <img
          class="img-fluid"
          src="images/portfolios/h4-product-1.jpg"
          alt=""
        />
        <div class="btn hello quick-look">
          <a href="#"
            >quick look
            <i
              style="margin-left: 5px"
              class="fa-solid fa-right-long"
            ></i>
          </a>
        </div>
      </div>
      <div class="portfolio-text">
        <div class="project-name">
          <h3>
            <a href="#">product name</a>
          </h3>
          <small>home decor</small>
        </div>
        <div class="project-price">
          <div class="delete">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>45</span>
          </div>
          <div class="stock-price">
            <i class="fa-solid fa-dollar-sign"></i>
            <span>30</span>
          </div>
        </div>
      </div>
    </div>
    `;

  // portfolioSection.appendChild(newProjectsColumn1);
  // portfolioSection.appendChild(newProjectsColumn2);
  // portfolioSection.appendChild(newProjectsColumn3);
  // portfolioSection.appendChild(newProjectsColumn4);
  // portfolioSection.appendChild(newProjectsColumn5);
  // portfolioSection.appendChild(newProjectsColumn6);
  // portfolioSection.appendChild(newProjectsColumn7);
  // portfolioSection.appendChild(newProjectsColumn8);
  // portfolioSection.appendChild(newProjectsColumn9);
}
