import { ChangeEvent, useCallback } from 'react';
import useForm from '@/hooks/useForm';

export default function Form() {
  const [formState, setFormValue, resetFormValues] = useForm({
    userName: '',
    email: ''
  });
  const setUserName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setFormValue('userName', e.target.value),
    [setFormValue]
  );
  const setEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setFormValue('email', e.target.value),
    [setFormValue]
  );
  return (
    <>
      <div className="content_title">useForm使用</div>
      <form>
        <label>用户名</label>
        <input type="text" value={formState.userName} onChange={setUserName} />

        <label>邮箱</label>
        <input type="text" value={formState.email} onChange={setEmail} />
        <div>
          <div className="common_button" onClick={() => console.log(formState)}>
            提交
          </div>
          <div className="common_button" onClick={resetFormValues}>
            充值
          </div>
        </div>
      </form>
    </>
  );
}
