import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Navbar from "./Navbar";
import Photos from "./Photos";
import Spinner from "./Spinner";

const ImageApp = () => {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const per_page = 10;

  // const func = async () => {
  useEffect(() => {
    try {
      const fetchApi = async () => {
        setLoading(true);
        const res = await fetch(
          `https://api.unsplash.com/search/photos?per_page=${per_page}&page=${page}&query=${search}&client_id=${process.env.REACT_APP_IMAGE_API}`
        );
        const resJson = await res.json();
        // console.log(resJson);
        setImage(resJson.results);
        setLoading(false);
      };
      fetchApi();
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  // };

  // useEffect(() => {
  //   func();
  // }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const getData = async () => {
    const resp = await fetch(
      `https://api.unsplash.com/search/photos?per_page=${per_page}&query=random&client_id=${process.env.REACT_APP_IMAGE_API}`
    );
    const ResJson = await resp.json();
    // console.log(resJson);
    setImage(ResJson.results);
    setLoading(false);
  };
  useEffect(() => {
    // if (!search) {
    setLoading(true);
    // getData();
    setLoading(false);
    // }
  }, [!search]);

  const fetchMoreData = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?per_page=${per_page}&page=${page}&query=${search}&client_id=${process.env.REACT_APP_IMAGE_API}`
      );
      setPage(page + 1);
      const resJson = await res.json();
      setImage(image.concat(resJson.results));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex flex-direction-column justify-content-center backgroundImage"
        style={{
          height: "53vh",
          flexDirection: "column",
          marginBottom: "45px",
        }}
      >
        <div
          className="d-flex flex-direction-column"
          style={{
            color: "white",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "3rem" }}>GalleryX</h2>
          <p style={{ fontSize: "20px" }}>The internet’s source for visuals.</p>
        </div>
        <form className="d-flex justify-content-center mt-3 " role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search free photos"
            aria-label="Search"
            value={search}
            onChange={handleInputChange}
            style={{ width: "65%", padding: " 13px 18px" }}
          />
          <button
            className="btn btn-primary"
            type="search"
            // onClick={func}
            disabled={!search}
            // value={search}
          >
            Search
          </button>
        </form>
      </div>
      <div className="container">
        {loading && <Spinner />}
        {/* <InfiniteScroll
          datlength={image.length}
          loadMore={fetchMoreData}
          hasMore={image.length !== image.results}
          loader={!page == 1 && <Spinner />}
           key={image.results}
        > */}
        <div className="row">
          {image &&
            image.map((value, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <Photos
                    urls={value.urls ? value.urls : ""}
                    user={value.user ? value.user : ""}
                    links={value.links ? value.links : ""}
                    description={value.description ? value.description : ""}
                    likes={value.likes ? value.likes : ""}
                  />
                </div>
              );
            })}
        </div>
        {/* </InfiniteScroll> */}
      </div>
    </>
  );
};

export default ImageApp;
