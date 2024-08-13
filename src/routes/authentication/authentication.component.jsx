import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "./../../components/sign-up-form/sign-up-form.component";
import SignInForm from "./../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
