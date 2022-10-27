import React from "react";

import { motion } from "framer-motion";

import "./rw.scss";

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    strokeWidth: 2,
    stroke: "#Faf9f4",
    transition: {
      duration: 1,
      delay: 0.2,
      when: "afterChildren",
      staggerChildren: 0.4,
      ease: "easeInOut",
    },
    fill: [
      "#fafafa00",
      "#fafafa00",
      "#fafafa00",
      "#fafafa00",
      "#Faf9f426",
      "#Faf9f44d",
      "#Faf9f480",
      "#Faf9f4bf",
      "#faf9f4",
    ],
  },
};

export default function Rw() {
  return (
    <div className="rw">
      <motion.svg
        width="326"
        height="82"
        viewBox="0 0 326 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <mask id="motion.path-3-outside-1_201_7" maskUnits="userSpaceOnUse" x="0" y="0" width="326" height="82" fill="black"> */}
        <motion.path
          d="M14.4616 6.05344C17.2384 6.05344 19.7134 6.51991 21.8865 7.45285C24.0597 8.33397 25.8707 9.62972 27.3195 11.3401C28.8085 12.9987 29.9353 15.0201 30.6999 17.4043C31.4646 19.7366 31.8469 22.38 31.8469 25.3343C31.8469 27.6667 31.5652 29.999 31.0018 32.3314C30.4786 34.6637 29.5932 36.7888 28.3457 38.7065C27.1384 40.6242 25.5286 42.1791 23.5164 43.3712C21.5042 44.5115 19.0091 45.0816 16.0311 45.0816H9.75303V63.274H1V6.05344H14.4616ZM15.9707 34.1973C17.2987 34.1973 18.4055 33.9122 19.2908 33.3421C20.1762 32.7719 20.8603 32.0463 21.3433 31.1652C21.8664 30.2841 22.2286 29.3771 22.4298 28.4441C22.6713 27.4593 22.792 26.5523 22.792 25.723C22.792 25.1011 22.7115 24.3236 22.5506 23.3907C22.4298 22.4059 22.1481 21.4211 21.7054 20.4363C21.2628 19.4516 20.5786 18.6223 19.653 17.9485C18.7676 17.2747 17.5603 16.9378 16.0311 16.9378H9.75303V34.1973H15.9707ZM24.1804 41.1944L35.167 63.274H24.9652L13.7372 41.5053L24.1804 41.1944Z"
          variants={pathVariants}
        />
        <motion.path
          d="M28.5003 43.9932C28.5003 40.5206 29.1241 37.4108 30.3716 34.6637C31.6594 31.9167 33.4503 29.7658 35.7442 28.2109C38.0381 26.6041 40.674 25.8008 43.6521 25.8008C46.6704 25.8008 49.2862 26.6041 51.4996 28.2109C53.713 29.7658 55.4033 31.9167 56.5704 34.6637C57.7777 37.4108 58.3813 40.5206 58.3813 43.9932C58.3813 47.4658 57.7777 50.6016 56.5704 53.4004C55.4033 56.1474 53.713 58.3243 51.4996 59.931C49.2862 61.5377 46.6301 62.3411 43.5313 62.3411C40.6338 62.3411 38.0381 61.6155 35.7442 60.1642C33.4905 58.713 31.7198 56.6139 30.432 53.8669C29.1442 51.1199 28.5003 47.8286 28.5003 43.9932ZM37.0118 44.0709C37.0118 45.8332 37.2935 47.4399 37.857 48.8912C38.4204 50.2906 39.185 51.4049 40.1509 52.2342C41.1167 53.0635 42.2033 53.4781 43.4106 53.4781C44.7387 53.4781 45.8856 53.0635 46.8515 52.2342C47.8173 51.4049 48.5618 50.2906 49.085 48.8912C49.6082 47.4399 49.8697 45.8332 49.8697 44.0709C49.8697 42.2569 49.6082 40.6501 49.085 39.2507C48.5618 37.8513 47.8173 36.737 46.8515 35.9077C45.8856 35.0784 44.7387 34.6637 43.4106 34.6637C42.2033 34.6637 41.1167 35.0784 40.1509 35.9077C39.185 36.737 38.4204 37.8513 37.857 39.2507C37.2935 40.6501 37.0118 42.2569 37.0118 44.0709Z"
          variants={pathVariants}
        />
        <motion.path
          d="M75.7063 63.2741C73.4929 63.2741 71.6215 62.8076 70.0923 61.8746C68.6033 60.8899 67.2953 59.62 66.1685 58.0651L66.8325 55.7328V62.3411H58.3813V1H66.7722V34.1973V30.6987C67.8185 29.5585 69.2069 28.5996 70.9374 27.8222C72.6679 27.0447 74.6398 26.656 76.8532 26.656C79.1471 26.656 81.2398 27.3557 83.1313 28.7551C85.0227 30.1545 86.5319 32.2018 87.6587 34.897C88.8258 37.5403 89.4093 40.7797 89.4093 44.6152C89.4093 48.4506 88.7654 51.7677 87.4776 54.5666C86.23 57.3654 84.5599 59.5164 82.4673 61.0194C80.3746 62.5225 78.1209 63.2741 75.7063 63.2741ZM73.835 54.1001C75.0825 54.1001 76.2295 53.6855 77.2758 52.8562C78.3624 52.0269 79.2276 50.8866 79.8715 49.4354C80.5154 47.9841 80.8374 46.3515 80.8374 44.5374C80.8374 42.7234 80.5154 41.1166 79.8715 39.7172C79.2276 38.3178 78.3624 37.2294 77.2758 36.4519C76.2295 35.6226 75.0825 35.208 73.835 35.208C72.7484 35.208 71.7222 35.4412 70.7563 35.9077C69.8307 36.3223 69.0258 36.9443 68.3417 37.7736C67.6978 38.551 67.1947 39.5099 66.8325 40.6501V48.9689C67.3155 50.1092 67.8789 51.068 68.5228 51.8455C69.2069 52.5711 69.9917 53.1412 70.877 53.5559C71.7624 53.9187 72.7484 54.1001 73.835 54.1001Z"
          variants={pathVariants}
        />
        <motion.path
          d="M104.44 63.274C101.221 63.274 98.4843 62.4966 96.2306 60.9417C94.0172 59.3868 92.327 57.2358 91.1599 54.4888C89.9928 51.7418 89.4093 48.5802 89.4093 45.0039C89.4093 41.5831 90.0935 38.4992 91.4617 35.7522C92.83 33.0052 94.6611 30.8283 96.955 29.2216C99.2489 27.563 101.804 26.7337 104.621 26.7337C108.404 26.7337 111.503 28.159 113.918 31.0097C116.373 33.8085 117.962 37.8772 118.687 43.2157L98.1623 51.6122L96.291 45.7036L111.141 39.2507L109.39 40.2614C109.068 38.9138 108.485 37.7476 107.64 36.7629C106.835 35.7263 105.607 35.208 103.957 35.208C102.71 35.208 101.603 35.5967 100.637 36.3741C99.7117 37.0998 98.9873 38.1623 98.4642 39.5617C97.9812 40.9093 97.7398 42.516 97.7398 44.3819C97.7398 46.507 98.0416 48.2951 98.6453 49.7463C99.2489 51.1458 100.074 52.2083 101.12 52.9339C102.167 53.6595 103.334 54.0223 104.621 54.0223C105.547 54.0223 106.432 53.815 107.278 53.4004C108.163 52.9857 109.028 52.4415 109.873 51.7677L113.616 59.8532C112.207 60.8898 110.678 61.7191 109.028 62.3411C107.418 62.9631 105.889 63.274 104.44 63.274Z"
          variants={pathVariants}
        />
        <motion.path
          d="M126.293 29.2993L127.078 38.6288L126.896 37.2293C127.661 35.208 128.707 33.4976 130.035 32.0981C132.722 29.1625 134.308 29.1438 137.621 29.1438V37.6181C135.649 37.3071 132.893 38.5769 131.484 39.7172C130.076 40.8575 128.989 42.3605 128.224 44.2264C127.46 46.0923 127.078 48.01 127.078 49.9796V63.274H118.687V29.2993H126.293Z"
          variants={pathVariants}
        />
        <motion.path
          d="M141.726 14.3722H150.177V29.1438H156.576V37.6181H150.177V63.274H141.726V37.6181H137.621V29.1438H141.726V14.3722Z"
          variants={pathVariants}
        />
        <motion.path
          d="M167.945 4.73177H178.207L187.685 40.6501L186.296 39.8727L194.566 13.3615L198.611 28.8328L185.813 64.207L167.945 4.73177ZM190.22 4.73177H198.913L209.839 39.484L208.269 39.173L216.419 4.73177H225.836L208.692 64.0515L190.22 4.73177Z"
          variants={pathVariants}
        />
        <motion.path
          d="M227.647 63.1969C225.192 63.1969 222.958 62.5749 220.946 61.331C218.974 60.0352 217.405 58.0657 216.238 55.4223C215.071 52.779 214.487 49.41 214.487 45.3154C214.487 41.48 215.091 38.1629 216.298 35.364C217.505 32.5652 219.095 30.4142 221.067 28.9112C223.039 27.3563 225.132 26.5788 227.345 26.5788C229.961 26.5788 231.933 27.1489 233.261 28.2892C234.629 29.3776 235.756 30.5956 236.641 31.9432L236.279 33.2649L237.064 28.2892H244.911V62.2639H236.46V54.8781L237.124 57.2105C237.044 57.2105 236.802 57.5215 236.4 58.1434C235.998 58.7136 235.394 59.4133 234.589 60.2426C233.824 61.02 232.858 61.6938 231.691 62.2639C230.565 62.8859 229.216 63.1969 227.647 63.1969ZM230.061 54.3339C231.068 54.3339 231.973 54.1525 232.778 53.7897C233.583 53.375 234.287 52.8049 234.891 52.0793C235.494 51.3018 236.018 50.343 236.46 49.2027V40.884C236.138 39.7437 235.655 38.7848 235.012 38.0074C234.368 37.1781 233.603 36.5561 232.718 36.1415C231.832 35.675 230.846 35.4418 229.76 35.4418C228.552 35.4418 227.426 35.8564 226.379 36.6857C225.373 37.4632 224.568 38.5516 223.965 39.951C223.361 41.3504 223.059 42.9572 223.059 44.7712C223.059 46.5853 223.381 48.2179 224.025 49.6692C224.669 51.1204 225.514 52.2607 226.56 53.09C227.647 53.9193 228.814 54.3339 230.061 54.3339Z"
          variants={pathVariants}
        />
        <motion.path
          d="M260.018 81C257.644 81 255.632 80.6372 253.982 79.9116C252.372 79.1859 251.004 78.3048 249.877 77.2682C248.75 76.2316 247.744 75.2468 246.859 74.3139L251.809 66.8503C252.734 67.9388 253.801 68.9754 255.008 69.9601C256.256 70.9968 257.886 71.5151 259.898 71.5151C261.226 71.5151 262.453 71.2041 263.58 70.5821C264.747 70.012 265.673 69.1568 266.357 68.0165C267.081 66.8762 267.443 65.4509 267.443 63.7405V56.277L267.745 58.2206C267.101 59.9828 265.934 61.5377 264.244 62.8853C262.554 64.1811 260.34 64.829 257.604 64.829C255.229 64.829 253.016 64.0515 250.964 62.4966C248.951 60.8899 247.342 58.7389 246.134 56.0437C244.927 53.2967 244.323 50.1869 244.323 46.7143C244.323 43.138 244.967 39.9763 246.255 37.2293C247.543 34.4305 249.213 32.2277 251.265 30.621C253.318 29.0142 255.491 28.2109 257.785 28.2109C260.079 28.2109 262.051 28.6514 263.701 29.5325C265.391 30.3618 266.659 31.3984 267.504 32.6424L267.202 33.653L268.108 29.9213H275.895V63.896C275.895 67.2131 275.17 70.1416 273.721 72.6812C272.273 75.2728 270.341 77.2941 267.926 78.7454C265.552 80.2484 262.916 81 260.018 81ZM252.835 46.4033C252.835 48.2174 253.157 49.85 253.801 51.3013C254.445 52.7525 255.31 53.8928 256.397 54.7221C257.523 55.5513 258.771 55.966 260.139 55.966C261.306 55.966 262.332 55.7846 263.218 55.4218C264.143 55.0071 264.948 54.437 265.632 53.7114C266.357 52.9339 266.961 51.9751 267.443 50.8348V42.516C267.081 41.3758 266.538 40.4169 265.814 39.6394C265.089 38.8102 264.244 38.1882 263.278 37.7736C262.353 37.3071 261.306 37.0738 260.139 37.0738C258.771 37.0738 257.523 37.4885 256.397 38.3178C255.31 39.0952 254.445 40.1837 253.801 41.5831C253.157 42.9825 252.835 44.5892 252.835 46.4033Z"
          variants={pathVariants}
        />
        <motion.path
          d="M289.054 63.896C286.599 63.896 284.366 63.274 282.354 62.0301C280.382 60.7344 278.812 58.7648 277.645 56.1215C276.478 53.4781 275.895 50.1092 275.895 46.0146C275.895 42.1791 276.498 38.862 277.706 36.0632C278.913 33.2643 280.503 31.1134 282.474 29.6103C284.446 28.0554 286.539 27.2779 288.753 27.2779C291.368 27.2779 293.34 27.8481 294.668 28.9883C296.037 30.0768 297.164 31.2948 298.049 32.6424L297.687 33.964L298.471 28.9883H306.319V62.9631H297.868V55.5772L298.532 57.9096C298.451 57.9096 298.21 58.2206 297.807 58.8426C297.405 59.4127 296.801 60.1124 295.996 60.9417C295.232 61.7191 294.266 62.3929 293.099 62.9631C291.972 63.585 290.624 63.896 289.054 63.896ZM291.469 55.033C292.475 55.033 293.381 54.8516 294.185 54.4888C294.99 54.0742 295.695 53.504 296.298 52.7784C296.902 52.001 297.425 51.0421 297.868 49.9018V41.5831C297.546 40.4428 297.063 39.4839 296.419 38.7065C295.775 37.8772 295.01 37.2552 294.125 36.8406C293.24 36.3741 292.254 36.1409 291.167 36.1409C289.96 36.1409 288.833 36.5555 287.787 37.3848C286.781 38.1623 285.976 39.2507 285.372 40.6501C284.768 42.0496 284.467 43.6563 284.467 45.4703C284.467 47.2844 284.789 48.9171 285.432 50.3683C286.076 51.8196 286.921 52.9598 287.968 53.7891C289.054 54.6184 290.221 55.033 291.469 55.033Z"
          variants={pathVariants}
        />
        <motion.path
          d="M313.925 28.9883L314.71 38.3178L314.529 36.9184C315.293 34.897 316.34 33.1866 317.668 31.7872C318.996 30.3359 320.304 29.2216 321.591 28.4441C322.92 27.6667 323.926 27.2779 324.61 27.2779L324.187 38.1623C322.215 37.8513 320.525 38.2659 319.117 39.4062C317.708 40.5465 316.621 42.0496 315.857 43.9154C315.092 45.7813 314.71 47.6991 314.71 49.6686V62.9631H306.319V28.9883H313.925Z"
          variants={pathVariants}
        />
        <motion.path
          d="M227.075 18.9349C227.075 21.4674 225.5 23.294 223.802 23.294C222.105 23.294 220.53 21.4674 220.53 18.9349C220.53 16.4023 222.105 14.5758 223.802 14.5758C225.5 14.5758 227.075 16.4023 227.075 18.9349Z"
          initial={{ x: 0 }}
          animate={{
            x: [-500, -250, 0, -100, -100, -100, 1, -5, 0, 5, 3, 0, 3, 0],
            y: [100, 100, 100, 0, 0, 0, -5, 0, -3, 0, -1, 0],
            fill: "#d6764d",
            zIndex: 100,
            stroke: "transparent",
          }}
          transition={{ duration: 2, delay: 2 }}
        />
        <motion.path
          d="M236.979 18.9349C236.979 21.4674 235.403 23.294 233.706 23.294C232.009 23.294 230.433 21.4674 230.433 18.9349C230.433 16.4023 232.009 14.5758 233.706 14.5758C235.403 14.5758 236.979 16.4023 236.979 18.9349Z"
          initial={{ x: 0 }}
          animate={{
            x: [200, 80, 70, 50, 50, 50, -1, 5, 0, -5, -3, 0, -3, 0],
            y: [-100, -1, -0, 0, 0, 0, -5, 0, -3, 0, -1, 0],
            fill: "#d6764d",
            zIndex: 100,
            stroke: "transparent",
          }}
          transition={{ duration: 2, delay: 2 }}
        />
      </motion.svg>
    </div>
  );
}

/* 
let loadingVariants = {

  hidden: {
    scale: 1,
    opacity: 0,

  },
  visible: {
    scale: 1,
    opacity: 1,
    strokeWidth: 2,
    stroke: 'black',
    transition: {
      transition: { duration: 1, when: "afterChildren", staggerChildren: 1 },
    },
  },
}; */

/* 
export default function Logo() {
  return (
    <div className="logo">
      <motion.svg
        viewBox="0 0 277 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.motion.path
          id="e"
          d="M131.487 65.0372C129.851 65.0372 128.439 64.7291 127.253 64.113C126.074 63.4905 125.163 62.6229 124.522 61.51C123.888 60.3909 123.571 59.0894 123.571 57.6056C123.571 56.1217 123.888 54.814 124.522 53.6822C125.163 52.5442 126.055 51.6577 127.197 51.0227C128.347 50.3814 129.689 50.0607 131.222 50.0607C132.106 50.0607 132.979 50.1865 133.842 50.438C134.704 50.6894 135.489 51.0981 136.196 51.664C136.904 52.2236 137.468 52.9655 137.888 53.8897C138.308 54.814 138.518 55.952 138.518 57.3038V58.2469H125.429V56.3229H135.865C135.865 55.5056 135.673 54.7762 135.29 54.1349C134.914 53.4936 134.376 52.9875 133.676 52.6165C132.983 52.2456 132.165 52.0601 131.222 52.0601C130.182 52.0601 129.283 52.2802 128.524 52.7203C127.772 53.1541 127.194 53.72 126.788 54.4179C126.383 55.1158 126.18 55.864 126.18 56.6625V57.9451C126.18 59.0391 126.402 59.9665 126.844 60.7272C127.293 61.4817 127.916 62.057 128.712 62.4531C129.508 62.8429 130.433 63.0378 131.487 63.0378C132.172 63.0378 132.791 62.9561 133.344 62.7926C133.904 62.6229 134.387 62.3714 134.792 62.0382C135.198 61.6986 135.511 61.2774 135.732 60.7744L138.253 61.378C137.987 62.1073 137.541 62.7486 136.915 63.3019C136.288 63.8489 135.515 64.2765 134.593 64.5845C133.672 64.8863 132.637 65.0372 131.487 65.0372Z"
          initial={{ y: 0 }}
          animate={{
            y: [-500, 10, -5, 0, 0, 0, 0],
            x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            fill: "#d6764d",
            stroke: "transparent",
          }}
          transition={{ duration: 2.3, delay: 1 }}
        />
        <motion.motion.path
          id="i"
          d="M143.5 65.0372V50.0607H148.482V65.0372H143.5Z"
          initial={{ y: 0 }}
          animate={{
            y: [500, -10, 5, 0, 0, 0, 0],
            x: [0, 0, 0, 0, 0, 0, 0, 0, 0, -3, 0],
            fill: "#d6764d",
            stroke: "transparent",
          }}
          transition={{ duration: 2.3, delay: 1 }}
        />
        <motion.motion.path
          className="k"
          d="M8.84454 57.5474V47.7612L36.8679 21.3536H48.825L8.84454 57.5474ZM0 79.1089V2.38479H8.84454V79.0693L0 79.1089ZM36.8679 78.9436L15.1783 51.9012L22.1519 45.6846L48.825 78.89L36.8679 78.9436Z"
          variants={pathVariants}
        />
        <motion.motion.path
          d="M52.758 78.8724V70.3897V21.3536H61.3028V29.9982H61.9024C62.9517 27.1664 64.8506 24.8686 67.5989 23.1049C70.3472 21.3411 73.2375 20.4593 76.8931 20.4593C77.5427 20.4593 78.5046 20.4344 79.479 20.4593C80.4534 20.4841 81.7807 20.4096 82.2804 20.4593V29.9982C81.7071 29.9982 80.5284 29.3896 79.479 29.2157C78.4297 29.0419 77.1655 28.9549 76.1436 28.9549C73.3453 28.9549 70.8469 29.5387 68.6482 30.7062C66.4746 31.8489 64.7506 33.4387 63.4764 35.4757C62.2272 37.4878 61.6026 39.7856 61.6026 42.3691V78.8327L52.758 78.8724Z"
          variants={pathVariants}
        />
        <motion.motion.path
          d="M84.0793 78.6964V20.4593L92.9239 20.5684V78.6964H84.0793ZM88.5765 11.9237C86.8526 11.9237 85.366 11.3399 84.1168 10.1724C82.8926 9.00488 82.2804 7.60136 82.2804 5.96185C82.2804 4.32234 82.8926 2.91882 84.1168 1.75129C85.366 0.583764 86.8526 0 88.5765 0C90.3005 0 91.7746 0.583764 92.9988 1.75129C94.2481 2.91882 94.8727 4.32234 94.8727 5.96185C94.8727 7.60136 94.2481 9.00488 92.9988 10.1724C91.7746 11.3399 90.3005 11.9237 88.5765 11.9237Z"
          variants={pathVariants}
        />
        <motion.motion.path
          d="M106.542 1.75129V22.6178H98.7469V1.75129H106.542Z"
          variants={pathVariants}
        />
        <motion.motion.path
          id="eight"
          d="M136.222 80.4477C131.075 80.4477 126.528 79.541 122.58 77.7276C118.658 75.8893 115.597 73.368 113.399 70.1635C111.2 66.9341 110.113 63.2577 110.138 59.1341C110.113 55.9048 110.75 52.9238 112.049 50.1913C113.349 47.434 115.123 45.1362 117.371 43.2979C119.645 41.4349 122.181 40.2549 124.979 39.7581V39.3109C121.306 38.367 118.383 36.3176 116.209 33.1628C114.036 29.9831 112.961 26.3688 112.986 22.3197C112.961 18.4445 113.948 14.9791 115.947 11.9237C117.946 8.86825 120.694 6.45866 124.192 4.69495C127.715 2.93124 131.725 1.75129 136.222 1.75129C140.669 1.75129 144.642 2.93124 148.14 4.69495C151.637 6.45866 154.386 8.86825 156.385 11.9237C158.408 14.9791 159.433 18.4445 159.458 22.3197C159.433 26.3688 158.321 29.9831 156.122 33.1628C153.949 36.3176 151.063 38.367 147.465 39.3109V39.7581C150.238 40.2549 152.737 41.4349 154.96 43.2979C157.184 45.1362 158.958 47.434 160.282 50.1913C161.606 52.9238 162.281 55.9048 162.306 59.1341C162.281 63.2577 161.157 66.9341 158.933 70.1635C156.734 73.368 153.674 75.8893 149.751 77.7276C145.854 79.541 141.344 80.4477 136.222 80.4477ZM136.222 72.2501C139.695 72.2501 142.693 71.6912 145.216 70.5734C147.74 69.4555 149.689 67.8781 151.063 65.8412C152.437 63.8042 153.137 61.4195 153.162 58.687C153.137 55.8054 152.387 53.2592 150.913 51.0483C149.439 48.8375 147.428 47.0986 144.879 45.8317C142.356 44.5648 139.47 43.9314 136.222 43.9314C132.949 43.9314 130.026 44.5648 127.452 45.8317C124.904 47.0986 122.893 48.8375 121.419 51.0483C119.97 53.2592 119.257 55.8054 119.282 58.687C119.257 61.4195 119.92 63.8042 121.269 65.8412C122.643 67.8781 124.604 69.4555 127.153 70.5734C129.701 71.6912 132.724 72.2501 136.222 72.2501ZM136.222 36.0319C138.97 36.0319 141.406 35.4854 143.53 34.3924C145.679 33.2994 147.365 31.7717 148.589 29.8092C149.814 27.8468 150.438 25.549 150.463 22.9158C150.438 20.3324 149.826 18.0843 148.627 16.1715C147.428 14.2339 145.766 12.7434 143.642 11.7001C141.519 10.632 139.045 10.0979 136.222 10.0979C133.349 10.0979 130.838 10.632 128.689 11.7001C126.54 12.7434 124.879 14.2339 123.705 16.1715C122.53 18.0843 121.956 20.3324 121.981 22.9158C121.956 25.549 122.543 27.8468 123.742 29.8092C124.966 31.7717 126.653 33.2994 128.802 34.3924C130.95 35.4854 133.424 36.0319 136.222 36.0319Z"
          variants={pathVariants}
          animate={{ rotate: [0, 20, 20, 18, 22, 20, 20, 20, 0] }}
          transition={{ duration: 1.5, delay: 2.4 }}
        />
        <motion.motion.path
          id="ball"
          d="M167.36 77.1341C165.511 77.1341 163.924 76.4758 162.6 75.1592C161.276 73.8427 160.614 72.2652 160.614 70.427C160.614 68.5888 161.276 67.0114 162.6 65.6948C163.924 64.3782 165.511 63.72 167.36 63.72C169.208 63.72 170.795 64.3782 172.119 65.6948C173.443 67.0114 174.105 68.5888 174.105 70.427C174.105 71.6442 173.793 72.7621 173.168 73.7805C172.569 74.799 171.757 75.6188 170.732 76.2398C169.733 76.836 168.609 77.1341 167.36 77.1341Z"
          initial={{ x: 0 }}
          animate={{
            x: [-200, -200, 0, 100, 100, 100, -1, 5, 0, -3, 0, -10, -3, 0],
            y: [0, 0, 0, 0, 0, 0, 0, -30, -31, 0],
            fill: "#d6764d",
            zIndex: 100,
            stroke: "transparent",
          }}
          transition={{ duration: 2, delay: 2 }}
        />
        <motion.motion.path
          d="M223.479 22.2478L213.084 28.9549L173.168 28.1698V20.7175L223.479 22.2478ZM181.863 7.00523H190.708V61.5561C190.708 64.0402 191.07 65.9033 191.794 67.1453C192.544 68.3626 193.493 69.1823 194.643 69.6046C195.817 70.0021 197.054 70.2008 198.353 70.2008C199.327 70.2008 200.127 70.1511 200.751 70.0517C201.376 69.9275 201.876 69.8282 202.251 69.7537L204.049 77.6531C203.45 77.8767 202.353 77.9828 201.279 78.2063C200.492 78.0912 198.444 78.2265 196.795 78.2265C194.296 78.2265 192.507 78.1623 190.108 77.0942C187.734 76.026 185.761 74.3989 184.187 72.2129C182.638 70.0269 181.863 67.2696 181.863 63.9409V7.00523Z"
          variants={pathVariants}
        />
        <motion.motion.path
          d="M223.479 22.2478V78.1068L213.084 78.1534V28.9549L223.479 22.2478ZM255.094 77.965L270.253 87.7863H0V79.1089L255.094 77.965Z"
          variants={pathVariants}
        />
        <motion.motion.path
          d="M277 19.9462L255.094 77.965L246.118 78.0053L224.813 19.9462H234.407L250.297 65.5543H250.897L266.787 19.9462H277Z"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
}
 */