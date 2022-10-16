const PostSummaryItem = (post) => {
  return `
    <div class="list-group-item">
            <div class="row align-items-start">
              <div class="col">
                <span class="text-secondary wd-font-size-medium">${post.topic}</span></br>
                <b class="wd-font-size-medium">${post.userName}</b><span
                  class="text-secondary wd-font-size-medium"> - ${post.time}</span></br>
                <b class="wd-font-size-medium2">${post.title}</b>
              </div>
              <img class="col-2 rounded ps-0 pe-0 pt-0 pb-0 h-100"
                   src=${post.image}>
            </div>
          </div>
  `;
};

export default PostSummaryItem;
