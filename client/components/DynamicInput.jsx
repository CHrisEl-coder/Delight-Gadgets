"use client";
import React, { useState } from "react";
import {
  MdOutlinePerson,
  MdOutlineCall,
  MdOutlinePersonPin,
  MdOutlineMail,
} from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const DynamicInput = ({
  register,
  id,
  name,
  placeholder,
  errors,
  label,
  type,
}) => {
  const icons = {
    cellnumber: <MdOutlineCall />,

    email: <MdOutlineMail />,

    state: <MdOutlinePersonPin />,

    username: <MdOutlinePerson />,
  };

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = name === "password";
  const isCheckbox = type === "checkbox";

  return (
    <div
      className={`w-full flex flex-col gap-4 items-start px-2 ${
        isCheckbox ? " flex items-center gap-4" : ""
      }`}
    >
      <label htmlFor={id} className="text-sm font-poppins font-medium ">
        {isCheckbox ? (
          <>
            <input
              type="checkbox"
              id={id}
              {...register(name, { setValueAs: (v) => v === true })}
              name={name}
            />
            <span className="font-medium text-base font-gab">{label}</span>
          </>
        ) : (
          label
        )}
      </label>

      {!isCheckbox && (
        <div className="w-full flex items-center justify-between gap-4 border border-white/40 px-4 py-2 rounded">
          <input
            name={name}
            id={id}
            placeholder={placeholder}
            type={isPassword ? (showPassword ? "text" : "password") : type}
            {...register(name)}
            className="outline-none border-none w-full focus:bg-transparent"
          />
          {isPassword ? (
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              role="button"
              tabIndex={0}
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              className="cursor-pointer transition duration-150 ease-in-out"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          ) : (
            icons[name] && <span>{icons[name]}</span>
          )}
        </div>
      )}

      {errors[name] && (
        <p className="text-xs text-red-700 font-poppins font-light">
          {" "}
          {errors[name].message}{" "}
        </p>
      )}
    </div>
  );
};

export default DynamicInput;
