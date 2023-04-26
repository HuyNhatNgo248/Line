import AuthLayout from "./AuthLayout";
import AuthForm from "../../components/Form/AuthForm";
const AuthPage = (props) => {
  return (
    <AuthLayout>
      <AuthForm authType={props.authType} />
    </AuthLayout>
  );
};

export default AuthPage;
