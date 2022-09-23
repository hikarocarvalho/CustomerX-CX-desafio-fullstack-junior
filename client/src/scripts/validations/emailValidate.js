export default function emailValidate(event) {
  let email = event.target;
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(emailFormat)) {
    email.style.boxShadow = "0px 0px 3px 1px var(--firstColor)";
  } else {
    email.style.boxShadow = "0px 0px 3px 1px red";
  }
}
