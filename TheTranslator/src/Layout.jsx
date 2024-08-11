import './App.css';
import './animation.css';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div className='animated-background'>
        {/* 글자 돌아다니는 배경 */}
        <div class="animated-title">
          <div class="track">
            <div class="content font-color">&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad</div>
          </div>
        </div>
        <div class="animated-title-2">
          <div class="track-2">
            <div class="content font-color">&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad</div>
          </div>
        </div>
        <div class="animated-title-3">
          <div class="track-3">
            <div class="content font-color">&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad</div>
          </div>
        </div>
        <div class="animated-title-4">
          <div class="track-4">
            <div class="content font-color">&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad</div>
          </div>
        </div>
        <div class="animated-title">
          <div class="track">
            <div class="content font-color">&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad</div>
          </div>
        </div>
        <div class="animated-title-2">
          <div class="track-2">
            <div class="content font-color">&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad</div>
          </div>
        </div>
        <div class="animated-title-3">
          <div class="track-3">
            <div class="content font-color">&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad</div>
          </div>
        </div>
        <div class="animated-title-4">
          <div class="track-4">
            <div class="content font-color">&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad&nbsp;The Translator template glad</div>
          </div>
        </div>
        
      </div>
      <div className='body'>

        <div className='box mini-box-body-color'>

          <div id='top'>
            <div className='the-translator'>
              The Translator
            </div>
          </div>

          <div id='middle'>
            {/* 여기부분만 바뀜 */}
            {/* HOME이 기본 */}
            <Outlet />
          </div>

          <div id='bottom'>
            <div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Layout;
