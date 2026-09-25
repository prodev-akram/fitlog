"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastShell() {
  return <ToastContainer position="bottom-right" autoClose={2500} newestOnTop theme="dark" />;
}
