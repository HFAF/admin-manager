import { AppMessage } from 'ant-design-vue/types/alert';

export const resetMessage = (): AppMessage => ({
  isShow: false,
  text: '',
  description: '',
  type: null
});

export default {};
