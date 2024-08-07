import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import Logo from "../../assets/images/white-logo.png";
import CLogo from "../../assets/images/colorlogo.png";
import AboutIcon from "../../assets/images/about-us.png";
import CareersIcon from "../../assets/images/careers.png";
import PortfolioIcon from "../../assets/images/portfolio.png";
import BlogsIcon from "../../assets/images/blogs.png";
import WebIcon from "../../assets/images/web-dev-icon.png"
import AppIcon from "../../assets/images/app-dev-icon.png"
import QAIcon from "../../assets/images/qa-icon.png"
import BlockchainIcon from "../../assets/images/blockchain-icon.png"
import UIIcon from "../../assets/images/ui-icon.png"
import SupportIcon from "../../assets/images/support-icon.png"



function MainLayout() {
  const menuRef = useRef(null);
  const menuOverlayRef = useRef(null);
  let subMenu;


  const [menuActive, setMenuActive] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const menu = menuRef.current;
    const menuSection = menu ? menu.querySelector(".menu-section") : null;
    const menuArrow = menu ? menu.querySelector(".menu-mobile-arrow") : null;
    const menuClosed = menu ? menu.querySelector(".menu-mobile-close") : null;
    const menuTrigger = document.querySelector(".menu-mobile-trigger");
    const menuOverlay = menuOverlayRef.current;

    const toggleMenu = () => {
      setMenuActive(!menuActive);
      menuOverlay?.classList?.toggle("active");
    };

    const showSubMenu = (hasChildren) => {
      subMenu = hasChildren.querySelector(".menu-subs");
      if (subMenu) {
        subMenu?.classList?.add("active");
        subMenu.style.animation = "slideLeft 0.5s ease forwards";
        const menuTitle =
          hasChildren.querySelector("i")?.parentNode?.childNodes[0].textContent;
        menu.querySelector(".menu-mobile-title").innerHTML = menuTitle;
        menu.querySelector(".menu-mobile-header")?.classList?.add("active");
      }
    };

    const hideSubMenu = () => {
      if(subMenu){
        subMenu.style.animation = "slideRight 0.5s ease forwards";
      }
      setTimeout(() => {
        subMenu?.classList?.remove("active");
        menu.querySelector(".menu-mobile-title").innerHTML = "";
        menu.querySelector(".menu-mobile-header")?.classList?.remove("active");
      }, 300);
    };

    const handleResize = () => {
      if (window.innerWidth > 1195 && menuActive) {
        toggleMenu();
      }
    };

    if (menuSection) {
      menuSection.addEventListener("click", (e) => {
        if (!menu?.classList?.contains("active")) {
          return;
        }
        if (e.target.closest(".menu-item-has-children")) {
          const hasChildren = e.target.closest(".menu-item-has-children");
          showSubMenu(hasChildren);
        }
      });
    }

    if (menuArrow) {
      menuArrow.addEventListener("click", hideSubMenu);
    }

    if (menuTrigger) {
      menuTrigger.addEventListener("click", toggleMenu);
    }

    if (menuClosed) {
      menuClosed.addEventListener("click", toggleMenu);
    }

    if (menuOverlay) {
      menuOverlay.addEventListener("click", toggleMenu);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup event listeners when the component is unmounted
      if (menuSection) {
        menuSection.removeEventListener("click", handleResize);
      }
      if (menuArrow) {
        menuArrow.removeEventListener("click", hideSubMenu);
      }
      if (menuTrigger) {
        menuTrigger.removeEventListener("click", toggleMenu);
      }
      if (menuClosed) {
        menuClosed.removeEventListener("click", toggleMenu);
      }
      if (menuOverlay) {
        menuOverlay.removeEventListener("click", toggleMenu);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [menuActive]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    position: scroll > 50 ? "fixed" : "absolute",
    backgroundColor: scroll > 50 ? "#fff" : "transparent",
    color: scroll > 50 ? "#3E3E3E" : "#fff",
    transition: "all 0.2s ease",
    boxShadow:scroll ? "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)" : ""
  };

  return (
    <>
      <header className="header" style={headerStyle}>
        <div className="px-lg-cus">
          <div className="wrapper-new-menu">
            <div className="logo-btn header-item-left">
              <Link to="/">
                <img
                  className="mb-0 w-[80%] object-cover h-full"
                  src={scroll > 50 ? CLogo : Logo}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="header-item-center">
              {/* <div className="overlay"></div> */}
              <nav
                ref={menuRef}
                className={`menu ${menuActive ? "active" : ""}`}
              >
                <div className="menu-mobile-header">
                  <button type="button" className="btn menu-mobile-arrow">
                    <IoMdArrowRoundBack className="ml-4" size={40} />
                  </button>
                  <div className="menu-mobile-title"></div>
                  <button type="button" className="btn menu-mobile-close">
                    <IoClose size={40} />
                  </button>
                </div>
                <ul className="menu-section ">
                  <li className="menu-item-has-children">
                    <Link to="/" className="!font-poppins">Home</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">Company <i class="ion ion-ios-arrow-down"></i></a>
                    <div className="menu-subs menu-mega menu-column-4 xl:!w-[16%] lg:!w-full md:!w-full sm:!w-full xsm:!w-full xxs:!w-full xxxs:!w-full  xl:!left-[46%] lg:!left-[0%] md:!left-[0%] sm:!left-[0%] xsm:!left-[0%] xxs:!left-[0%] xxxs:!left-[0%]">
                      <div className="list-item">
                        <ul>
                          <li className="menuuu">
                            <a href="/about-us">
                              <img
                                src={AboutIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;About Us
                            </a>
                          </li>
                          <li className="menuuu">
                            <a href="/careers">
                              <img
                                src={CareersIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;Careers
                            </a>
                          </li>
                          <li className="menuuu">
                            <a href="/portfolio">
                              <img
                                src={PortfolioIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;Portfolio
                            </a>
                          </li>
                          <li className="menuuu">
                            <a href="/blogs">
                              <img
                                src={BlogsIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;Blogs
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">Services <i class="ion ion-ios-arrow-down"></i></a>
                    <div className="menu-subs menu-mega menu-column-4">
                      <div className="list-item">
                        <ul>
                          <li className="menuuu">
                            <Link to="#">
                              <img
                                src={WebIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;Web Design & Development
                            </Link>
                          </li>
                          <li className="menuuu">
                            <Link to="#">
                              <img
                                src={AppIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;App Development
                            </Link>
                          </li>
                          <li className="menuuu">
                            <Link to="#">
                              <img
                                src={QAIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;Quality Assurance{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <ul>
                          <li>
                            <Link to="#">
                              <img
                                src={BlockchainIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;Blockchain Development
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img
                                src={UIIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;UI/UX Designing
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img
                                src={SupportIcon}
                                className="w-[20px] object-cover"
                                alt=""
                              />
                              &nbsp;Technical Support
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Dedicated Team</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#" className="hire_team">
                      Contact 
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-item-right d-block d-md-block ">
              <button type="button" className={`btn menu-mobile-trigger xxs:ml-[6.25rem] ml-[3.25rem] `}>
                <span ></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default MainLayout;
