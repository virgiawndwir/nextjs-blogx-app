import React from "react";

export default function Button(props) {
  let variant = props.variant;
  let btnVariantClass;
  let Component = props.href ? "a" : "button";

  switch (variant) {
    case "primary":
      btnVariantClass =
        "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm px-4 py-2 text-center";
      break;
    case "dark":
      btnVariantClass =
        "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";
      break;
    case "light":
      btnVariantClass =
        "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
      break;
    case "success":
      btnVariantClass =
        "text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
      break;
    case "warning":
      btnVariantClass =
        "text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900";
      break;
    case "danger":
      btnVariantClass =
        "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
      break;
    case "indigo":
      btnVariantClass =
        "";
      break;
    default:
      btnVariantClass = "";
      break;
  }
  return (
    <Component
      type={props.type}
      disabled={props.disabled || props.isLoading}
      onClick={props.onClick}
      href={props.href}
      target={props.target}
      className={`${
        props.disabled
          ? "cursor-not-allowed bg-gray-400 hover:bg-slate-500"
          : "cursor-pointer"
      } p-2 px-4 w-auto transition duration-200 ${btnVariantClass} rounded-${
        props.rounded || "md"
      } ${props.className}`}
    >
      <div className={"flex justify-center items-center gap-2"}>
        {props.icon && <props.icon size={18} />}
        <span className={`text-${props.size || "sm"}`}>{props.children}</span>
      </div>
    </Component>
  );
}
