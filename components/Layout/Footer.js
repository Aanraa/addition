import { Head } from "next/document";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  <Head>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
    />
  </Head>;
  return (
    // <div className={style.main}>
    //   <div className={style.container}>
    //     <ul className={style.socials}>
    //       <li className={style.items}>
    //         <FaFacebook size={33} color="white" className={style.it} />
    //       </li>
    //       <li className={style.items}>
    //         <FaTwitter size={33} color="white" className={style.it} />
    //       </li>
    //       <li>
    //         <FaYoutube size={33} color="white" className={style.it} />
    //       </li>
    //       <li className={style.items}>
    //         <FaLinkedin size={33} color="white" className={style.it} />
    //       </li>
    //       <li className={style.items}>
    //         <FaGoogle size={31} color="white" className={style.it} />
    //       </li>
    //     </ul>
    //   </div>
    //   <div className={style.footerCopyright}>
    //     <p
    //       className="right"
    //       style={{ marginTop: "5px", fontSize: "14px", color: "white" }}
    //     >
    //       <a style={{}}>&copy;</a> 2022 ALL Rights Reserved
    //     </p>
    //   </div>
    // </div>
    <div className="sticky top-[100vh] pt-15">
      <footer className="">
        <div className="flex justify-center items-center text-center bg-gray-900 text-white p-2 dark:bg-slate-800">
          <div className="md:max-w-lg mx-auto">
            <div className="flex justify-center items-center my-4 md:col-auto md:row-auto">
              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
              >
                <FaTwitter size={23} color="white" className="ml-1 mt-1" />
              </a>

              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-white text-white  leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0  w-9 h-9 m-1"
              >
                <FaFacebook size={24} color="white" className="ml-1 mt-1" />
              </a>

              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-white border-r-2 text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0  w-9 h-9 m-1"
              >
                {/* border: 1.1px solid black; padding: 4px; border-radius: 50%;
                border-color: white; */}
                <FaInstagram size={24} color="white" className="ml-1 mt-1" />
              </a>
            </div>

            <div className=" p-4 flex flex-col items-center text-sm  text-gray-500 w-full   ">
              <div className=" ">
                <ul className="flex flex-wrap md:flex-row items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400 list-none">
                  <li>
                    <a
                      href="#"
                      className="mr-4 hover:text-white opacity-90 md:mr-6 "
                    >
                      Мэдээлэл
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mr-4 hover:text-white opacity-90 md:mr-6"
                    >
                      Тусламж
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mr-4 hover:text-white opacity-90 md:mr-6 "
                    >
                      Маркетинг
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mr-4 hover:text-white opacity-90 md:mr-6 "
                    >
                      Ашиглах заавар
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white opacity-90">
                      Нууцлал
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center p-4 flex justify-center items-center text-sm text-gray-500 mb-8">
              © 2022 Nomin United -
              <a
                href="https://nomin.co"
                className="text-gray-600 ml-1 hover:text-blue-400"
                rel="noopener noreferrer"
                target="_blank"
              >
                @aanraa
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
