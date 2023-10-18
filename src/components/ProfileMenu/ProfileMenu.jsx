import React, { useState } from 'react';
import './ProfileMenu.css';
const ProfileMenu = ({ user, logout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
     
  return (
    //  Adil sjkwfjhhfgdwhfgkajfhashgg
    <div className="profile-menu">
      <div className="avatar" onClick={toggleMenu}>
        <img src={user.picture} alt="img"  radius="sm"/>
      </div>
      {menuOpen && (
        <div className="dropdown">
          <ul>
            <li onClick={()=> navigate("./favourites", {replace: true})}>Favorites</li>
            <li onClick={()=> navigate("./bookings", {replace: true})}>Bookins</li>
            {/* Add more menu items as needed */}
          <li onClick={()=>{
                localStorage.clear();
                logout()
            }}>
                Logout
            </li>
        </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;