import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // useNavigate 훅을 사용해 페이지 이동
  const [url, setUrl] = useState(''); // URL 상태 관리
  const [file, setFile] = useState(null); // 파일 상태 관리

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // 파일 상태 업데이트
  };

  const handleFileSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:5000/submit-file', {
          method: 'POST',
          body: formData,
        });
        const data = await response.text();
        console.log(data); // 서버 응답 로그 출력
        navigate('/Subtitle'); // 파일 제출 후 이동할 페이지
      } catch (error) {
        console.error('Error submitting file:', error);
      }
    }
  };

  const handleUrlSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/submit-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });
      const data = await response.text();
      console.log(data); // 서버 응답 로그 출력
      navigate('/Subtitle'); // URL 제출 후 이동할 페이지
    } catch (error) {
      console.error('Error submitting URL:', error);
    }
  };

  return (
    <div className='mini-box-body-color'>
      <p className='text-1'>파일을 첨부하거나, 유튜브 URL을 올리세요.</p>

      <div className='mini-box-body'>

        {/* 파일 첨부 */}
        <div className='mini-box mb'>
          <div>
            <p>파일을 첨부해주세요</p>
            <input id='file' type="file" onChange={handleFileChange} />
          </div>
          <button className='url-btn' onClick={handleFileSubmit}>제출하기</button>
        </div>

        {/* 유튜브 URL 입력 */}
        <div className='mini-box'>
          <div className='fg'>
            <p>유튜브 URL을 입력해주세요.</p>
            <div className='url-box'>
              <input
                className='youtube-url'
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="URL을 입력하세요"
              />
            </div>
          </div>
          <button className='url-btn' onClick={handleUrlSubmit}>제출하기</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
