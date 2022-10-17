const NavigationSidebar = () => {
  return `
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item" href="../home.html">
       <i class="fas fa-home"></i> 
       <span class="d-none d-xl-inline"> Home</span>
     </a>
     <a class="list-group-item active" href="#">
       <i class="fas fa-hashtag"></i>
       <span class="d-none d-xl-inline"> Explore</span>
     </a>
     <a class="list-group-item" href="/">
       <i class="fas fa-bell"></i>
       <span class="d-none d-xl-inline"> Notifications</span>
     </a>
     <a class="list-group-item" href="/">
       <i class="fas fa-envelope"></i>
       <span class="d-none d-xl-inline"> Messages</span>
     </a>
     <a class="list-group-item" href="../bookmarks/index.html">
       <i class="fas fa-bookmark"></i> 
       <span class="d-none d-xl-inline"> Bookmarks</span>
     </a>
     <a class="list-group-item" href="/">
       <i class="fas fa-list"></i>
       <span class="d-none d-xl-inline"> Lists</span>
     </a>
     <a class="list-group-item" href="../profile.html">
       <i class="fas fa-user"></i> 
       <span class="d-none d-xl-inline"> Profile</span>
     </a>
     <a class="list-group-item" href="/">
       <i class="fas fa-ellipsis-h"></i> 
       <span class="d-none d-xl-inline"> More</span>
     </a>
   </div>
     <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `;
};
export default NavigationSidebar;
