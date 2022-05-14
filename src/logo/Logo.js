import React from 'react';
import { motion } from 'framer-motion';
import './logo.scss';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

const Logo = () => {
  return (
      <motion.div className='logo'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{delay: 0.5, duration: 1}}
      >
      <svg viewBox='0 0 171 164' xmlns='http://www.w3.org/2000/svg'>
        <path d='M66.4528 13.8194C60.6542 19.618 56.0331 26.0465 52.5975 33.1013V4.51202V2.41478L50.6128 3.09249C42.9503 5.70895 33.1446 7.04401 21.1455 7.04401C15.4354 7.04401 9.53023 6.7585 3.4295 6.18656L1.78949 6.0328V7.68001V13.728V15.228H3.28949C11.1538 15.228 16.2645 17.1978 19.1156 20.7198C22.057 24.3532 23.6775 30.3639 23.6775 39.072V129.216C23.6775 136.95 22.0617 141.882 19.2709 144.523C16.4302 147.016 11.2469 148.452 3.28949 148.452H1.78949V149.952V156V157.567L3.35465 157.499C21.028 156.73 32.3207 156.348 37.2735 156.348C42.622 156.348 55.0748 156.635 74.6605 157.211C74.6635 157.211 74.6664 157.211 74.6694 157.211L81.5631 157.499L83.1255 157.564V156V149.952V148.452H81.6255C71.5833 148.452 64.2552 146.74 59.4286 143.527C55.0108 140.463 52.5975 134.907 52.5975 126.336V65.28C52.5975 58.0244 54.2718 50.2501 57.6698 41.944C61.0512 33.6785 65.7334 26.7589 71.7074 21.1583L71.7164 21.1499L71.7252 21.1414C77.6324 15.4187 84.0872 12.636 91.1295 12.636C92.7164 12.636 93.9342 13.0156 94.8715 13.7365C88.9915 17.8453 85.8855 23.1293 85.8855 29.568C85.8855 34.5148 87.446 38.5883 90.682 41.6086L90.6996 41.625L90.7177 41.6409C94.0734 44.5771 98.076 46.044 102.649 46.044C108.03 46.044 112.408 44.1597 115.607 40.3241C118.916 36.3927 120.565 31.7267 120.565 26.4C120.565 19.6144 117.87 13.8405 112.582 9.15833C107.459 4.4499 100.837 2.14801 92.8575 2.14801C83.1863 2.14801 74.3771 6.09306 66.4663 13.806L66.4595 13.8126L66.4528 13.8194ZM162.809 127.579C158.89 123.661 154.192 121.668 148.788 121.668C143.384 121.668 138.686 123.661 134.767 127.579C130.849 131.498 128.856 136.196 128.856 141.6C128.856 147.005 130.849 151.702 134.767 155.621C138.686 159.539 143.384 161.532 148.788 161.532C154.192 161.532 158.89 159.539 162.809 155.621C166.727 151.702 168.72 147.005 168.72 141.6C168.72 136.196 166.727 131.498 162.809 127.579Z' />
      </svg>
    </motion.div>
  );
};

export default Logo;
