"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { fetchData } from "@/axios/axios";
import AlertCustom from "./AlertCustom";
import axios from "axios";
interface ResponseInterface {
  title: string;
  description: string;
}

function Banner({ children }: any) {
  const [errorMsg, setErrorMsg] = useState<any>();
  const [data, setData] = useState<ResponseInterface|null>(null)
  const getData = async () => {
    try {
      const { data } = await fetchData(`/api/v1/welcome`);        
       setData(data)
      setErrorMsg(null);
    } catch (err) {
      setErrorMsg("Data not found");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Error content */}
          {errorMsg && (
            <AlertCustom
              msg={errorMsg}
              color={"red"}
              close={() => {
                setErrorMsg(null);
              }}
            />
          )}
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            { data  && <>
                <h1 className="h1">{data.title}</h1> 
                <br></br>
                <p>{data.description}</p>
            </>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
