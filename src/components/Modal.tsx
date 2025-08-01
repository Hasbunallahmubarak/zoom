"use client";
import { useState } from "react";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
interface Props {
  open: boolean;
  openFunc: () => void;
  closeFunc: () => void;
}
export default function Example({ open, openFunc, closeFunc }: Props) {
  const [formData, setFormData] = useState({
    // image: dummyImage,
    name: "",

    email: "",
    password: "",
    gender: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };
  console.log(formData);
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <Dialog open={open} onClose={openFunc} className="relative z-2">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-2 w-full overflow-y-auto">
          <span
            className="absolute text-5xl active:rotate-45 text-base-300 right-8 top-20 cursor-pointer"
            onClick={closeFunc}
          >
            &times;
          </span>
          <div className="flex  min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative md:min-w-2/5 transform p-5 overflow-hidden  rounded-lg bg-base-100 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <form>
                <div className="text-center">
                  <DialogTitle className={"text-3xl my-3 opacity-97 bold"}>
                    Welcome Back
                  </DialogTitle>
                  <p className="opacity-60">
                    Sign in to your account to continue
                  </p>
                </div>

                <input
                  type="email"
                  placeholder="Email/Phone Number"
                  required
                  className="w-full mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                  name="email"
                  value={formData.email}
                  onChange={() => handleChange(event)}
                ></input>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full mt-5 px-5 py-3 border-1 border-base-300 opacity-80 focus:border-error outline-0"
                  name="password"
                  value={formData.password}
                  onChange={() => handleChange(event)}
                ></input>

                <input
                  type="submit"
                  value={"Sign in"}
                  onSubmit={() => handleSubmit(event)}
                  className="w-full my-3 px-5 py-3 border-base-300 text-white opacity-80 bg-error cursor-pointer hover:opacity-100  outline-0"
                />
                <div className="flex justify-between my-1">
                  <a
                    href={"https://zoomlife.netlify.app/"}
                    className="w-12/25 hover:bg-error hover:text-white text-sm btn border-1 border-error px-5 py-3 bg-base-100 text-error opacity-80 -error outline-0"
                  >
                    Create Account
                  </a>
                  <a
                    href={"https://zoomlife.netlify.app/"}
                    className="w-12/25 hover:bg-error hover:text-white text-sm btn border-1 border-error px-5 py-3 bg-base-100 text-error opacity-80 -error outline-0"
                  >
                    Reset Password
                  </a>
                  <a
                    href={"https://zoomlife.netlify.app/claim-account"}
                    className="text-center block text-sm my-8"
                  ></a>
                </div>
                <p className="opacity-90 text-sm my-3 text-center">
                  Paid but have no account{"? "}
                  <a
                    className="underline text-secondary cursor-pointer "
                    href="https://zoomlife.netlify.app/claim-account"
                  >
                    Click here
                  </a>
                </p>
                {/* <a
                  to={"/claim-account"}
                  className="text-center block text-sm my-8"
                >
                  Click here if you have payed before but have no account
                </a> */}
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
