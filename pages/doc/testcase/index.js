import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_DESC } from "../../../graphql/queries";
import { TestContent } from "../../../components/testContent";
import { TestLayout } from "../../../components/testLayout";
import axios from "axios";
import { useEffect } from "react";

const TestHome = () => {
  return (
    <div className="flex justify-center max-w-screen-2xl">
      <div className="mx-0  flex max-w-screen-2xl justify-center sm:px-2 lg:px-8 xl:px-10">
        <div className="hidden  lg:block  sm:ml-0  max-w-lg px-5 ml-5">
          <TestLayout />
        </div>
        <div className="py-16 lg:pr-5 xl:pl-4  lg:pl-8 xl:px-10 flex-auto md:max-w-[85ch] px-4  mt-8 ">
          <TestContent />
        </div>
      </div>
    </div>
  );
};
export default TestHome;
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://192.168.90.17:1337/graphql",
    cache: new InMemoryCache(),
  });
  console.log(client, "cliend");
  const data = await client.query({ query: GET_ALL_DESC });

  console.log(data, "data awhu");
  return {
    props: {
      // testCases: data.testCases,
    },
  };
}
