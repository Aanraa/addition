import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { useUserContext } from "../context/user";

export default function Home() {
  const { setUserData, userData } = useUserContext();
  console.log(userData);
  // <Head>
  //   <link rel="preconnect" href="https://fonts.googleapis.com" />
  //   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  //   <link
  //     href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,500&display=swap"
  //     rel="stylesheet"
  //   />
  // </Head>;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 lg:px-10 pt-10 md:pt-20 pb-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="text-lg md:text-2xl font-semibold title-font mb-4 text-gray-900 dark:text-white">
              Төслүүдийн бичиг баримтуудтай танилц
            </h1>

            <p className="lg:w-2/3 mx-auto text-lg md:text-2xl leading-relaxed text-sky-400 font-bold">
              Nomin Documentation Base
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-64 md:h-36 w-full object-cover object-center"
                  src="./wolf.jpg"
                  alt="blog"
                />
                <div className="p-6 space-y-2 dark:bg-slate-800">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                    Vendor
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm dark:text-slate-400 text-sky-500 font-normal">
                    NEXT.JS, SPRINGBOOT, MYSQL
                  </p>
                  <p className="leading-relaxed mb-3 dark:text-slate-400 ">
                    Vendor бол Номин компаний үйлчилгээг гадны хамтран ажиллагч
                    байгууллагуудад хүргэж буй том систем юм. Эрх бүхий албаны
                    хүмүүс ашиглана.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 mt-4 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    >
                      Дэлгэрэнгүй
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-64 md:h-36 w-full object-cover object-center"
                  src="./cforest.png"
                  alt="blog"
                />
                <div className="p-6 space-y-2 dark:bg-slate-800">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                    Accounting
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-slate-400 text-sky-500 text-sm font-normal">
                    DJANGO, PYTHON, MSSQL
                  </p>
                  <p className="leading-relaxed mb-3 dark:text-slate-400">
                    Accounting бол хэрэглэгчийн үйл ажиллагааг илүү идэвхтэй
                    болгоход чиглэсэн дотоод нягтлан болоод бусад эрх бүхий
                    хэрэглэгчид ашиглах систем юм.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 mt-4 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    >
                      Дэлгэрэнгүй
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-64 md:h-36 w-full object-cover object-center"
                  src="./sharp.jpg"
                  alt="blog"
                />
                <div className="p-6 space-y-2 dark:bg-slate-800 ">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                    SAP
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-slate-400 text-sky-500 text-sm font-normal">
                    CSS, JAVA, MSSQL
                  </p>
                  <p className="leading-relaxed mb-3 dark:text-slate-400">
                    SAP бол хэрэглэгчийн үйл ажиллагааг илүү идэвхтэй болгоход
                    чиглэсэн дотоод нягтлан болоод бусад эрх бүхий хэрэглэгчид
                    ашиглах систем юм.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 mt-4 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    >
                      Дэлгэрэнгүй
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container pb-16 mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-64 md:h-36 w-full object-cover object-center"
                  src="./alienman.jpg"
                  alt="blog"
                />
                <div className="p-6 space-y-2 dark:bg-slate-800">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                    Retail
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-slate-400 text-sky-500 text-sm font-normal">
                    TAILWIND, NEXT.JS, JAVA, MSSQL
                  </p>
                  <p className="leading-relaxed mb-3 dark:text-slate-400">
                    Жижиглэн худалдааны үйл ажиллагааны явцыг дэмжихээр бид
                    бусад газруудаас бүтээгдэхүүний санал (үнэ, чанар, туршлага)
                    -ыг харгалзан хамтран ажиллана.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 mt-4 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    >
                      Дэлгэрэнгүй
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-64 md:h-36 w-full object-cover object-center"
                  src="./snowm.jpg"
                  alt="blog"
                />
                <div className="p-6 space-y-2 dark:bg-slate-800">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                    Rac
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-slate-400 text-sky-500 font-normal text-sm">
                    DJANGO, PYTHON, MSSQL
                  </p>
                  <p className="leading-relaxed mb-3 dark:text-slate-400">
                    RAC буюу ажилтан төвтэй явцыг дэмжихээр бид ажилтнуудаас
                    газруудаас бүтээгдэхүүний санал (үнэ, чанар, туршлага) -ыг
                    харгалзан хамтран ажиллана.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 mt-4 mb-2  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    >
                      Дэлгэрэнгүй
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-64 md:h-36 w-full object-cover object-center"
                  src="./moon.jpg"
                  alt="blog"
                />
                <div className="p-6 space-y-2 dark:bg-slate-800">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white ">
                    Star
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-slate-400 text-sky-500 text-sm font-normal">
                    DJANGO, PYTHON, MSSQL
                  </p>
                  <p className="leading-relaxed mb-3 dark:text-slate-400">
                    RAC буюу ажилтан төвтэй явцыг дэмжихээр бид ажилтнуудаас
                    газруудаас бүтээгдэхүүний санал (үнэ, чанар, туршлага) -ыг
                    харгалзан хамтран ажиллана.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 mt-4 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    >
                      Дэлгэрэнгүй
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       user: session.user.email,
//     },
//   };
// }
