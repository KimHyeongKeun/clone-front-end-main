import axios from '../axios';

export function delMyInfo() {
  if (window.confirm('정말로 탈퇴하시겠습니까?')) {
    axios
      .delete(`/auth/member`, {
        headers: {
          Authorization: localStorage.getItem('ACCESS_TOKEN'),
        },
      })
      .then(() => {
        localStorage.clear();
        alert('탈퇴가 성공적으로 이루어졌습니다.');
        // navigate("/");
      })
      .catch(err => alert(err.response.data.message));
  }
}

export function putMyInfo(dto, file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append(
    'dto',
    new Blob([JSON.stringify(dto)], { type: 'application/json' })
  );
  return new Promise(res => {
    axios
      .put('/auth/my', formData, {
        headers: {
          Authorization: localStorage.getItem('ACCESS_TOKEN'),
          'Contest-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        alert('회원정보 수정이 완료되었습니다.');
        res(getMyInfo());
      })
      .catch(e => {
        if (e.response) {
          if (e.response.status === 400)
            alert('기존 비밀번호가 올바르지 않습니다.');
          else if (e.response.status === 401) alert('아이디 오류');
        }
      });
  });
}

export function getMyInfo() {
  return new Promise(res => {
    axios
      .get('/auth/my', {
        headers: {
          Authorization: localStorage.getItem('ACCESS_TOKEN'),
        },
      })
      .then(response => {
        const info = {
          profileUrl: response.data.profileUrl,
          email: response.data.email,
          name: response.data.name,
          phoneNumber: response.data.phoneNumber,
        };
        res(info);
      })
      .catch(e => {
        alert('정보를 가져오는데 실패했습니다.');
      });
  });
}
