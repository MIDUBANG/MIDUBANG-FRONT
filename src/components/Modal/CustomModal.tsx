import Swal from "sweetalert2";

export const ErrorSwal = (title: string, text: string, time: number = 2000) =>
  Swal.fire({
    title: title,
    text: text,
    icon: "error",
    iconColor: "red",
    showConfirmButton: false,
    timer: time,
    background: "white",
    color: "black",
    backdrop: "rgba(0,0,0,0.2)",
  });

export const WarningSwal = (title: string, text: string, time: number = 2000) =>
  Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    iconColor: "orange",
    showConfirmButton: false,
    timer: time,
    background: "white",
    color: "black",
    backdrop: "rgba(0,0,0,0.2)",
  });

export const SuccessSwal = (title: string, text: string, time: number = 2000) =>
  Swal.fire({
    title: title,
    text: text,
    icon: "success",
    iconColor: "green",
    showConfirmButton: false,
    timer: time,
    background: "white",
    color: "black",
    backdrop: "rgba(0,0,0,0.2)",
  });

export const ConfirmModal = (swalStyle: any) => Swal.fire(swalStyle);
