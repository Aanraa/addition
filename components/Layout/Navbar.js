import axios from "axios";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState, useRef, useEffect, router } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

export default function Navbar({ href, label }) {
  const [openVer, setVer] = useState(false);
  const [desc, setDesc] = useState([]);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  // const isHomeActive = router.pathname === "/";
  // const isBlog = router.pathname === "/blog";
  // const isProject = router.pathname === "/doc";
  // const isIssue = router.pathname === "/issue";

  // const dropdownButton = document.getElementById("dropdownInformationButton");
  // const dropdownMenu = document.getElementById("dropdownInformation");

  // dropdownButton.addEventListener("mouseover", () => {
  //   dropdownMenu.classList.remove("hidden");
  // });

  // dropdownButton.addEventListener("mouseout", () => {
  //   dropdownMenu.classList.add("hidden");
  // });

  // dropdownMenu.addEventListener("mouseover", () => {
  //   dropdownMenu.classList.remove("hidden");
  // });

  // dropdownMenu.addEventListener("mouseout", () => {
  //   dropdownMenu.classList.add("hidden");
  // });

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsMoonStarsFill
          className="w-5 h-4 text-blue-400 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <TiWeatherSunny
          className="w-6 h-5 text-yellow-500 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="w-full top-0 sticky z-50 shadow-sm shadow-slate-200 dark:bg-slate-900 ">
      <div className=" bg-white shadow-sm shadow-slate-200 dark:bg-slate-900 dark:shadow-gray-900 w-full">
        <div className=" md:max-w-screen-2xl lg:max-w-screen-2xl h-16 mx-auto my-0 flex items-center justify-center px-40 py-0 bg-white dark:bg-slate-900 ">
          <div className="mr-3 text-lg font-semibold pl-2 pr-2">
            <a
              className="mr-3 md:w-auto text-lg font-bold sm:w-30 px-2 base:w-auto hover:translate-x-3 dark:text-white"
              href="/"
            >
              Nomin
              <span className="sr-only"></span>
            </a>
          </div>

          <div
            className=" relative hidden lg:flex items-center ml-auto"
            id="container"
          >
            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 ">
              <div className="flex flex-col sm:flex-col">
                <ul className="flex space-x-8 md:flex-wrap list-none">
                  <li id="project">
                    <Link href="/doc">
                      <p className="hover:text-sky-400">Төсөл</p>
                    </Link>
                  </li>

                  <li id="blog" className="sm:inline-block text-slate-700">
                    <Link href="/blog">
                      <p
                        className={`hover:text-sky-400 focus:text-sky-500
                            ? "text-sky-500"
                            : "text-slate-700"
                        }`}
                        href="/blog"
                      >
                        Блог
                      </p>
                    </Link>
                  </li>

                  <li id="learn" className="sm:inline-block text-slate-700">
                    <a
                      className={`hover:text-sky-400 focus:text-sky-500
                            ? "text-sky-500"
                            : "text-slate-700"
                        }`}
                      href="/issue"
                    >
                      Асуудал
                    </a>
                  </li>

                  <li className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-500 sm:inline-block dark:pl-7">
                    <label
                      className="sr-only"
                      id="headlessui-listbox-label-3"
                      data-headlessui-state=""
                    >
                      Dark mode
                    </label>
                    <button
                      type="button"
                      id="headlessui-listbox-button-4"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {renderThemeChanger()}
                    </button>
                  </li>
                  <li className="mt-0.5 hover:cursor-pointer hover:text-blue-400 relative ">
                    <Link href="/login">
                      {" "}
                      <FaRegUserCircle
                        size={17}
                        className=""
                        title="User"
                        id="dropdownInformationButton"
                      />
                    </Link>
                    <div
                      id="dropdownInformation"
                      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 h-fit dark:bg-gray-700 dark:divide-gray-600 right-0 top-9 absolute"
                    >
                      <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>UserName</div>
                      </div>
                      <div class="py-2">
                        <a
                          href="/login"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="ml-2 -my-1 lg:hidden">
            <button
              type="button"
              className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 "
            >
              <span className="sr-only">Navigation</span>
              <svg width="24" height="24" fill="none" aria-hidden="true">
                <path
                  d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
