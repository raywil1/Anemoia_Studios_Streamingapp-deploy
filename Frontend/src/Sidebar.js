import React, { useState } from "react";
import "./Sidebar.css";
import "./App.css";
import {
  AiOutlineBars,
  AiFillIdcard,
  AiFillSetting,
  AiOutlineOrderedList,
  AiOutlineQuestionCircle,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  SSidebar,
  SideButton,
  SConstiner,
  SLink,
  SIcon,
  SLabel,
} from "./SidebarStyles";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <SSidebar isOpen={sidebarOpen}>
      <SideButton
        isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
      >
        <AiOutlineBars />
      </SideButton>
      {SidebarData.map(({ title, link, icon }) => {
        return (
          <SConstiner key={title}>
            <SLink
              to={link}
              className="lineStyle"
              style={!sidebarOpen ? { width: "fit-content" } : {}}
            >
              <SIcon>{icon}</SIcon>
              {sidebarOpen && (
                <>
                  <SLabel>{title}</SLabel>
                </>
              )}
            </SLink>
          </SConstiner>
        );
      })}
    </SSidebar>
  );
}

export const SidebarData = [
  {
    title: "Account",
    link: "/account",
    icon: <AiFillIdcard />,
  },
  {
    title: "Setting",
    link: "/setting",
    icon: <AiFillSetting />,
  },
  {
    title: "Watch List",
    link: "/watch-list",
    icon: <AiOutlineOrderedList />,
  },
  {
    title: "Help",
    link: "/help",
    icon: <AiOutlineQuestionCircle />,
  },
  {
    title: "Log In",
    link: "/log-in",
    icon: <AiOutlineLogin />,
  },
];

export default Sidebar;
