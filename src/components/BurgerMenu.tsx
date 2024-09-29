import { useState } from "react";
import {RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";


import s from "../style/burgerMenu.module.css";

interface BurgerMenuProps {
  scrollToHero: () => void;
  scrollToAboutMe: () => void;
  scrollToSkills: () => void;
  scrollToExperiences: () => void;
  scrollToHobbies: () => void;
  scrollToGrades: () => void;
  scrollToContact: () => void;
}

function BurgerMenu({
  scrollToHero,
  scrollToAboutMe,
  scrollToSkills,
  scrollToExperiences,
  scrollToHobbies,
  scrollToGrades,
  scrollToContact,
}: BurgerMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  // Helper function to handle menu item clicks
  const handleMenuItemClick = (scrollFunction: () => void) => {
    setShowMenu(false); // Close the menu first
    scrollFunction(); // Then execute the scroll
  };

  return (
    <div className={s.burgermenu} style={{ backgroundColor: showMenu ? "#fb770a" : "transparent",
      border: showMenu ? "2.5px solid black" : "none",
       boxShadow: showMenu ? "-5px 6px 0.1px rgba(0, 0, 0, 1)" : "none"
      
     }} >
      <div onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <RxCross2 style={{ color: "black" }} className={s.icons} />
        ) : (
          <MdMenu  style={{ color: "black" }}  className={s.icons} />
        )}
      </div>

      {showMenu && (
        <div className={s.burgermenu_open}>
          <ul className={s.list_flex}>
            <li onClick={() => handleMenuItemClick(scrollToHero)}>Top</li>
            <li onClick={() => handleMenuItemClick(scrollToAboutMe)}>
              About Me
            </li>
            <li onClick={() => handleMenuItemClick(scrollToSkills)}>Skills</li>
            <li onClick={() => handleMenuItemClick(scrollToGrades)}>
              Exams & Grades
            </li>
            <li onClick={() => handleMenuItemClick(scrollToExperiences)}>
              Potential Tasks
            </li>
            <li onClick={() => handleMenuItemClick(scrollToHobbies)}>
              Former Work
            </li>
            <li onClick={() => handleMenuItemClick(scrollToContact)}>
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
