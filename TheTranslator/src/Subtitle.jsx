import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Subtitle() {

    return (
        <>
            <p className='text-1'>
                번역이 완성되었습니다.
            </p>

            <div className='body-l'>

                <div className='Subtitle'>
                    <div>
                        번역한 글자들 나열
                    </div>
                </div>
            </div>

            {/* <div>다운로드 하기</div> */}
        </>
    );
}

export default Subtitle;
