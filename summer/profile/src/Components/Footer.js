import React from 'react';

const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-info">
                <div className='inner'>
                    <div>
                        <h3>무통장 입금계좌</h3>
                        <p>BANK ACCOUNT</p>
                        <p>301-1234-1234-12</p>
                        <p>예금주 - 준조이</p>
                    </div>
                    <div>
                        <h3>고객센터</h3>
                        <p>영업시간 이외에는 문의 게시판을 이용해주시면 담당자 확인 후 빠른 답변 도와드리겠습니다.</p>
                        <p id="tel">02-1234-5645</p>
                    </div>
                    <div>
                        <h3>공지사항</h3>
                        <ul>
                            <li>상품가이드 <span></span></li>
                            <li>신상품 입고 안내 <span></span></li>
                       
                        </ul>
                    </div>
                </div>
            </div>
            <div id="footer-copy">
                <div className='inner'>
                    <ul>
                        
                        <li>무신사매장안내</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                    </ul>
                </div>
                <div id="copyright">
                    <div className='inner'>
                        상호 - 무신사 | 주소 - 외대로 25번길 22-5                        | 대표전화 - 국번없이 052-1234-4223 | 대표이사 - 준조이
                        |개인정보관리자 - jun | 사업자 등록번호 - 102-12-12345
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;