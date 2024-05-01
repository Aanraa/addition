import Link from "next/link";
import { useDocContext } from "../../context/state";
import React, { useEffect, useState } from "react";
import css from "./Instructor.module.css";

var MarkdownIt = require("markdown-it");
var md = new MarkdownIt();
md.use(require("markdown-it-table-of-contents"), {
  includeLevel: [2, 3],
  itemClass: function (level) {
    return level === 3 ? "toc-item-h3" : "toc-item";
  },
  linkClass: "toc-link",
});

const Instructor = () => {
  const { page } = useDocContext();
  const [activeSectionId, setActiveSectionId] = useState(null);
  var result = md.render(`[[toc]]

  ${page}`);
  var firstLine = result.split("\n")[0];
  result = firstLine;

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const sectionId = entry.target.id;
  //         const tocLink = document.querySelector(
  //           `.toc-link[href="#${sectionId}"]`
  //         );
  //         if (entry.isIntersecting) {
  //           setActiveSectionId(sectionId);
  //           tocLink.classList.add("active");
  //         } else {
  //           tocLink.classList.remove("active");
  //         }
  //       });
  //     },
  //     { rootMargin: "-20% 0px -80% 0px" } // adjust as needed
  //   );

  //   const sectionHeadings = Array.from(document.querySelectorAll("h2, h3"));
  //   sectionHeadings.forEach((heading) => {
  //     observer.observe(heading);
  //   });

  //   return () => {
  //     sectionHeadings.forEach((heading) => {
  //       observer.unobserve(heading);
  //     });
  //   };
  // }, []);

  return (
    <div className="hidden xl:sticky xl:top-[9rem] xl:-mr-6 xl:block   xl:overflow-y-auto  xl:px-2 pr-10 pt-5">
      <div>
        <p className="font-semibold">Хөтөч</p>
      </div>
      <nav aria-labelledby="on-this-page-title" className="w-48">
        <div className={css.toc} dangerouslySetInnerHTML={{ __html: result }} />
      </nav>
      <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 font-sans underline underline-offset-4 dark:focus:text-slate-200">
        <Link
          href="doc/testcase"
          className="transform  hover:text-black hover:translate-x-6 scale-75 dark:hover:text-slate-300 dark:hover:translate-y-3"
        >
          Тест кейсүүд
        </Link>
      </p>
    </div>
  );
};

export default Instructor;
