import Image from "next/image";
import { useState } from "react";
import DocLayout from "../../components/doc-layout";

export default function Test(props) {
  const tes1t = () => {
    alert("hello");
  };
  const [test, setTest] = useState(1);
  // let data = ""

  let activeClass =
    "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-sky-500 before:bg-sky-500";
  let noneClass = "block w-full pl-3.5";
  return (
    <div className=" page-container  max-w-5xl relative mx-auto flex justify-between ">
      <DocLayout active="2" />
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
        <article>
          <header>
            <p className="font-display text-sm font-medium text-sky-500">
              Танилцуулга
            </p>
            <h1
              onClick={() => setTest(2)}
              className={props.active === "1" ? activeClass : noneClass}
            >
              Эхлэл
            </h1>
            {test === 1 && <div>asdfasdfasdfsadfs</div>}
            {test === 2 && <div>test2</div>}
          </header>
          <div className=" py-2 my-2 font-display text-base font-normal tracking-tight text-slate-700 dark:text-white space-y-4">
            <p className="lead font-display text-xl tracking-tight dark:text-white">
              Хэрхэн энэхүү хэсгийг зөв ашиглах зөвлөмжийг та бүхэнд хүргэе
            </p>

            <hr />
            <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]"></div>
                <div className="relative overflow-hidden rounded-xl p-6">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="h-8 w-8 [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]"
                  >
                    <defs>
                      <radialGradient
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        id=":rf:-gradient"
                        gradientTransform="matrix(0 21 -21 0 12 3)"
                      >
                        <stop stopColor="#0EA5E9"></stop>
                        <stop stopColor="#22D3EE" offset=".527"></stop>
                        <stop stopColor="#818CF8" offset="1"></stop>
                      </radialGradient>
                      <radialGradient
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        id=":rf:-gradient-dark"
                        gradientTransform="matrix(0 21 -21 0 16 7)"
                      >
                        <stop stopColor="#0EA5E9"></stop>
                        <stop stopColor="#22D3EE" offset=".527"></stop>
                        <stop stopColor="#818CF8" offset="1"></stop>
                      </radialGradient>
                    </defs>
                    <g className="dark:hidden">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="url(#:rf:-gradient)"
                      ></circle>
                      <path
                        d="m8 8 9 21 2-10 10-2L8 8Z"
                        fillOpacity="0.5"
                        className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <g className="hidden dark:inline">
                      <path
                        d="m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z"
                        fill="url(#:rf:-gradient-dark)"
                        stroke="url(#:rf:-gradient-dark)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
                    <a href="/">
                      <span className="absolute -inset-px rounded-xl"></span>
                      Installation
                    </a>
                  </h2>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                    Step-by-step guides to setting up your system and installing
                    the library.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]"></div>
                <div className="relative overflow-hidden rounded-xl p-6">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="h-8 w-8 [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]"
                  >
                    <defs>
                      <radialGradient
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        id=":rg:-gradient"
                        gradientTransform="matrix(0 21 -21 0 20 3)"
                      >
                        <stop stopColor="#0EA5E9"></stop>
                        <stop stopColor="#22D3EE" offset=".527"></stop>
                        <stop stopColor="#818CF8" offset="1"></stop>
                      </radialGradient>
                      <radialGradient
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        id=":rg:-gradient-dark"
                        gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
                      >
                        <stop stopColor="#0EA5E9"></stop>
                        <stop stopColor="#22D3EE" offset=".527"></stop>
                        <stop stopColor="#818CF8" offset="1"></stop>
                      </radialGradient>
                    </defs>
                    <g className="dark:hidden">
                      <circle
                        cx="20"
                        cy="12"
                        r="12"
                        fill="url(#:rg:-gradient)"
                      ></circle>
                      <g
                        className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
                        fillOpacity="0.5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 5v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"></path>
                        <path d="M18 17v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z"></path>
                        <path d="M18 5v4a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z"></path>
                        <path d="M3 25v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"></path>
                      </g>
                    </g>
                    <g
                      className="hidden dark:inline"
                      fill="url(#:rg:-gradient-dark)"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 17V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm16 10v-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm0-23v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1ZM3 28v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
                      ></path>
                      <path d="M2 4v13h2V4H2Zm2-2a2 2 0 0 0-2 2h2V2Zm8 0H4v2h8V2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 13V4h-2v13h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-8 0h8v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Zm16 1v9h2v-9h-2Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1v-2Zm6 0h-6v2h6v-2Zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm0 9v-9h-2v9h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-6 0h6v-2h-6v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1h-2Zm2-18V4h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2V9Zm8 0h-8v2h8V9Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2V4h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8 0h8V2h-8v2Zm0 0V2a2 2 0 0 0-2 2h2ZM2 25v3h2v-3H2Zm2-2a2 2 0 0 0-2 2h2v-2Zm9 0H4v2h9v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 3v-3h-2v3h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-9 0h9v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Z"></path>
                    </g>
                  </svg>
                  <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
                    <a href="/">
                      <span className="absolute -inset-px rounded-xl"></span>
                      Architecture guide
                    </a>
                  </h2>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                    Learn how the internals work and contribute.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]"></div>
                <div className="relative overflow-hidden rounded-xl p-6">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="h-8 w-8 [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]"
                  >
                    <defs>
                      <radialGradient
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        id=":rh:-gradient"
                        gradientTransform="matrix(0 21 -21 0 20 11)"
                      >
                        <stop stopColor="#0EA5E9"></stop>
                        <stop stopColor="#22D3EE" offset=".527"></stop>
                        <stop stopColor="#818CF8" offset="1"></stop>
                      </radialGradient>
                      <radialGradient
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        id=":rh:-gradient-dark-1"
                        gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
                      >
                        <stop stopColor="#0EA5E9"></stop>
                        <stop stopColor="#22D3EE" offset=".527"></stop>
                        <stop stopColor="#818CF8" offset="1"></stop>
                      </radialGradient>
                      <radialGradient
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        id=":rh:-gradient-dark-2"
                        gradientTransform="matrix(0 14 -14 0 16 10)"
                      >
                        <stop stopColor="#0EA5E9"></stop>
                        <stop stopColor="#22D3EE" offset=".527"></stop>
                        <stop stopColor="#818CF8" offset="1"></stop>
                      </radialGradient>
                    </defs>
                    <g className="dark:hidden">
                      <circle
                        cx="20"
                        cy="20"
                        r="12"
                        fill="url(#:rh:-gradient)"
                      ></circle>
                      <g
                        fillOpacity="0.5"
                        className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9v14l12 6V15L3 9Z"></path>
                        <path d="M27 9v14l-12 6V15l12-6Z"></path>
                      </g>
                      <path
                        d="M11 4h8v2l6 3-10 6L5 9l6-3V4Z"
                        fillOpacity="0.5"
                        className="fill-[var(--icon-background)]"
                      ></path>
                      <g
                        className="stroke-[color:var(--icon-foreground)]"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 5.5 27 9l-12 6L3 9l7-3.5"></path>
                        <path d="M20 5c0 1.105-2.239 2-5 2s-5-.895-5-2m10 0c0-1.105-2.239-2-5-2s-5 .895-5 2m10 0v3c0 1.105-2.239 2-5 2s-5-.895-5-2V5"></path>
                      </g>
                    </g>
                    <g
                      className="hidden dark:inline"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M17.676 3.38a3.887 3.887 0 0 0-3.352 0l-9 4.288C3.907 8.342 3 9.806 3 11.416v9.168c0 1.61.907 3.073 2.324 3.748l9 4.288a3.887 3.887 0 0 0 3.352 0l9-4.288C28.093 23.657 29 22.194 29 20.584v-9.168c0-1.61-.907-3.074-2.324-3.748l-9-4.288Z"
                        stroke="url(#:rh:-gradient-dark-1)"
                      ></path>
                      <path
                        d="M16.406 8.087a.989.989 0 0 0-.812 0l-7 3.598A1.012 1.012 0 0 0 8 12.61v6.78c0 .4.233.762.594.925l7 3.598a.989.989 0 0 0 .812 0l7-3.598c.361-.163.594-.525.594-.925v-6.78c0-.4-.233-.762-.594-.925l-7-3.598Z"
                        fill="url(#:rh:-gradient-dark-2)"
                        stroke="url(#:rh:-gradient-dark-2)"
                      ></path>
                    </g>
                  </svg>
                  <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
                    <a href="/">
                      <span className="absolute -inset-px rounded-xl"></span>
                      Plugins
                    </a>
                  </h2>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                    Extend the library with third-party plugins or write your
                    own.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]"></div>
                <div className="relative overflow-hidden rounded-xl p-6">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="h-8 w-8 [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]"
                  >
                    <defs>
                      <radialGradient
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        id=":ri:-gradient"
                        gradientTransform="matrix(0 21 -21 0 12 11)"
                      >
                        <stop stopColor="#0EA5E9"></stop>
                        <stop stopColor="#22D3EE" offset=".527"></stop>
                        <stop stopColor="#818CF8" offset="1"></stop>
                      </radialGradient>
                      <radialGradient
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        id=":ri:-gradient-dark"
                        gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
                      >
                        <stop stopColor="#0EA5E9"></stop>
                        <stop stopColor="#22D3EE" offset=".527"></stop>
                        <stop stopColor="#818CF8" offset="1"></stop>
                      </radialGradient>
                    </defs>
                    <g className="dark:hidden">
                      <circle
                        cx="12"
                        cy="20"
                        r="12"
                        fill="url(#:ri:-gradient)"
                      ></circle>
                      <path
                        d="M27 12.13 19.87 5 13 11.87v14.26l14-14Z"
                        className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
                        fillOpacity="0.5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 3h10v22a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3Z"
                        className="fill-[var(--icon-background)]"
                        fillOpacity="0.5"
                      ></path>
                      <path
                        d="M3 9v16a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V9M3 9V3h10v6M3 9h10M3 15h10M3 21h10"
                        className="stroke-[color:var(--icon-foreground)]"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M29 29V19h-8.5L13 26c0 1.5-2.5 3-5 3h21Z"
                        fillOpacity="0.5"
                        className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <g className="hidden dark:inline">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 2a1 1 0 0 0-1 1v21a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H3Zm16.752 3.293a1 1 0 0 0-1.593.244l-1.045 2A1 1 0 0 0 17 8v13a1 1 0 0 0 1.71.705l7.999-8.045a1 1 0 0 0-.002-1.412l-6.955-6.955ZM26 18a1 1 0 0 0-.707.293l-10 10A1 1 0 0 0 16 30h13a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1h-3ZM5 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1-5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1-7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z"
                        fill="url(#:ri:-gradient-dark)"
                      ></path>
                    </g>
                  </svg>
                  <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
                    <a href="/">
                      <span className="absolute -inset-px rounded-xl"></span>API
                      reference
                    </a>
                  </h2>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                    Learn to easily customize and modify your app's visual
                    design to fit your brand.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Facebook нь хувь хүмүүс өөрийгөө олон нийтэд танилцуулах, санал
              сэтгэгдлээ хуваалцах эсвэл албан байгууллагууд бизнесээ
              танилцуулах сурталчилах.
            </p>
            <hr />
            <h2 id="Гялс эхлэе" className="font-medium text-lg">
              Гялс эхлэе
            </h2>
            <p>
              Компанийнхаа удирдлагыг Цахиурын Хөндий рүү нүүлгэсэн тэрбумтан
              Маркийг Харвардын Их Сургуулийг дундаас нь хаясан Билл Гейтс ба
              Стив Жобс нартай харьцуулах нь цөөнгүй. Цукерберг ч маш олон
              төрлийн гэрээ хэлцэлийн саналуудыг хүлээж авч байв.
            </p>
            <pre className="prism-code language-shell bg-black rounded-lg px-2 py-3 font-">
              <code>
                <span className="token function text-pink-500 pl-2">npm</span>
                <span className="token plain "> </span>
                <span className="token function text-pink-500">install</span>
                <span className="token plain text-white">
                  {" "}
                  @tailwindlabs/cache-advance
                </span>
              </code>
            </pre>
            <h3 id="et-pariatur-ab-quas" className="font-medium text-lg">
              Түүх
            </h3>
            <p>
              2004 оны 2 дугаар сарын 4-нд Марк Цукерберг Харвардын Их Сургуульд
              компьютерын чиглэлээр суралцдаг, дотуур байрны хажуу өрөөнийхөө
              Эдуардо Саверин (санхүүгийн захирал), Дастин Московиц (програмчин)
              болон Крис Хьюз найз нартайгаа хамт санаачлан Facebook-ийг хийж
              байв.
            </p>
            <div className="my-8 flex rounded-3xl p-6 bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10">
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                fill="none"
                className="h-8 w-8 flex-none [--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]"
              >
                <defs>
                  <radialGradient
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    id=":rk:-gradient"
                    gradientTransform="matrix(0 21 -21 0 20 11)"
                  >
                    <stop stopColor="#0EA5E9"></stop>
                    <stop stopColor="#22D3EE" offset=".527"></stop>
                    <stop stopColor="#818CF8" offset="1"></stop>
                  </radialGradient>
                  <radialGradient
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    id=":rk:-gradient-dark"
                    gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)"
                  >
                    <stop stopColor="#0EA5E9"></stop>
                    <stop stopColor="#22D3EE" offset=".527"></stop>
                    <stop stopColor="#818CF8" offset="1"></stop>
                  </radialGradient>
                </defs>
                <g className="dark:hidden">
                  <circle
                    cx="20"
                    cy="20"
                    r="12"
                    fill="url(#:rk:-gradient)"
                  ></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 24.995c0-1.855 1.094-3.501 2.427-4.792C24.61 18.087 26 15.07 26 12.231 26 7.133 21.523 3 16 3S6 7.133 6 12.23c0 2.84 1.389 5.857 3.573 7.973C10.906 21.494 12 23.14 12 24.995V27a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.005Z"
                    className="fill-[var(--icon-background)]"
                    fillOpacity="0.5"
                  ></path>
                  <path
                    d="M25 12.23c0 2.536-1.254 5.303-3.269 7.255l1.391 1.436c2.354-2.28 3.878-5.547 3.878-8.69h-2ZM16 4c5.047 0 9 3.759 9 8.23h2C27 6.508 21.998 2 16 2v2Zm-9 8.23C7 7.76 10.953 4 16 4V2C10.002 2 5 6.507 5 12.23h2Zm3.269 7.255C8.254 17.533 7 14.766 7 12.23H5c0 3.143 1.523 6.41 3.877 8.69l1.392-1.436ZM13 27v-2.005h-2V27h2Zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm4 0h-4v2h4v-2Zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm0-2.005V27h2v-2.005h-2ZM8.877 20.921C10.132 22.136 11 23.538 11 24.995h2c0-2.253-1.32-4.143-2.731-5.51L8.877 20.92Zm12.854-1.436C20.32 20.852 19 22.742 19 24.995h2c0-1.457.869-2.859 2.122-4.074l-1.391-1.436Z"
                    className="fill-[var(--icon-foreground)]"
                  ></path>
                  <path
                    d="M20 26a1 1 0 1 0 0-2v2Zm-8-2a1 1 0 1 0 0 2v-2Zm2 0h-2v2h2v-2Zm1 1V13.5h-2V25h2Zm-5-11.5v1h2v-1h-2Zm3.5 4.5h5v-2h-5v2Zm8.5-3.5v-1h-2v1h2ZM20 24h-2v2h2v-2Zm-2 0h-4v2h4v-2Zm-1-10.5V25h2V13.5h-2Zm2.5-2.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2ZM18.5 18a3.5 3.5 0 0 0 3.5-3.5h-2a1.5 1.5 0 0 1-1.5 1.5v2ZM10 14.5a3.5 3.5 0 0 0 3.5 3.5v-2a1.5 1.5 0 0 1-1.5-1.5h-2Zm2.5-3.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2Z"
                    className="fill-[var(--icon-foreground)]"
                  ></path>
                </g>
                <g className="hidden dark:inline">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 2C10.002 2 5 6.507 5 12.23c0 3.144 1.523 6.411 3.877 8.691.75.727 1.363 1.52 1.734 2.353.185.415.574.726 1.028.726H12a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5A3.5 3.5 0 0 1 9 14.5V14a3 3 0 1 1 6 0v9a1 1 0 1 0 2 0v-9a3 3 0 1 1 6 0v.5a3.5 3.5 0 0 1-3.5 3.5.5.5 0 0 0-.5.5V23a1 1 0 0 0 1 1h.36c.455 0 .844-.311 1.03-.726.37-.833.982-1.626 1.732-2.353 2.354-2.28 3.878-5.547 3.878-8.69C27 6.507 21.998 2 16 2Zm5 25a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3Zm-8-13v1.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 1-1.5-1.5V14a1 1 0 1 1 2 0Zm6.5 2a.5.5 0 0 1-.5-.5V14a1 1 0 1 1 2 0v.5a1.5 1.5 0 0 1-1.5 1.5Z"
                    fill="url(#:rk:-gradient-dark)"
                  ></path>
                </g>
              </svg>
              <div className="ml-4 flex-auto">
                <p className="m-0 font-display text-xl text-sky-900 dark:text-sky-400">
                  You should know!
                </p>
                <div className="prose mt-2.5 text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300">
                  <p>
                    This is what a disclaimer message looks like. You might want
                    to include inline <code>code</code> in it. Or maybe you’ll
                    want to include a <a href="/">link</a> in it. I don’t think
                    we should get too carried away with other scenarios like
                    lists or tables — that would be silly.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Тус компанийн 2020 оны нийт орлого 85 тэрбум 965 сая доллар
              байжээ. Үүнээс цэвэр ашиг - 29 тэрбум 146 сая доллар. Тус компани
              орлогынхоо 97 хувийг реклам-сурталчилгааны үйлчилгээнээс олдог.
              2021 оны эхний зургаан сарын байдлаар Facebook-ийн цэвэр ашиг 19.9
              тэрбум доллар болсон байна.
            </p>
            <h3 id="natus-aspernatur-iste" className="font-medium text-lg">
              Хориг
            </h3>
            <p>
              Умард Солонгос, Мьянмар, Хятад, Иран, Куба, Туркменстан зэрэг,
              дэлхийн хэд хэдэн оронд тус нийгмийн сүлжээнд нэвтрэх эрхийг
              хаажээ. Ихэнх тохиолдолд хориг нь тус улсад болж буй улс төрийн
              үйл явц эсвэл шашны эсрэг үзэлтэй тэмцэх арга хэмжээ гэж
              тайлбарладаг байна.
            </p>
            <p>
              2007 оны байдлаар Facebook-ийн гүйцэтгэх захирал Цукерберг дэлхийн
              тэрбумтнуудын нэг болсон. Тэрбээр компанийнхаа 30% гаруй хувийг
              эзэмшдэг бөгөөд энэ нь жилд $4 орчим тэрбумын цэвэр ашиг олдог
              байна. Forbes сэтгүүлээс түүнийг 23 настайдаа буюу хамгийн залуу
              тэрбумтан болсон хүнээр шалгаруулсан бөгөөд тэрбээр 20 гаруй насан
              дээрээ тэрбумтан болсон цөөн хэдэн хүний нэг юм.
            </p>
            <hr />
          </div>
        </article>
      </div>
    </div>
  );
}
