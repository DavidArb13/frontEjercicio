import Swal from "sweetalert2";

const dateLocaleFormat = (date, options) => {
  let _date = new Date(date);
  const ulang = "es";
  return _date.toLocaleDateString(ulang, options);
};

const dataSending = (msg) => {
  Swal.fire({
    title: msg,
    timerProgressBar: true,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
}

const SwalAlert = (msg, text, icon, color) => {
  Swal.fire({
    title: msg,
    text: text,
    icon: icon,
    confirmButtonColor: color
  });
}

export { dateLocaleFormat, dataSending, SwalAlert };