import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function News() {
  // const newsURL = "https://saurav.tech/NewsAPI/everything/cnn.json";
  const newsURL =
    "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json";
  // const [news, setnews] = useState(null);
  const [showmore, setshowmore] = useState(false);

  // useEffect(() => {
  //   axios.get(newsURL).then((response) => {
  //     setnews(response.data.articles);
  //   });
  // }, []);

  const { data: news } = useQuery(["news"], () => {
    return axios.get(newsURL).then((response) => response.data.articles);
  });

  return (
    <div>
      {news && (
        <div className="mx-4 rounded-xl my-1 bg-[#25292c]">
          <div className="px-2 py-1 font-semibold">What's happening</div>
          <hr
            style={{
              color: "#71767a",
              backgroundColor: "#71767a",
              height: 0.5,
              borderColor: "#71767a",
            }}
          />
          <div className="m-2">
            <div className="flex space-x-1">
              <div className="text-sm font-bold">{news[0].title}</div>
              <img
                className="w-20 h-10 my-auto rounded-md"
                src={news[0].urlToImage}
                alt=""
              />
            </div>
            <div className="text-[#71767a] my-1 text-xs">
              {news[1].source.name}
            </div>
            <hr
              style={{
                color: "#71767a",
                backgroundColor: "#71767a",
                height: 0.5,
                borderColor: "#71767a",
              }}
            />
            <div className="flex space-x-1 mt-1">
              <div className="text-sm font-bold">{news[1].title}</div>
              <img
                className="w-20 h-10 my-auto rounded-md"
                src={news[1].urlToImage}
                alt=""
              />
            </div>
            <div className="text-[#71767a] my-1 text-xs">
              {news[2].source.name}
            </div>
            <hr
              style={{
                color: "#71767a",
                backgroundColor: "#71767a",
                height: 0.5,
                borderColor: "#71767a",
              }}
            />
            <div className="flex space-x-1 mt-1">
              <div className="text-sm font-bold">{news[2].title}</div>
              <img
                className="w-20 h-10 my-auto rounded-md"
                src={news[2].urlToImage}
                alt=""
              />
            </div>
            <div className="text-[#71767a] my-1 text-xs">
              {news[2].source.name}
            </div>
            {showmore && (
              <div>
                <hr
                  style={{
                    color: "#71767a",
                    backgroundColor: "#71767a",
                    height: 0.5,
                    borderColor: "#71767a",
                  }}
                />
                <div className="flex space-x-1 mt-1">
                  <div className="text-sm font-bold">{news[3].title}</div>
                  <img
                    className="w-20 h-10 my-auto rounded-md"
                    src={news[3].urlToImage}
                    alt=""
                  />
                </div>
                <div className="text-[#71767a] my-1 text-xs">
                  {news[2].source.name}
                </div>
                <hr
                  style={{
                    color: "#71767a",
                    backgroundColor: "#71767a",
                    height: 0.5,
                    borderColor: "#71767a",
                  }}
                />
                <div className="flex space-x-1 mt-1">
                  <div className="text-sm font-bold">{news[4].title}</div>
                  <img
                    className="w-20 h-10 my-auto rounded-md"
                    src={news[4].urlToImage}
                    alt=""
                  />
                </div>
                <div className="text-[#71767a] my-1 text-xs">
                  {news[2].source.name}
                </div>
                <hr
                  style={{
                    color: "#71767a",
                    backgroundColor: "#71767a",
                    height: 0.5,
                    borderColor: "#71767a",
                  }}
                />
                <div className="flex space-x-1 mt-1">
                  <div className="text-sm font-bold">{news[5].title}</div>
                  <img
                    className="w-20 h-10 my-auto rounded-md"
                    src={news[5].urlToImage}
                    alt=""
                  />
                </div>
                <div className="text-[#71767a] my-1 text-xs">
                  {news[5].source.name}
                </div>
              </div>
            )}
          </div>
          <hr
            style={{
              color: "#71767a",
              backgroundColor: "#71767a",
              height: 0.5,
              borderColor: "#71767a",
            }}
          />
          <div className="mb-2 mt-1 mx-2">
            <div
              onClick={() => setshowmore(!showmore)}
              className="text-sm pb-1 font-semibold cursor-pointer text-blue-400"
            >
              {showmore ? "Show less" : "Show more"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
