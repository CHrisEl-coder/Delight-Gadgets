"use client";
import React, { useState } from "react";
import { login, signUp } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import DynamicInput from "./DynamicInput";
import { MdOutlinePerson } from "react-icons/md";

import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Login, Signup } from "@/lib/auth";

const Auth = ({ type }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const getDefaultValues = (type) =>
    type === "login"
      ? { email: "", password: "" }
      : {
          username: "",
          email: "",
          password: "",
          state: "",
          cellnumber: "",
          agreed: false,
        };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: type === "login" ? zodResolver(login) : zodResolver(signUp),
    defaultValues: getDefaultValues(type),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      if (type === "login") {
        const user = await Login(data);
        console.log(user);
      } else {
        const user = await Signup(data);
        console.log(user);
      }

      router.push("/");
    } catch (error) {
      console.error(
        "Error while registering user ",
        error.message || error.body || error
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" min-h-screen mx-auto flex flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-4xl text-black text-center font-gab font-medium leading-12 mb-6">
        {type === "login" ? "Login" : "Signup"}

        <p className="text-sm max-w-md text-black/30 italic font-normal font-poppins">
          {type === "login"
            ? "Enter your credentials to login and access your dashboard info."
            : "Welcome, enter correct details to create an account with us."}
        </p>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container relative max-w-xl flex flex-col items-start shadow-lg bg-black text-white gap-6 px-6 py-8 rounded"
      >
        <figure className="absolute top-0 left-1/2 -translate-1/2 flex items-center justify-center bg-white rounded-full px-4 aspect-square">
          <MdOutlinePerson className="text-black" size={30} />
        </figure>
        {type === "login" ? (
          <>
            <DynamicInput
              name={"email"}
              id={"email"}
              type={"email"}
              placeholder={"Enter email"}
              label={"Email"}
              register={register}
              errors={errors}
            />
            <DynamicInput
              name={"password"}
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              label={"Password"}
              register={register}
              errors={errors}
            />
          </>
        ) : (
          <>
            <DynamicInput
              name={"username"}
              id={"username"}
              type={"text"}
              placeholder={"Username"}
              label={"Username"}
              register={register}
              errors={errors}
            />
            <DynamicInput
              name={"cellnumber"}
              id={"cellnumber"}
              type={"number"}
              placeholder={"Enter cellnumber"}
              label={"Number"}
              register={register}
              errors={errors}
            />
            <DynamicInput
              name={"email"}
              id={"email"}
              type={"email"}
              placeholder={"Enter email"}
              label={"Email"}
              register={register}
              errors={errors}
            />
            <DynamicInput
              name={"state"}
              id={"state"}
              type={"text"}
              placeholder={"State"}
              label={"State"}
              register={register}
              errors={errors}
            />
            <DynamicInput
              name={"password"}
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              label={"Password"}
              register={register}
              errors={errors}
            />
            <DynamicInput
              name={"agreed"}
              id={"agreed"}
              type={"checkbox"}
              label={"I agree to the terms and conditions"}
              register={register}
              errors={errors}
            />
          </>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-white text-sm font-poppins font-semibold rounded-lg py-2 px-6 text-cente transition duration-150 ease-in-out ${
            isLoading
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-white text-black cursor-pointer hover:bg-white/80 hover:scale-95"
          }`}
        >
          {isLoading
            ? type === "login"
              ? "...Loading"
              : "...Registering"
            : type === "login"
            ? "Login"
            : "Register"}
        </button>
      </form>

      {type === "login" ? (
        <>
          <p className="flex items-center gap-2 whitespace-nowrap text-xs text-black/80 font-poppins italic">
            Don't have an account?{" "}
            <Link
              href={"/sign-up"}
              className="font-medium text-emerald-600 text-sm not-italic"
            >
              {" "}
              Register{" "}
            </Link>
          </p>
        </>
      ) : (
        <>
          <p className="flex items-center gap-2 whitespace-nowrap text-xs text-black/80 font-poppins italic text-center">
            Have an account?{" "}
            <Link
              href={"/sign-in"}
              className="font-medium text-emerald-600 text-sm not-italic"
            >
              {" "}
              Login{" "}
            </Link>
          </p>
        </>
      )}

      <div className="mx-auto flex items-center gap-6 mb-6">
        <button className="flex items-center justify-center gap-4 py-2 px-6 rounded bg-emerald-800 shadow-md shadow-gray-400 text-white text-sm font-medium font-poppins cursor-pointer hover:shadow-lg hover:bg-emerald-900 transition duration-150 ease-in-out">
          <FaGoogle />
          <span className="hidden md:block"> Signin with google </span>
        </button>
        <button className="flex items-center justify-center gap-4 py-2 px-6 rounded bg-blue-800 shadow-md shadow-gray-400 text-white text-sm font-medium font-poppins cursor-pointer hover:shadow-lg hover:bg-blue-900 transition duration-150 ease-in-out">
          <FaFacebook />
          <span className="hidden md:block">Signin with facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Auth;
