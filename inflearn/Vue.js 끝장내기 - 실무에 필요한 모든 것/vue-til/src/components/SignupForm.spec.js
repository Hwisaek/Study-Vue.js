import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('ID는 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: '11',
          password: '',
          nickname: '',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    // console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });
  test('ID, PW, USERNAME 입력되지 않으면 회원가입 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test',
          password: '',
          nickname: '',
        };
      },
    });
    const btn = wrapper.find('button.btn');
    expect(btn.element.disabled).toBeTruthy();
  });
});
