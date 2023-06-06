import { useCallback, useState } from 'react';

export default function useForm<T>(initialValues: T) {
  const [formData, setFormData] = useState(initialValues);

  // 如果不写依赖formData，当formData改变的时候这个函数中的formData已知会是初始化的formData
  // 原因就闭包问题
  // 但你写formData依赖的时候，每次依赖改变都会重新创建一个闭包来更新依赖的内容
  const setFormValue = useCallback(
    (key: string, value: unknown) => {
      console.log('执行setFormValue');
      setFormData({ ...formData, [key]: value });
    },
    [formData]
  );
  const resetFormValues = useCallback(() => {
    setFormData(initialValues);
  }, []);

  return [formData, setFormValue, resetFormValues] as const;
}
