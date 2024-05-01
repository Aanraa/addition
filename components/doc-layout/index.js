import axios from "axios";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useDocContext } from "../../context/state";
import { useRouter } from "next/router";
import { Document, Page } from "react-pdf";

const DocLayout = () => {
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,500&display=swap"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
    />
  </Head>;
  const {
    page,
    setPage,
    setPathName,
    pathName,
    rolee,
    setRolee,
    pName,
    setPName,
  } = useDocContext();
  const [openVer, setVer] = useState(false);
  const [openProj, setProj] = useState(false);
  const [projId, setProjId] = useState([]);
  const [dat, setDat] = useState([]);
  const [currentProject, setCurrentProject] = useState("");
  const [currentModule, setCurrentModule] = useState("");
  const [elementId, setElementId] = useState(0);
  const godMenu = useRef(null);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const closeOpenMenu = (e) => {
      if (godMenu.current && openProj && !godMenu.current.contains(e.target)) {
        setProj(false);
      }
    };
    document.addEventListener("mousedown", closeOpenMenu);
  });

  useEffect(() => {
    selectProjId();
  }, [currentProject]);

  useEffect(() => {
    getProjNames();
  }, [currentModule]);

  useEffect(() => {
    if (slug) {
      if (slug.length > 0 && slug[0] !== "undefined") {
        console.log(slug);
        setCurrentProject(slug[0]);
        if (slug.length > 1) {
          setCurrentModule(slug[1]);
        }
      }
    }
  }, [slug]);

  const getProjNames = () => {
    axios
      .get("https://gitlab.nomin.mn/api/v4/projects", {
        headers: { Authorization: `Bearer 79LzG4sNzBkwokksLEt6` },
        params: { membership: true },
      })
      .then((res) => {
        setDat(res.data);
        // setRolee(res.data.permissions.project_access.access_level);
        setPName(res.data.path);
      })
      .catch((err) => console.log(err));
  };

  const selectProjId = () => {
    axios
      .get(
        `https://gitlab.nomin.mn/api/v4/projects/${currentProject}/wikis?with_content=1`,
        {
          headers: { Authorization: `Bearer 79LzG4sNzBkwokksLEt6` },
          params: { membership: true },
        }
      )
      .then((res) => {
        setProjId(res.data);
      })
      .catch((err) => console.log(err));
  };
  const test = (elementId) => {
    const filtered = dat.filter((e) => e.id == elementId);
    setPathName(filtered[0]?.web_url);
  };
  return (
    <div className="sticky top-0 pr-5 ml-5 ">
      <div className="container max-w-full lg:mt-1 space-x-5 md:space-x-0 bg-gray-50 dark:bg-slate-900 sm:mb-5 flex flex-wrap justify-center md:justify-start   mt-3 md:mt-0">
        <div className="flex md:ml-0 ml-5 md:mb-0 mb-2 lg:pl-2 lg:pt-2 gap-4 dark:bg-slate-900 ">
          <div className="">
            <select
              onChange={(e) => {
                router.push("/doc/" + e.target.value);
                setCurrentProject(e.target.value);
                test(e.target.value);
              }}
              value={currentProject}
              id="project"
              className=" selectTag "
            >
              <option value={""}>Төсөл</option>
              {dat?.map((val) => (
                <option key={val.id} value={val.id}>
                  {val.description}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="block lg:hidden">
          <select
            onChange={(e) => {
              router.push("/doc/" + currentProject + "/" + e.target.value);
              // test(e.target.value);
              setCurrentModule(e.target.value);
            }}
            value={currentModule}
            data-test={currentModule}
            id="module"
            className="selectTag "
          >
            <option value="">Модуль</option>
            {projId?.map((element) => (
              <option
                className=""
                // onChange={handlePath(element.)}
                onClick={(e) => {
                  {
                    router.push("/doc/" + currentProject + "/" + element.title);
                    setCurrentModule(element.title);
                  }
                }}
              >
                <h1
                  className={
                    currentModule === element.title
                      ? ` ${setPage(
                          element.content
                        )} text-slate-900 pl-4 border-l-2 border-sky-400 childMenu dark:text-slate-100`
                      : "childMenu"
                  }
                >
                  {element.title}
                </h1>
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=" -ml-0.5  pl-0.5  mt-8 top-0 sticky z-40">
        <div className="scrollbar-thin overflow-y-auto  scrollbar-thumb-gray-200 scrollbar-track-slate-100  lg:h-[500px] hover:scrollbar-thumb-gray-300 dark:hover:scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-400 dark:scrollbar-track-slate-100">
          <div className="hidden lg:block">
            <nav className="text-base lg:text-sm w-64 pr-8 xl:w-72 flex xl:pr-10">
              <ul className="space-y-9 mt-8" role="list">
                <ul className="block mt-2 space-y-2 text-sm font-normal lg:mt-4 lg:space-y-4">
                  {projId?.map((element) => {
                    return (
                      <li
                        onClick={(e) => {
                          {
                            router.push(
                              "/doc/" + currentProject + "/" + element.title
                            );
                            setCurrentModule(element.title);
                          }
                        }}
                      >
                        <p
                          className={
                            currentModule === element.title
                              ? ` ${setPage(
                                  element.content
                                )} text-slate-900 pl-4 border-l-2 border-sky-400 childMenu dark:text-slate-100`
                              : "childMenu"
                          }
                        >
                          {element.title}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocLayout;
