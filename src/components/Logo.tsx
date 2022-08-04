import React from "react";

function Logo() {
    return (
        <div className="logo">
            <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="main-accent-color-element"
                    d="M24.3079 48.6008C10.4629 48.6008 3.34244 28.6898 6.50744 22.6298C7.78394 20.1853 10.1129 22.4983 13.7894 19.5378C15.6139 18.0683 15.1734 15.5078 15.1764 13.5543C15.1784 12.3818 16.5534 11.5353 17.7374 11.7543C19.0594 11.9988 20.3919 12.8773 22.5279 12.6263C25.0479 12.3303 26.6609 10.5258 29.1539 10.9913C31.2234 11.3773 29.8324 16.2753 36.9744 17.4488C39.3779 17.8438 37.8659 21.7228 39.6494 23.8123C41.1474 25.5673 43.0824 24.3728 44.3829 26.0933C45.9304 28.1408 44.1589 30.4353 43.4929 34.7503C41.8189 45.5933 35.4824 48.6008 24.3079 48.6008Z"
                />
                <path
                    className="main-color-element"
                    d="M9.96253 8.65222C8.16553 8.84122 6.05953 11.6277 5.50653 14.3537C4.95353 17.0797 6.65553 19.1772 8.26803 18.8647C9.88053 18.5522 12.714 16.5167 13.178 14.2402C13.8655 10.8672 12.057 8.43222 9.96253 8.65222Z"
                />
                <path
                    className="main-color-element"
                    d="M14.8863 7.4977C15.7158 9.7492 20.1278 9.6682 22.6388 9.2842C25.1498 8.9002 28.3908 7.5582 28.5773 5.4942C28.7638 3.4302 25.3268 1.2602 21.3748 1.9212C17.4228 2.5822 14.0568 5.2462 14.8863 7.4977Z"
                />
                <path
                    d="M39.1099 14.7667C37.3074 15.3647 35.9579 14.9132 33.2769 12.3652C30.5959 9.81725 30.8864 6.66475 32.4189 4.98875C33.9514 3.31275 37.2219 5.09875 38.7094 7.21875C40.1969 9.33875 40.9124 14.1687 39.1099 14.7667Z"
                    className="main-color-element"
                />
                <path
                    d="M43.3393 23.1659C41.6713 23.0519 40.4633 21.9319 39.7978 20.3224C39.1323 18.7129 38.8898 16.6394 40.4923 15.6819C42.0948 14.7244 43.6963 17.3334 44.2373 19.0854C44.7783 20.8374 45.0073 23.2799 43.3393 23.1659Z"
                    className="main-color-element"
                />
                <path
                    d="M24.8 26.1996C24.3395 28.7611 24.7925 29.2296 25.9315 29.6166C26.039 29.6611 26.106 29.6731 26.2575 29.6306C27.6195 28.0751 27.238 27.4011 26.687 26.1771C26.6195 25.9736 26.643 25.8941 26.699 25.7596C27.127 24.7501 27.356 24.1711 27.221 22.5081C27.202 22.3541 27.2045 22.2661 27.2755 22.0996C28.033 20.3201 27.8325 19.5521 25.572 18.8821C23.4925 18.9376 23.519 22.2861 24.7595 25.7351C24.8235 25.9131 24.832 26.0161 24.8 26.1996Z"
                    fill="white"
                />
                <path
                    d="M38.5896 29.1675C38.5766 28.727 38.4946 28.5589 38.2416 28.3724C37.5116 28.0194 37.0121 27.643 36.2721 27.9215C35.1501 28.343 34.7601 29.0635 35.4726 30.959C34.5701 31.3155 34.4021 31.694 34.6941 32.686C33.9906 33.046 33.6581 33.3265 33.2066 34.008C33.0826 34.1275 32.9801 34.1589 32.7556 34.1325C31.7056 33.457 31.1221 33.0525 30.1766 31.8815C30.0201 31.6435 29.9936 31.5055 29.9541 31.259C30.9341 30.389 31.3481 29.794 31.0071 27.8819C31.1046 27.3835 31.2701 27.1754 31.5306 26.7224C31.8841 25.8184 31.9911 25.2395 32.0061 24.064C32.1001 23.605 32.1696 23.3475 32.3641 22.888C32.3981 22.3185 32.3581 22.016 31.9416 21.575C31.6676 21.272 31.4221 21.1305 30.7521 20.95C30.2181 21.0195 29.9466 21.1415 29.4961 21.462C29.0951 21.942 29.0681 22.3625 29.3481 23.367C29.1321 24.492 29.0731 25.2275 29.6891 27.7685C28.8716 28.748 28.6386 29.301 29.3411 30.9925C29.4971 31.5915 27.3056 30.8285 26.4781 30.4355C26.1421 30.4699 25.9846 30.536 25.7471 30.72C25.1481 30.649 24.8271 30.4544 24.1951 30.7129C23.5426 30.5404 23.1761 30.548 22.5226 30.5525C22.4861 30.507 22.4791 30.4655 22.4776 30.3785C22.9496 29.6205 23.2426 29.2245 22.4676 27.1705C22.6826 26.244 22.6376 25.73 22.1791 24.8265C22.1661 24.582 22.1566 24.4445 22.0081 24.1695C22.3346 22.795 22.1911 21.7455 21.0031 21.5465C20.0351 20.612 18.2481 20.939 19.0221 24.1435C19.0611 24.1575 19.5121 26.5175 19.8506 26.9395C20.1891 27.3615 20.4461 27.727 20.3836 28.367C20.4486 29.6335 20.5971 30.605 21.6966 30.781C21.7976 30.8595 21.8296 30.9135 21.8236 31.036C21.8236 31.036 20.5446 31.8445 21.2896 33.8555C21.0271 35.399 19.5516 36.3029 19.0846 35.7479C18.5481 35.0294 18.4641 34.1375 17.9426 33.6805C17.4316 31.5635 15.1301 30.9965 14.4666 31.697C14.4666 31.697 14.2326 31.8029 14.5416 32.5259C15.2271 33.7664 15.4161 34.3014 16.2181 35.254C16.8761 36.0349 17.4961 36.103 18.1291 37.0264C18.0541 37.364 18.0476 37.5905 18.1176 38.0655C18.6361 39.7405 19.1021 40.6069 19.7556 42.1919C20.1151 42.7619 20.3441 42.9884 20.7741 43.32C20.7741 43.32 21.9296 43.8925 23.0081 43.7815C24.0866 43.6705 24.5061 42.4984 24.5061 42.4984C24.9511 41.8239 25.1731 41.443 25.3781 40.746C25.6921 39.5114 25.7211 38.83 25.0591 37.6644C25.1066 36.5325 25.4721 35.7165 26.8831 36.706C27.7931 36.8425 28.1026 37.427 28.2906 39.4044C27.9216 40.7944 27.9521 41.585 28.0996 42.9995C28.3931 43.7695 28.7311 43.955 29.6326 43.8615C30.9426 42.6299 34.2211 36.9185 33.7536 35.4125C34.0881 35.3415 34.2771 35.276 34.6161 35.092C37.2056 33.03 41.0566 30.3725 38.5896 29.1675Z"
                    fill="white"
                />
            </svg>
        </div>
    );
}

export default Logo;