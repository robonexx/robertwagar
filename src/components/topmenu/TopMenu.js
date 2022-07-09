import Logo from '../logo/Logo';
import ContactBtn from '../contactBtn/ContactBtn';

// styles
import styles from '../../styles/components/TopMenu.module.scss';

export default function TopMenu() {
  return (
    <div className={styles.top_menu}>
      <Logo />
      <div className={styles.enterKre}>
        <Kreative />
      </div>
      <ContactBtn title='Contact' url='/contact' />
    </div>
  );
}

const Kreative = () => (
  <>
    <svg
      className={styles.kreative}
      viewBox='0 0 765 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M143.699 139L112.739 104.152V139H99.6349V32.44H112.739V95.08L143.123 60.088H161.411L124.259 99.4L161.555 139H143.699Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M186.848 72.904C189.152 68.392 192.416 64.888 196.64 62.392C200.96 59.896 206.192 58.648 212.336 58.648V72.184H208.88C194.192 72.184 186.848 80.152 186.848 96.088V139H173.744V60.088H186.848V72.904Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M234.231 47.272C231.735 47.272 229.623 46.408 227.895 44.68C226.167 42.952 225.303 40.84 225.303 38.344C225.303 35.848 226.167 33.736 227.895 32.008C229.623 30.28 231.735 29.416 234.231 29.416C236.631 29.416 238.647 30.28 240.279 32.008C242.007 33.736 242.871 35.848 242.871 38.344C242.871 40.84 242.007 42.952 240.279 44.68C238.647 46.408 236.631 47.272 234.231 47.272ZM240.567 60.088V139H227.463V60.088H240.567Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M274.997 81.832L262.181 61.816H287.813L274.997 81.832ZM262.181 139L274.997 118.984L287.813 139H262.181Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M381.307 96.52C381.307 99.016 381.163 101.656 380.875 104.44H317.803C318.283 112.216 320.923 118.312 325.723 122.728C330.619 127.048 336.523 129.208 343.435 129.208C349.099 129.208 353.803 127.912 357.547 125.32C361.387 122.632 364.075 119.08 365.611 114.664H379.723C377.611 122.248 373.387 128.44 367.051 133.24C360.715 137.944 352.843 140.296 343.435 140.296C335.947 140.296 329.227 138.616 323.275 135.256C317.419 131.896 312.811 127.144 309.451 121C306.091 114.76 304.411 107.56 304.411 99.4C304.411 91.24 306.043 84.088 309.307 77.944C312.571 71.8 317.131 67.096 322.987 63.832C328.939 60.472 335.755 58.792 343.435 58.792C350.923 58.792 357.547 60.424 363.307 63.688C369.067 66.952 373.483 71.464 376.555 77.224C379.723 82.888 381.307 89.32 381.307 96.52ZM367.771 93.784C367.771 88.792 366.667 84.52 364.459 80.968C362.251 77.32 359.227 74.584 355.387 72.76C351.643 70.84 347.467 69.88 342.859 69.88C336.235 69.88 330.571 71.992 325.867 76.216C321.259 80.44 318.619 86.296 317.947 93.784H367.771Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M428.412 61.816V69.304L416.892 71.896V129.064L428.412 131.512V139H392.7V131.512L404.22 129.064V71.896L392.7 69.304V61.816H428.412Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M450.921 29.56V67.576H439.401V29.56H450.921Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M483.775 70.888V117.4C483.775 121.24 484.591 123.976 486.223 125.608C487.855 127.144 490.687 127.912 494.719 127.912H504.367V139H492.559C485.263 139 479.791 137.32 476.143 133.96C472.495 130.6 470.671 125.08 470.671 117.4V70.888H460.447V60.088H470.671V40.216H483.775V60.088H504.367V70.888H483.775Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M550.052 61.816V69.304L538.532 71.896V129.064L550.052 131.512V139H514.34V131.512L525.86 129.064V71.896L514.34 69.304V61.816H550.052Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M595.745 126.904L620.225 60.088H634.193L603.233 139H587.969L557.009 60.088H571.121L595.745 126.904Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M676.896 61.816V69.304L665.376 71.896V129.064L676.896 131.512V139H641.184V131.512L652.704 129.064V71.896L641.184 69.304V61.816H676.896Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M709.197 70.888V117.4C709.197 121.24 710.013 123.976 711.645 125.608C713.277 127.144 716.109 127.912 720.141 127.912H729.789V139H717.981C710.685 139 705.213 137.32 701.565 133.96C697.917 130.6 696.093 125.08 696.093 117.4V70.888H685.869V60.088H696.093V40.216H709.197V60.088H729.789V70.888H709.197Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M752.434 47.272C749.938 47.272 747.826 46.408 746.098 44.68C744.37 42.952 743.506 40.84 743.506 38.344C743.506 35.848 744.37 33.736 746.098 32.008C747.826 30.28 749.938 29.416 752.434 29.416C754.834 29.416 756.85 30.28 758.482 32.008C760.21 33.736 761.074 35.848 761.074 38.344C761.074 40.84 760.21 42.952 758.482 44.68C756.85 46.408 754.834 47.272 752.434 47.272ZM758.77 60.088V139H745.666V60.088H758.77Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />

      <path
        d='M57.048 219.352L17.592 379.48H4.63202L43.944 219.352H57.048Z'
        stroke='white'
        strokeWidth='3'
        mask='url(#path-1-outside-1)'
      />
    </svg>
  </>
);
