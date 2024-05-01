import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Issue() {
  const [dat, setDat] = useState([]);
  const [iList, setIList] = useState([]);
  const [prId, setPrId] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [selectedProject, setSelectedProject] = useState("all");
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [selectedState, setSelectedState] = useState("all");
  const uniqueNames = [...new Set(iList.map((el) => el.author.name))];

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    getProjNames();
    getProjId();
  }, []);

  const getProjNames = (e) => {
    let url = `https://gitlab.nomin.mn/api/v4/issues?state=${selectedState}&search=${query}`;
    if (selectedState === "all") {
      url = `https://gitlab.nomin.mn/api/v4/issues/?search=${query}`;
    }
    try {
      axios
        .get(url, {
          headers: { Authorization: `Bearer 79LzG4sNzBkwokksLEt6` },
          params: {
            scope: "all",
            order_by: "due_date",
          },
        })
        .then((res) => {
          setIList(res.data);
        });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    const currValue = e.target.value.toLowerCase();
    let result = iList;

    if (selectedAuthor != "all") {
      result = result.filter(
        (project) => project.author.name == selectedAuthor
      );
    }

    if (selectedProject != "all") {
      result = result.filter(
        (project) => project.project_id == selectedProject
      );
    }
    if (selectedState != "all") {
      result = result.filter((project) => project.state == selectedState);
    }
    const filtered = result.filter(
      (e) =>
        e.title.toLowerCase().includes(currValue) ||
        e.description.toLowerCase().includes(currValue)
    );
    setDat(filtered);
  };

  const getProjId = () => {
    axios
      .get("https://gitlab.nomin.mn/api/v4/projects", {
        headers: { Authorization: `Bearer 79LzG4sNzBkwokksLEt6` },
        params: { membership: true },
      })
      .then((res) => {
        setPrId(res.data);
      })

      .catch((err) => console.log(err));
  };

  const renderName = (id) => {
    const temp = prId.filter((element) => {
      if (id === element.id) {
        return element;
      }
    });
    return temp[0]?.name;
  };

  useMemo(() => {
    let result = iList;

    if (selectedAuthor != "all") {
      result = result.filter(
        (project) => project.author.name == selectedAuthor
      );
    }

    if (selectedProject != "all") {
      result = result.filter(
        (project) => project.project_id == selectedProject
      );
    }
    if (selectedState != "all") {
      result = result.filter((project) => project.state == selectedState);
    }
    setDat(result);
  }, [iList, selectedProject, selectedAuthor, selectedState]);

  const handleProjectChange = useCallback((event) => {
    setSelectedProject(event.target.value);
  }, []);

  const handleAuthorChange = useCallback((event) => {
    setSelectedAuthor(event.target.value);
  }, []);

  const handleStateChange = useCallback((event) => {
    setSelectedState(event.target.value);
  }, []);

  const renderDate = (item) => {
    const today = new Date();
    if (item.due_date === null) {
      return <></>;
    }
    if (item.due_date < today.toDateString()) {
      return <p className="text-red-400">Хугацаа дууссан</p>;
    } else {
      return <p>{item.due_date}</p>;
    }
  };

  const renderAssignee = (item) => {
    if (item.assignee === null) {
      return "Хариуцагч байхгүй";
    } else {
      return item.assignee.name;
    }
  };
  const renderState = (el) => {
    if (el.state === "opened") {
      return (
        <span className="inline-block py-2 px-4 rounded bg-indigo-50 text-blue-400 hover:text-blue-500 text-xs font-medium tracking-widest ml-5 dark:bg-slate-700 dark:text-green-400 cursor-default hover:bg-blue-100">
          {el.state}
        </span>
      );
    } else {
      return (
        <span className="inline-block py-2 px-4 rounded bg-indigo-50 text-red-400 hover:text-red-500 text-xs font-medium tracking-widest ml-5 dark:bg-slate-700 dark:text-red-400 cursor-default hover:bg-red-100">
          {el.state}
        </span>
      );
    }
  };
  return (
    <div className="  ">
      <div className="container mx-auto my-24 px-10 pb-12 ">
        <section className="text-gray-600 body-font">
          <div className="container px-0 md:px-10 pb-12 mx-auto">
            <div className=" text-center w-full mb-10">
              <h1 className="lg:w-2/3 mx-auto md:text-2xl text-lg leading-relaxed text-slate-700 font-bold mt-2 md:mt-0 md:block">
                Асуудлуудын жагсаалт 🔥
              </h1>
            </div>
            <div className=" flex-none md:flex justify-self-auto mb-10 md:mb-15 md:justify-between">
              <div>
                <form className="flex items-center justify-center md:flex-none">
                  <label
                    htmlhtmlfor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none ">
                      <IoIosSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <input
                      type="search"
                      value={query}
                      onChange={handleChange}
                      id="search"
                      className="block w-60 p-4 py-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Төслийн нэр ба тайлбар...."
                      required
                    />
                  </div>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
              </div>

              <div className="flex mt-7 sm:mt-3 gap-3 space-x-3 flex-wrap justify-items-center ">
                <div className="flex justify-center  ml-3">
                  <select
                    value={selectedProject}
                    onChange={handleProjectChange}
                    id="project"
                    className=" bg-gray-50 border  text-gray-900 text-sm rounded-lg hover:border-sky-300 focus:ring-blue-500 focus:border-blue-400  w-40 py-2 dark:hover:border-blue-400 dark:bg-slate-900 dark:border-slate-900 dark:placeholder-gray-400 dark:text-white dark:focus:text-white dark:focus:border-blue-500 ring-slate-200 border-solid border-slate-50 mb-5"
                  >
                    <option value="all">Бүх төсөл</option>
                    {prId?.map((val) => (
                      <option key={val.id} value={val.id}>
                        {val.description}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-center ">
                  <select
                    value={selectedAuthor}
                    onChange={handleAuthorChange}
                    id="project"
                    className=" bg-gray-50 border  text-gray-900 text-sm rounded-lg hover:border-sky-300 focus:ring-blue-500 focus:border-blue-400  w-40 py-2 dark:hover:border-blue-400 dark:bg-slate-900 dark:border-slate-900 dark:placeholder-gray-400 dark:text-white dark:focus:text-white dark:focus:border-blue-500 ring-slate-200 border-solid border-slate-50 mb-5"
                  >
                    <option value="all">Бүх үүсгэгч</option>

                    {uniqueNames?.map((el) => {
                      return (
                        <option key={el} value={el}>
                          {el}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="flex justify-center items-center">
                  <select
                    value={selectedState}
                    onChange={handleStateChange}
                    id="project"
                    className=" bg-gray-50 border  text-gray-900 text-sm rounded-lg hover:border-sky-300 focus:ring-blue-500 focus:border-blue-400  w-40 py-2 dark:hover:border-blue-400 dark:bg-slate-900 dark:border-slate-900 dark:placeholder-gray-400 dark:text-white dark:focus:text-white dark:focus:border-blue-500 ring-slate-200 border-solid border-slate-50 mb-5"
                  >
                    <option value="all">Бүх төлөв</option>
                    <option value="closed">Хаагдсан</option>
                    <option value="opened">Нээлттэй </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              {dat?.map((el) => {
                return (
                  <div className="px-0 py-2 sm:p-4 md:w-1/3 sm:w-44px break-normal">
                    <a
                      className="h-full block shadow-sm border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:bg-slate-800"
                      href={`/issue/${el.iid}/${el.project_id}`}
                    >
                      {renderState(el)}
                      <div className="p-6 space-y-2 dark:bg-slate-800">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white ">
                          {el.title}
                        </h1>
                        <p className="leading-relaxed mb-3 dark:text-slate-400 line-clamp-3 break-all md:break-normal">
                          {el.description}
                        </p>
                        <p className="leading-relaxed mb-3 dark:text-slate-400 text-black flex-none md:flex break-normal">
                          Төсөл :
                          <a
                            className=" hover:text-blue-500 ml-2 font-semibold"
                            key={el.id}
                          >
                            {renderName(el.project_id)}
                          </a>
                        </p>
                        <p className="leading-relaxed mb-3 dark:text-slate-400  flex-none md:flex  ">
                          Үүсгэсэн:
                          <a
                            className=" hover:text-blue-500 ml-2 font-semibold"
                            href={el.author.web_url}
                          >
                            {el.author.name}
                          </a>
                        </p>

                        <p className="leading-relaxed mb-3 dark:text-slate-400  flex-none md:flex text-left">
                          Хариуцагч:
                          <a
                            className=" hover:text-blue-500 ml-1 font-semibold"
                            href={el.assignee?.web_url}
                          >
                            {renderAssignee(el)}
                          </a>
                        </p>
                        <p className="leading-relaxed mb-3 dark:text-slate-400  flex-none md:flex ">
                          Дуусах өдөр:
                          <a className="text-blue-400 hover:text-blue-500 ml-1">
                            {renderDate(el)}
                          </a>
                        </p>
                        <div className="flex items-center flex-wrap bottom-0 ">
                          <Link href={`/issue/${el.iid}/${el.project_id}`}>
                            <p className="inline-flex items-center px-3 py-2 mt-4 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                              Дэлгэрэнгүй -&gt;
                            </p>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
