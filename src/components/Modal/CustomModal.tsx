import React, { useState } from "react";

import Swal from "sweetalert2";

export const ErrorSwal = (title: string, text: string) =>
  Swal.fire({
    title: title,
    text: text,
    icon: "error",
    iconColor: "red",
    showConfirmButton: false,
    timer: 2000,
    background: "white",
    color: "black",
    backdrop: "rgba(0,0,0,0.2)",
  });

export const WarningSwal = (title: string, text: string) =>
  Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    iconColor: "orange",
    showConfirmButton: false,
    timer: 2000,
    background: "white",
    color: "black",
    backdrop: "rgba(0,0,0,0.2)",
  });

export const SuccessSwal = (title: string, text: string) =>
  Swal.fire({
    title: title,
    text: text,
    icon: "success",
    iconColor: "green",
    showConfirmButton: false,
    timer: 2000,
    background: "white",
    color: "black",
    backdrop: "rgba(0,0,0,0.2)",
  });

export const ConfirmModal = (swalStyle: any) => Swal.fire(swalStyle);
