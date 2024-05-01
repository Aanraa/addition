import { useDocContext } from "../../context/state";
import hljs from "highlight.js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ClipboardJS from "clipboard";
import WebViewer from "@pdftron/pdfjs-express-viewer";

export default function ModuleDesc() {
  const [code, setCode] = useState("");
  const viewer = useRef(null);

  useEffect(() => {
    const clip = new ClipboardJS(".copy-code");
    clip.on("success", function (e) {
      console.log("Code copied to clipboard.");
      setTimeout(function () {
        document.getElementsByClassName("copy-code").innerHTML = "Амжилттай";
      }, 3000);
      e.clearSelection();
    });
    return () => {
      clip.destroy();
    };
  }, []);

  var md = require("markdown-it")({
    highlight: function (str, lang, title) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            `<div className="relative">` +
            `<div className="header uppercase p-3 font-normal text-xs md:text-sm md:font-medium ">${lang}</div>` +
            `<pre className="${lang} mt-0  md:p-4 dark:border-slate-800 bg-gray-800 text-gray-100">` +
            `<code  className="">` +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            "</code>" +
            `<button  className="copy-code absolute top-0 right-0  font-light text-xs md:font-medium mr-2 p-2  text-gray-100 bg-gray-700 rounded-md h-40px hover:bg-gray-600" >Хуулах</button>` +
            "</pre>" +
            "</div>"
          );
        } catch (__) {}
      }

      return (
        // '<div className="relative">' +
        `<div className="header uppercase p-3 font-normal text-xs md:text-sm md:font-medium ml-1">${lang}</div>` +
        '<pre className="p-4 border  border-gray-700 rounded-b-md bg-gray-800 text-gray-100">' +
        `<code className="p-2" id="code-${title}">` +
        md.utils.escapeHtml(str) +
        "</code>" +
        `<button className="copy-code absolute top-0 right-0 p-2 pr-3 text-gray-100 bg-gray-700 rounded-tr-md hover:bg-gray-600" >Код хуулах</button>` +
        "</pre>" +
        "</div>"
      );
    },
  })
    .use(require("markdown-it-attribution"))
    .use(require("markdown-it-anchor").default);

  const { page, pathName } = useDocContext();
  const newPage = page.replaceAll(
    "](uploads/",
    `](${pathName}/-/wikis/uploads/`
  );

  const fileUrls = newPage.match(
    /https:\/\/gitlab\.nomin\.mn\/.*?\.(?:pdf|docx|doc|xls|xlsx|ppt|pptx)/gi
  );

  // function openPdfInNewTab(url) {
  //   const extension = url.split(".").pop();
  //   if (extension === "pdf") {
  //     window.open(url);
  //   } else {
  //     const newWindow = window.open();
  //     newWindow.document.write(
  //       '<html><body><div id="viewer"></div></body></html>'
  //     );

  //     WebViewer(
  //       {
  //         path: "/webviewer",
  //         initialDoc: url,
  //         // other PDFTron options go here
  //       },
  //       newWindow.document.getElementById("viewer")
  //     );
  //   }
  // }

  var result = md.render(newPage);

  if (result == !null) {
    document.getElementById("first").reset();
  }

  return (
    <div
      className="prose mx-auto max-w-none prose-slate dark:prose-invert dark:text-slate-400 prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-slate-500 dark:prose-lead:text-slate-400 prose-a:font-semibold dark:prose-a:text-sky-400 prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,2px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:4px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-800 prose-blockquote:border-sky-300 dark:prose-blockquote:border-sky-400
      prose-pre:text-justify prose-pre:break-normal prose-pre:whitespace-pre-wrap"
    >
      <div
        className="block"
        id="first"
        style={{ display: page ? "none" : "block" }}
      >
        <h2>Шинэ эхлэл</h2>
        <p>Бид энэхүү сайтаар юу хийж болох вэ?</p>
        <p>
          Цалингаас цалингийн хооронд, түгжрэлээс түгжрэлийн хооронд таваргадаг
          хэв маягаас салаад жил хагасын хугацаа өнгөрчээ. Одоо би төрж өссөн
          нутагтаа, дуртай зүйлээ, хүссэн газраасаа хийгээд Монголын томоохон
          компанийн С захирлуудтай ижил түвшний цалин авдаг (заримаас нь бол
          илүү ч байж магадгүй). Үүнд хүрэхийн тулд би 4 жилийн турш уйлтлаа
          хичээсэн. Эмнэлгийн яаралтай түргэн тусламжийн өрөөнд ч орж үзсэн.
        </p>
        <h3 className="font-semibold">Зураг</h3>
        <p>
          Тухайн зургыг гараас оруулахад цаанаас хэмжээг нь тодорхойлж өгдөг тул
          ямар нэгэн асуудал гарахгүй. Анх зургаа хийхдээ л маш сайн шалгаж
          нягталсны дараагаар нэмж өгвөл илүү дээр
        </p>
        <Image
          src="/neon.jpg"
          alt="Picture of the author"
          className="rounded-lg"
          width={700}
          height={400}
        />
        <h3>Код</h3>
        <p>
          <Link
            target={"_blank"}
            rel="noopener noreferrer"
            href="http://facebook.com"
          >
            Кодын
          </Link>{" "}
          хэсэг харж бас засаж мөн нэмж болох бөгөөд тухайн хэлийг илтгэсэн
          өргөтгөлүүдээс сонгож өнгсөнөөр өөр өөр тодотголтой харагдах болно. :
        </p>
        <pre>
          <code>
            import java from "java"
            <br />
            const a = b
          </code>
        </pre>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: result.replace(
            /(<a href=")((?:https?:\/\/)?[\w/\-?=%.]+\.[\w/\-&~?=%.]+)(\.*?<\/a>)/gi,
            '<a href="$2" target="_blank">$3</a>'
          ),
        }}
      />
    </div>
  );
}
