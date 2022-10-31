export default function emailValidate(event) {
  let email = event.target;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(emailFormat)) {
    email.style.boxShadow = "0px 0px 1px 3px green";
  } else {
    email.style.boxShadow = "none";
  }
}
