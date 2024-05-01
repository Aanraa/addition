import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto pl-10 ">
      <div className="">
        <div>
          <header className="py-20 sm:text-center">
            <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-bold dark:text-slate-200">
              <Link href="">Блог</Link>
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              Бүх сүүлийн үеийн шинэчлэлүүдийн мэдээллийг агуулсан нэгдсэн сан
            </p>
          </header>
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-7 mx-auto mb-20">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700 dark:text-sky-300">
                    Official User
                  </span>
                  <span className="mt-1 text-gray-500 text-sm dark:text-slate-400">
                    12 Jun 2022
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Өөрчлөлт чинь тэгээд өөрчлөлт шүү дээ
                  </h2>
                  <p className="leading-relaxed dark:text-slate-500">
                    Энэ бол зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л
                    хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу
                    өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу өөрчлөлт.Энэ бол
                    зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн
                    галзуу өөрчлөлт.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-4 cursor-default">
                    Цааш унших
                    <svg
                      className="relative mt-px overflow-visible ml-2.5 text-indogo-500 dark:text-sky-700"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700 dark:text-sky-300">
                    Vendor
                  </span>
                  <span className="mt-1 text-gray-500 text-sm dark:text-slate-400">
                    12 Oct 2021
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Хүн шөнө унтдаггүй байсан бол аймар
                  </h2>
                  <p className="leading-relaxed dark:text-slate-400">
                    Энэ бол зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л
                    хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу
                    өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу өөрчлөлт.Энэ бол
                    зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн
                    галзуу өөрчлөлт.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-4 cursor-default">
                    Цааш унших
                    <svg
                      className="relative mt-px overflow-visible ml-2.5 text-indogo-500 dark:text-sky-700"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700 dark:text-sky-300">
                    Accounting
                  </span>
                  <span className="text-sm text-gray-500 dark:text-slate-400">
                    12 Aug 2021
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Сайхан өөрчлөлт хийсэн дээ
                  </h2>
                  <p className="leading-relaxed dark:text-slate-400">
                    Энэ бол зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л
                    хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу
                    өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу өөрчлөлт.Энэ бол
                    зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн
                    галзуу өөрчлөлт.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-4 cursor-default">
                    Цааш унших
                    <svg
                      className="relative mt-px overflow-visible ml-2.5 text-indogo-500 dark:text-sky-700"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700 dark:text-sky-300">
                    SAP
                  </span>
                  <span className="text-sm text-gray-500 dark:text-slate-400">
                    12 May 2021
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Коффее ууяаа манайхаан
                  </h2>
                  <p className="leading-relaxed dark:text-slate-400">
                    Энэ бол зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л
                    хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу
                    өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу өөрчлөлт.Энэ бол
                    зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн
                    галзуу өөрчлөлт.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-4 cursor-default">
                    Цааш унших
                    <svg
                      className="relative mt-px overflow-visible ml-2.5 text-indogo-500 dark:text-sky-700"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700 dark:text-sky-300">
                    Vendor2
                  </span>
                  <span className="text-sm text-gray-500 dark:text-slate-400">
                    12 Dec 2019
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Заа тэгээд их өөрчлөлт орууллаа даа. Одоо намайг сонго
                  </h2>
                  <p className="leading-relaxed dark:text-slate-400">
                    Энэ бол зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л
                    хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу
                    өөрчлөлт. Энэ бол зүгээр л хамгийн галзуу өөрчлөлт.Энэ бол
                    зүгээр л хамгийн галзуу өөрчлөлт. Энэ бол зүгээр л хамгийн
                    галзуу өөрчлөлт.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-4 cursor-default">
                    Цааш унших
                    <svg
                      className="relative mt-px overflow-visible ml-2.5 text-indogo-500 dark:text-sky-700"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
