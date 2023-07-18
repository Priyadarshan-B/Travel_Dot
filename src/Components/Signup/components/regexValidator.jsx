/* emailRegex */
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/* passwordRegex */
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;

export const emailValidator = (email) => {
  return emailRegex.test(email);
};

export const passwordValidator = (password) => {
  return passwordRegex.test(password);
};

export const nameValidator = (name) => {
  const nameRegex = /^(?=.{2,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  return nameRegex.test(name);
};
