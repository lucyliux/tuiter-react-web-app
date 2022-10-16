import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
           <div class="row mb-2">
                       <div class="col-10">
            <input class="form-control search-form rounded-pill w-100 ps-5"
                   placeholder="Search Twitter" type="search"/>
            <i class="fas fa-search position-absolute top-0 mt-3 ms-3 text-secondary"></i>
          </div>
          <a class="col" href="explore-settings.html">
            <i class="fas fa-cog fa-2x"></i>
          </a>
           </div>
           <ul class="nav mb-2 nav-tabs">
             <li class="nav-item">
            <a href="for-you.html" class="nav-link active text-nowrap">For you</a>
          </li>
          <li class="nav-item">
            <a href="trending.html" class="nav-link">Trending</a>
          </li>
          <li class="nav-item">
            <a href="news.html" class="nav-link">News</a>
          </li>
          <li class="nav-item">
            <a href="sports.html" class="nav-link">Sports</a>
          </li>
          <li class="nav-item d-sm-none d-md-block">
            <a href="entertainment.html" class="nav-link">Entertainment</a>
          </li>
           </ul>
           <!-- image with overlaid text -->
            <img
                src="https://wp.technologyreview.com/wp-content/uploads/2021/12/48953946911_7dae1036a2_o.jpg"
                class="img-fluid pb-2">
            <div class="position-absolute" style="font-size: 30px; top: 470px;">
              <b class="p-2 wd-font-size-large">SpaceX's Starship</b>
            </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
