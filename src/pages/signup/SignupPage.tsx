import BottomButton from "@components/bottomButton/BottomButton";
import * as S from "./SignupPage.styled";
import InputText from "@components/inputText/InputText";
import useForm from "@hooks/useForm";
import Button from "@components/button/Button";

import {
  initialSignupValues,
  SignupFormValues,
  signupValidateConfigs,
} from "./SignupValidateConfig";
import validateConfigs from "@utils/validateConfig";
import { usePostSignup } from "@hooks/apis/auth";
import { useEffect } from "react";
import useIsLoading from "@hooks/useIsLoading";

const SignupPage = () => {
  const getErrors = (values: SignupFormValues) => {
    const errors = validateConfigs(signupValidateConfigs, values);

    // 비밀번호 확인 추가 검증
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    return errors;
  };

  const { mutate: postSignup, isPending } = usePostSignup();

  const { setLoadings } = useIsLoading();

  useEffect(() => {
    setLoadings({ isFullLoading: isPending });
  }, [isPending]);

  const handleSubmitButton = () => {
    postSignup({
      name: values.name,
      phone_number: values.phonenumber,
      password1: values.password,
      password2: values.confirmPassword,
    });
  };

  const { values, errors, isValid, handleChange } = useForm<SignupFormValues>({
    initialValues: initialSignupValues,
    getErrors,
  });

  const getInputTextProps = (key: keyof SignupFormValues) => {
    return {
      name: key,
      onChange: handleChange,
      regex: signupValidateConfigs[key].regex,
      minLength: signupValidateConfigs[key].minLength,
      maxLength: signupValidateConfigs[key].maxLength,
      errorMessage: errors[key],
      valu: values[key],
    };
  };

  return (
    <>
      <S.SignupPageWrapper>
        <InputText
          {...getInputTextProps("name")}
          label="이름"
          placeholder="홍길동"
          currentCount={values.name.length}
          count={20}
        />

        <InputText
          {...getInputTextProps("phonenumber")}
          label="전화번호"
          description={`기입하신 전화번호로 고객님께 대기 관련 문자 메세지가 전송됩니다.
            원활한 소통을 위해 신중하게 입력해주세요.`}
          placeholder="01012345678"
        />

        <S.SignupPageTextInputWrapper>
          <InputText
            {...getInputTextProps("password")}
            name="password"
            type="password"
            label="비밀번호"
            description={`4자 이상의 영문과 숫자, 특수문자 (!@#$%^&*)를\n조합하여 비밀번호를 작성해주세요.`}
            placeholder="비밀번호를 입력해주세요"
          />
          <InputText
            {...getInputTextProps("confirmPassword")}
            type="password"
            placeholder="비밀번호를 재입력해주세요"
          />
        </S.SignupPageTextInputWrapper>
      </S.SignupPageWrapper>
      <BottomButton>
        <Button disabled={!isValid} onClick={handleSubmitButton}>
          회원 가입하기
        </Button>
      </BottomButton>
    </>
  );
};
export default SignupPage;
