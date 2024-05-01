import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import $ from "jquery";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import hljs from "highlight.js";
import Modal from "react-modal";
import Emoji from "react-emoji-render";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    height: "auto",
    blur: "4px",
  },
};
export default function IssuePost() {
  var md = require("markdown-it")({
    html: true,
    linkify: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            `<pre className="hljs ${lang}"><code>` +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            "</code></pre>"
          );
        } catch (__) {}
      }

      return (
        '<pre className="hljs"><code>' +
        md.utils.escapeHtml(str) +
        "</code></pre>"
      );
    },
  })
    .use(require("markdown-it-attribution"))
    .use(require("markdown-it-anchor").default);

  const router = useRouter();

  const [data, setData] = useState([]);
  const [notes, setNotes] = useState([]);
  const [prjDtl, setPrjDtl] = useState([]);
  const [pName, setPName] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [rolee, setRolee] = useState("");
  const [pathName, setPathName] = useState("");
  // const [datWithEmoj, setDatWithEmoj] = useState([]);
  // const [noteId, setNoteId] = useState("");

  useEffect(() => {
    initialization();
  }, [router]);

  let initialization = () => {
    let tmp = [];
    if (router?.asPath.split("/")?.length !== 4) return;
    router?.asPath.split("/").forEach((el, key) => {
      if (key === 2 || key === 3) {
        tmp.push(parseInt(el));
      }
    });
    if (tmp.length === 0) {
      tmp.push(0);
      tmp.push(0);
    } else if (tmp.length === 1) tmp.push(0);
    getDtl({ value: tmp });
    getNotes({ value: tmp });
    getProjNames({ value: tmp });

    setTimeout(function () {
      $(".md_main img").on("click", function (e) {
        // alert("clicked" + e);
        if (e.target.currentSrc) {
          <p>Hello</p>;
          setModalImage(e.target.currentSrc);
          setModalIsOpen(true);
        } else {
          setModalImage(e.target.currentSrc);
          setModalIsOpen(true);
        }
      });
    }, 1000);
  };

  const getProjNames = ({ value = [0, 0] }) => {
    axios
      .get(`https://gitlab.nomin.mn/api/v4/projects/${value[1]}`, {
        headers: { Authorization: `Bearer 79LzG4sNzBkwokksLEt6` },
        params: { membership: true },
      })
      .then((res) => {
        setPrjDtl(res.data);
        setPName(res.data.path);
        setRolee(res.data.permissions.project_access.access_level);
        setPathName(res.data.path_with_namespace);
      })
      .catch((err) => console.log(err));
  };

  const getDtl = ({ value = [0, 0] }) => {
    try {
      axios
        .get(
          `https://gitlab.nomin.mn/api/v4/projects/${value[1]}/issues/${value[0]}`,
          {
            headers: { Authorization: `Bearer 79LzG4sNzBkwokksLEt6` },
          }
        )
        .then((res) => setData(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const getNotes = ({ value = [0, 0] }) => {
    try {
      axios
        .get(
          `https://gitlab.nomin.mn/api/v4/projects/${value[1]}/issues/${value[0]}/discussions`,
          {
            headers: { Authorization: `Bearer 79LzG4sNzBkwokksLEt6` },
          }
        )
        .then((res) => {
          // axios
          //   .get(
          //     `https://gitlab.nomin.mn/api/v4/projects/${value[1]}/issues/${value[0]}/${noteId}/award_emoji`,
          //     {
          //       headers: { Authorization: `Bearer 79LzG4sNzBkwokksLEt6` },
          //     }
          //   )
          //   .then((res) => {
          //     setDatWithEmoj(res.data);
          //   })
          //   .catch((err) => console.log(err));
          setNotes(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const moment = require("moment");
  const datee = moment(data.created_at).format("YYYY-MM-DD");

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // const real = () => {
  //   console.log(datWithEmoj, "emoji data>>>>>>");
  //   const emojiData = {};
  //   datWithEmoj.forEach((comment) => {
  //     const emojis = comment.emojis;
  //     if (emojis) {
  //       emojis.forEach((emoji) => {
  //         const name = emoji.name;
  //         if (namee in emojiData) {
  //           emojiData[name]++;
  //         } else {
  //           emojiData[name] = 1;
  //         }
  //       });
  //     }
  //   });
  //   return (
  //     <div>
  //       <p className="text-gray-500 dark:text-gray-400 gap-2 ">
  //         <Emoji text={`:${name}:`} className="h-3 w-3" />
  //         <span className="ml-2 text-base mt-0.5 ">1</span>
  //       </p>
  //     </div>
  //   );
  // };

  const handleState = (e) => {
    if (e.state === "opened") {
      return (
        <span className="bg-green-400 text-white px-3 py-1 tracking-widest text-xs absolute right-5 top-11  rounded-lg hover:bg-black hover:text-white cursor-default ">
          {data.state}
        </span>
      );
    } else {
      return (
        <span className="bg-red-400 text-white px-3 py-1 tracking-widest text-xs absolute right-5 top-11 rounded-lg hover:bg-black  text-center hover:text-whitecursor-default ">
          {data.state}
        </span>
      );
    }
  };

  const handleBodyOne = (e) => {
    if (rolee === 40) {
      const rd = e?.replaceAll(
        "](/uploads/",
        `](https://gitlab.nomin.mn/${pathName}/uploads/`
      );
      var result = md.render(`${rd}`);
      return (
        <div className="md_main">
          <div dangerouslySetInnerHTML={{ __html: result }} />
          <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            {/* <img src={modalImage} /> */}
            <button
              className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2 py-0.5  text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900  fixed right-2 top-4"
              onClick={closeModal}
            >
              Х
            </button>{" "}
            <img src={modalImage} />
          </Modal>
        </div>
      );
    } else {
      const rd = e?.replaceAll(
        "](/uploads/",
        `](https://gitlab.nomin.mn/java/${pName}/uploads/`
      );

      var result = md.render(`${rd}`);

      return (
        <div className="md_main">
          <div dangerouslySetInnerHTML={{ __html: result }} />
          <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <button
              className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2 py-0.5  text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900  fixed right-2 top-4 "
              onClick={closeModal}
            >
              Х
            </button>
            <img src={modalImage} />
          </Modal>
        </div>
      );
    }
  };

  return (
    <div
      className="text-gray-600  prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-slate-500 dark:prose-lead:text-slate-400 prose-a:font-semibold dark:prose-a:text-slate-200 dark:hover:prose-a:text-slate-300 prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,2px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:4px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-800 prose-blockquote:border-sky-300 dark:prose-blockquote:border-sky-400
    prose-pre:text-justify prose-pre:break-normal prose-pre:whitespace-pre-wrap	"
    >
      <div className="  pt-24 pb-10 mx-auto w-full px-5 md:px-16 lg:w-3/5  xl:w-1/2 relative">
        <div className="block  mb-8 text-center">
          <Link href="/issue">
            <p
              // onClick={() => window.history.back()}
              className="bg-slate-100 px-3 py-1 tracking-widest absolute left-5 top-7 rounded-lg hover:bg-slate-200 hover:text-black cursor-default dark:text-slate-700 dark:hover:text-black
              "
            >
              <BiArrowBack
                width={8}
                height={8}
                href="/issue"
                className="dark:bg-text-slate-700"
              />
            </p>
          </Link>
          <p className="">{handleState(data)}</p>
          <h1 className=" sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-8 ">
            {data.title}
          </h1>
          <div>{handleBodyOne(data.description)}</div>
        </div>
        <div className="w-full flex-wrap flex bg-slate-100 py-10 rounded-md text-center  dark:bg-slate-600 ">
          <div className=" sm:w-1/2 w-full ">
            <p className="text-blue-400 mb-2 ">
              Үүсгэсэн:{" "}
              <a
                className="text-black hover:text-slate-600 hover:underline-offset-4 break-normal underline"
                href={data.author?.web_url}
              >
                {/* <Image src={data.avatar_url} width={5} height={5} />{" "}*/}
                {data.author?.name}
              </a>
            </p>
            <p className="text-indigo-400 mr-6">
              Хариуцагч:{" "}
              <a
                className="text-black hover:text-slate-600 hover:underline-offset-4 underline"
                href={data.assignee?.web_url}
              >
                {data.assignee?.name}
              </a>
            </p>
          </div>
          <div className="h-[1px] w-4/5 mx-auto mt-5 bg-slate-300 md:hidden"></div>
          <div className="  sm:w-1/2 w-full mt-5 sm:mt-0">
            <p className="text-blue-400 mb-2">
              Үүссэн өдөр: <a className="text-black break-normal">{datee}</a>
            </p>

            <p className="text-indigo-400">
              Дуусах өдөр:{" "}
              <a className="text-black break-normal"> {data.due_date}</a>
            </p>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden bg-white py-8 dark:bg-gray-900 lg:py-10">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-center mb-12 text-xl font-medium text-slate-700 ">
            Сэтгэгдэл
          </h2>
          {notes?.map((note) => {
            return (
              <>
                {note?.notes.map((el, index) => {
                  console.log(el, "element bnn");
                  if (index == 0)
                    return (
                      <article className="mb-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900 border border-slate-100 ">
                        <footer className="mb-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <p className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                              <img
                                className="mr-2 h-6 w-6 rounded-full"
                                src={el.author?.avatar_url}
                                alt={el.author?.name}
                              />
                              <div className="truncate">
                                <Link href={el.author?.web_url}>
                                  {el.author?.name}
                                </Link>
                              </div>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 hover:cursor-default">
                              <time
                                pubdate
                                datetime="yyyy-mm-dd"
                                title={moment(el.created_at).format("L")}
                              >
                                {moment(el.created_at).format("L")}
                              </time>
                            </p>
                          </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">
                          {handleBodyOne(el.body)}
                        </p>
                        {/* <p className="text-gray-500 dark:text-gray-400 gap-2 ">
                          {real()}
                        </p> */}
                      </article>
                    );
                  else {
                    return (
                      <article className="mb-6 ml-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900 lg:ml-12 border border-slate-100">
                        <footer className="mb-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <p className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                              <img
                                className="mr-2 h-6 w-6 rounded-full"
                                src={el.author?.avatar_url}
                                alt={el.author?.name}
                              />
                              <Link href={el.author?.web_url} className="py-0">
                                {el.author?.name}
                              </Link>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              <time
                                pubdate
                                datetime="yyyy-mm-dd"
                                title={moment(el.created_at).format("L")}
                              >
                                {moment(el.created_at).format("L")}
                              </time>
                            </p>
                          </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400 my-1">
                          {el.body}
                        </p>
                        {/* <p className="text-gray-500 dark:text-gray-400 gap-2 ">
                          {real()}
                        </p> */}
                      </article>
                    );
                  }
                })}
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
