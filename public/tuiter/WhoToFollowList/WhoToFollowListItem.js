const WhoToFollowListItem = (who) => {
  return `
    <a href="#" class="list-group-item list-group-item-action">
            <div class="row align-items-center pe-2">
              <div class="col-2">
                <img
                    src="../../images/${who.avatarIcon}"
                    class="rounded-circle"
                    style="width: 50px; height: 50px">
              </div>
              <div class="col-7">
                <b style="font-size: 15px">${who.userName}</b></br>
                <small class="text-secondary" style="font-size: 15px">@${who.handle}</small>
              </div>
              <button class="col-3 btn btn-primary rounded-pill"
              style="font-size: 15px">
                Follow
              </button>
            </div>
          </a>
  `;
};

export default WhoToFollowListItem;
