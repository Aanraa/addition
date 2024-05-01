import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useUserContext } from "../../context/user";

const Login = ({ userAgent }) => {
  const { setUserData, userData } = useUserContext();

  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [remMe, setRemMe] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [tkn, setTkn] = useState("");
  const [srInfo, setSrInfo] = useState([]);
  const [inputChanged, setInputChanged] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("remember") == "true") {
      setRemMe(true);
      setUserName(localStorage.getItem("username"));
    } else {
      setRemMe(false);
      setUserName("");
    }
  }, []);

  const handleSubmit = (userName, pass) => {
    axios
      .post(
        `https://keycloak.nomin.mn:8643/auth/realms/nomin-auth/protocol/openid-connect/token`,
        {
          username: userName,
          password: pass,
          client_id: "DocumentationBase",
          client_secret: "c77c7f0e-d855-442e-92bb-0ccaf41a3f75",
          grant_type: "password",
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      )
      .then((res) => {
        axios
          .post(
            `https://keycloak.nomin.mn:8643/auth/realms/nomin-auth/protocol/openid-connect/token/introspect`,
            {
              token: `${res.data.access_token}`,
              client_id: "DocumentationBase",
              client_secret: "c77c7f0e-d855-442e-92bb-0ccaf41a3f75",
            },
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          )
          .then((res) => {
            // res.status(200).json(response.data);
            setUserData(res.data);
            console.log(res.data, "nachin");
          })
          .catch((err) => {
            console.log(err, "err bnnn");
          });

        console.log(res.data, "dataa>>>>>>>>>>>>>>>>");
        // handleInfo(res.data.access_token);
        setData(res.data);
        setFormSubmitted(true);
        setTkn(res.data.access_token);
        router.push("/");
      })
      .catch((err) => {
        console.log(err, "err ");
        setFormSubmitted(true);
        setError(true);
      });
  };

  const handleUser = (event) => {
    setUserName(event.target.value);
  };
  // const handleInfo = (token) => {
  //   axios
  //     .post(
  //       `https://keycloak.nomin.mn:8643/auth/realms/nomin-auth/protocol/openid-connect/token/introspect`,

  //       {
  //         token: token,
  //         client_id: "DocumentationBase",
  //         client_secret: "c77c7f0e-d855-442e-92bb-0ccaf41a3f75",
  //       },
  //       {
  //         headers: {
  //           // Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/x-www-form-urlencoded",
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Headers": "*",
  //           "Access-Control-Allow-Credentials": "true",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // res.status(200).json(response.data);
  //       setUserData(res.data);
  //       console.log(res.data, "nachin");
  //     })
  //     .catch((err) => {
  //       console.log(err, "err bnnn");
  //     });
  // };

  // const handleInfo = (token) => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Headers": "*",
  //       "Access-Control-Allow-Credentials": "true",
  //     },
  //     body: {
  //       token: token,
  //       client_id: "DocumentationBase",
  //       client_secret: "c77c7f0e-d855-442e-92bb-0ccaf41a3f75",
  //     },
  //   };

  //   fetch(
  //     "https://keycloak.nomin.mn:8643/auth/realms/nomin-auth/protocol/openid-connect/token/introspect",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserData(data);
  //       console.log(data, "nachin");
  //     })
  //     .catch((error) => {
  //       console.log(error, "err bnnn");
  //     });
  // };

  const handlePass = (event) => {
    setPassword(event.target.value);
  };

  const sub = (e) => {
    setRemMe(e);
    if (e && userName.length > 0) {
      localStorage.setItem("remember", true);
      localStorage.setItem("username", userName);
    } else {
      localStorage.setItem("remember", false);
      localStorage.setItem("username", "");
    }
  };

  return (
    <div className="w-full">
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center sm:py-12 dark:bg-gray-100 body-font px-6 py-24 mx-auto ">
        <div className=" relative py-4 sm:max-w-xl w-auto sm:mx-auto">
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 rounded-md sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20 dark:bg-slate-600">
            <div className="max-w-md mx-auto">
              <div className="">
                <h1 className="flex justify-center text-lg font-medium leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white mb-5">
                  Тавтай морил!{" "}
                </h1>
                <p
                  href="#"
                  className="flex flex-wrap items-center justify-center  text-lg text-slate-900 font-semibold gap-1 md:text-xl  dark:text-white mx-5"
                >
                  Номин <a className="text-blue-400"> бичиг баримтын</a> сайт
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <form
                    className="space-y-4 md:space-y-6"
                    action="#"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(userName, password);
                    }}
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Нэвтрэх нэр
                      </label>
                      <input
                        onChange={handleUser}
                        type="text"
                        // pattern="[A-Z][a-z]"
                        name="name"
                        id="name"
                        value={userName}
                        required
                        aria-invalid={userName ? "false" : "true"}
                        aria-describedby="name-validation"
                        className={`h-10 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formSubmitted}`}
                        placeholder="3838"
                      />
                      {/* {userName ? null : (
                        <span
                          id="name-validation"
                          style={{ color: "red" }}
                          className="text-sm"
                        >
                          Нэвтрэх нэрээ оруулна уу
                        </span>
                      )} */}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Нууц үг
                      </label>
                      <input
                        onChange={handlePass}
                        onClick={() => {
                          setError(false);
                          setFormSubmitted(false);
                        }}
                        type="password"
                        name="pass"
                        id="pass"
                        placeholder="••••••••"
                        required
                        aria-invalid={password ? "false" : "true"}
                        aria-describedby="name-validation"
                        className={`h-10 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formSubmitted}`}
                      />
                      {/* {password ? null : (
                        <span
                          id="name-validation"
                          style={{ color: "red" }}
                          className="text-sm"
                        >
                          Нууц үгээ оруулна уу
                        </span>
                      )} */}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            checked={remMe}
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-white dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                            // onChange={(e) => setRemMe(e.target.checked)}
                            onChange={(e) => sub(e.target.checked)}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Намайг сана
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group w-full  px-5 py-2 border-2 border-gray-300 rounded-lg transition duration-300 text-md
                    hover:border-blue-400 focus:bg-blue-400 active:bg-blue-400 bg-blue-500 text-white font-semibold"
                    >
                      Нэвтрэх
                    </button>
                  </form>
                  {error && formSubmitted ? (
                    <div className="text-red-400 text-center text-base flex-wrap">
                      <p className="mt-5">Нэвтрэх нэр, нууц үг буруу байна</p>
                    </div>
                  ) : null}

                  {!error && formSubmitted ? (
                    <div className="text-green-400 text-center text-base flex-wrap">
                      <p className="mt-5">Амжилттай</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
