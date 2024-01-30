import Earn from "./MenuList/Earn";
import Game from "./MenuList/Game";
import More from "./MenuList/More";
import Trade from "./MenuList/Trade";
import NFT from "./MenuList/NFT";

const MenuList = () => {
  return (
    <div className="menu-list">
      <Trade title="Trade" />
      <Earn title="Earn" />
      <Game title="Game" />
      <NFT title="NFT" />
      <More />
    </div>
  );
};

export default MenuList;
