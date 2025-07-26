// import React from "react";
import { details } from "./zoom";
const FAQS = () => {
  const faqs = details[0].faqs;
  // console.log(Array.isArray(faqs[1].reply));
  return (
    <div className="overflow-hidden">
      <div className="bg-base-200 p-10 text-center">
        <h1 className="text-3xl font-bold  opacity-70">
          Questions? Look here.
        </h1>
        <p className="my-3 opacity-80">
          Can’t find an answer? Email us at{" "}
          <a
            href="mailto:hello@zoomlifestyle.com"
            className=" text-error hover:underline  "
          >
            hello@zoomlifestyle.com
          </a>
        </p>
      </div>
      <div className=" max-w-300 mx-auto text-center ">
        <div className="join join-vertical bg-base-100 md:max-w-3/5 p-5">
          {faqs.map((item, index) => (
            <div className="collapse collapse-arrow join-item p-3 border-b-base-300 border-b">
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked={index == 0 && true}
              />
              <div className="collapse-title capitalize text-left font-semibold">
                {item.title}
              </div>
              <div className="collapse-content text-left opacity-60 leading-8 text-sm">
                {Array.isArray(item.reply) ? (
                  <ul className="list-disc">
                    {item.reply[0] && <li className="my-3">{item.reply[0]}</li>}
                    {item.reply[1] && (
                      <li className="my-3">{item.reply[1]} </li>
                    )}

                    {item.reply[2] && <li className="my-3">{item.reply[2]}</li>}
                  </ul>
                ) : (
                  item.reply
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
