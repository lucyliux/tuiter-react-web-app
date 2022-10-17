import WhoToFollowListItem from "./WhoToFollowListItem.js";
import people from "./who.js";

const WhoToFollowList = () => {
  return `
      <ul class="list-group">
         ${people
           .map((who) => {
             return WhoToFollowListItem(who);
           })
           .join("")}
      </ul>
   `;
};
export default WhoToFollowList;
