import { HTMLProps } from "react";

export function Logo({
  full,
  ...props
}: HTMLProps<SVGSVGElement> & { full?: boolean }) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={full ? "-0.01 -0.02 173.57 62.01" : "-0.01 -0.02 80.75 62.01"}
      {...props}
    >
      <path
        d="M61.3383 24.5182C60.7244 23.2047 59.6492 21.8713 58.0523 21.8952C57.4225 21.9257 56.8111 22.1155 56.276 22.4464C55.7409 22.7772 55.3 23.2383 54.995 23.7858C54.5002 24.4541 54.2408 25.2653 54.2568 26.0944C54.2568 27.8417 55.3 29.2547 56.5879 29.2547C57.8758 29.2547 58.923 27.8417 58.923 26.0944C58.923 24.6734 58.2329 23.4754 57.286 23.0734C57.5539 22.9679 57.8404 22.9165 58.1286 22.9221C59.3001 22.9221 60.0103 24.1162 60.4436 25.0356C60.5138 25.1528 60.6278 25.2377 60.7607 25.272C60.8937 25.3063 61.0349 25.2871 61.1537 25.2187C61.2684 25.147 61.3513 25.0347 61.3856 24.9046C61.4199 24.7745 61.403 24.6364 61.3383 24.5182Z"
        fill="currentColor"
      ></path>
      <path
        d="M48.9726 27.38C48.2866 26.0148 47.111 24.7292 45.454 24.757C44.7423 24.789 44.0518 25.0063 43.4517 25.3871C42.8516 25.7679 42.3632 26.2988 42.0356 26.9263C41.6307 27.5264 41.4181 28.234 41.4257 28.9562C41.4257 30.7035 42.5933 32.1404 44.0296 32.1404C45.466 32.1404 46.6295 30.7234 46.6295 28.9562C46.6295 27.4994 45.8271 26.2735 44.7157 25.9073C44.9752 25.8256 45.2459 25.784 45.5182 25.7839C46.7619 25.7839 47.5563 26.8984 48.0579 27.8974C48.3788 28.4905 49.2695 27.9691 48.9726 27.38Z"
        fill="currentColor"
      ></path>
      <path
        d="M47.7931 38.6082C49.5696 39.4504 51.5866 39.6516 53.4966 39.1771C55.4065 38.7027 57.0899 37.5824 58.2568 36.0091C58.3258 35.8913 58.3451 35.7512 58.3106 35.6192C58.276 35.4873 58.1904 35.3743 58.0723 35.3046C57.9523 35.2396 57.8117 35.2228 57.6796 35.2576C57.5474 35.2924 57.4338 35.3762 57.3621 35.4917C56.3269 36.8178 54.8713 37.7591 53.2304 38.1635C51.5896 38.5679 49.8592 38.4119 48.3187 37.7206C47.7169 37.446 47.1913 38.3296 47.7931 38.6082Z"
        fill="currentColor"
      ></path>
      <path
        d="M53.2979 28.3193C53.3539 28.7996 53.5147 29.2619 53.769 29.6743C54.0232 30.0867 54.3649 30.4392 54.7703 30.7075C54.9623 30.8325 55.162 30.9455 55.3681 31.0458C55.5687 31.1572 55.7092 31.2567 55.7212 31.4956C55.6807 32.0249 55.4886 32.5317 55.1675 32.9563C54.9348 33.3543 55.5326 33.6767 55.7653 33.3026C56.0894 32.8232 56.3056 32.2802 56.3993 31.7105C56.4346 31.4632 56.3909 31.2112 56.2743 30.9899C56.1577 30.7685 55.9741 30.589 55.7493 30.4766C54.9469 30.0109 54.0842 29.3144 54.004 28.3074C53.9679 27.8696 53.2778 27.8656 53.3139 28.3074L53.2979 28.3193Z"
        fill="currentColor"
      ></path>
      <path
        d="M52.7963 20.506C53.017 20.0417 53.3412 19.6331 53.7443 19.3111C54.1474 18.9891 54.6189 18.7621 55.1233 18.6473C55.6897 18.5366 56.2734 18.5465 56.8356 18.6761C57.3979 18.8058 57.9261 19.0524 58.3852 19.3995C58.504 19.4679 58.6453 19.4871 58.7782 19.4528C58.9112 19.4185 59.0252 19.3336 59.0954 19.2164C59.1619 19.0976 59.1794 18.9578 59.1443 18.8265C59.1091 18.6951 59.024 18.5824 58.9068 18.5119C58.3299 18.0934 57.6701 17.8007 56.971 17.6532C56.2719 17.5057 55.5492 17.5067 54.8505 17.6562C54.2158 17.8047 53.6221 18.0909 53.1122 18.4942C52.6023 18.8975 52.1889 19.4078 51.9015 19.9886C51.8372 20.1073 51.8209 20.2458 51.856 20.3759C51.891 20.5061 51.9747 20.6181 52.0901 20.6891C52.2086 20.7563 52.3488 20.7747 52.4808 20.7405C52.6129 20.7063 52.7261 20.6221 52.7963 20.506Z"
        fill="currentColor"
      ></path>
      <path
        d="M40.2943 23.1887C40.5148 22.7242 40.8389 22.3155 41.2421 21.9934C41.6452 21.6714 42.1169 21.4445 42.6214 21.33C43.1878 21.2196 43.7714 21.2295 44.3336 21.3592C44.8959 21.4889 45.4241 21.7353 45.8833 22.0822C46.0015 22.1504 46.1421 22.1695 46.2744 22.1352C46.4068 22.1009 46.52 22.016 46.5895 21.8991C46.6563 21.7808 46.6745 21.6414 46.6401 21.51C46.6057 21.3787 46.5214 21.2657 46.4049 21.1946C45.8269 20.7766 45.1664 20.4846 44.4666 20.3379C43.7668 20.1911 43.0436 20.1928 42.3446 20.3429C41.7087 20.4913 41.1142 20.7789 40.6047 21.1845C40.0952 21.5901 39.6835 22.1035 39.3996 22.6872C39.333 22.805 39.3149 22.9438 39.3494 23.0744C39.3838 23.2051 39.468 23.3174 39.5842 23.3877C39.703 23.4561 39.8442 23.4753 39.9772 23.441C40.1102 23.4067 40.2241 23.3218 40.2943 23.2046V23.1887Z"
        fill="currentColor"
      ></path>
      <path
        d="M80.2636 33.6846C79.8416 32.6248 79.1565 31.6878 78.2721 30.9607C77.3876 30.2336 76.3324 29.7399 75.2043 29.5253C72.9855 29.0954 70.7547 29.5253 68.524 29.4576C68.074 29.4512 67.6255 29.4046 67.1839 29.3183C66.7919 29.2405 66.4135 29.1064 66.0605 28.9203C65.2303 28.4393 64.5393 27.7538 64.0544 26.9302C64.0052 26.8499 63.9396 26.7808 63.8618 26.7272C63.5945 25.2802 63.4203 23.8179 63.3402 22.3489C68.5761 23.5151 70.9233 21.1111 71.3646 18.0384C71.7377 15.3278 69.7036 12.5695 67.0716 11.8889C66.7112 11.7936 66.341 11.7402 65.9682 11.7297C64.6562 11.6939 63.26 12.0999 62.0724 11.5386C60.9851 11.0252 60.3993 9.82317 60.1425 8.65696C59.8858 7.49075 59.8657 6.26882 59.5046 5.13048C59.1598 4.16815 58.6152 3.28832 57.9061 2.54786C57.197 1.8074 56.3392 1.2228 55.3881 0.831833C53.4761 0.0621626 51.3921 -0.189222 49.3498 0.103451C46.108 0.501474 42.6374 2.25277 41.7788 5.33745C41.7788 5.35735 41.7788 5.38123 41.7588 5.40113C41.7307 5.51258 41.7026 5.62801 41.6785 5.74343L41.5983 5.63597C41.5541 5.68137 41.5008 5.71705 41.4418 5.74067C41.3828 5.7643 41.3195 5.77534 41.2559 5.77309C41.1923 5.77084 41.1299 5.75534 41.0728 5.7276C41.0156 5.69986 40.965 5.6605 40.9242 5.61209C40.3573 4.99178 39.6593 4.50329 38.8801 4.18152C38.1008 3.85975 37.2596 3.71262 36.4164 3.75064C35.5733 3.78866 34.7489 4.01089 34.0024 4.40147C33.2558 4.79205 32.6053 5.34133 32.0974 6.01011C30.1475 8.55347 31.1867 12.3785 28.7834 14.679C27.7482 15.6661 26.3761 16.0443 25.0882 16.6294C23.6864 17.291 22.5308 18.3747 21.7861 19.726C21.0817 21.0337 20.8411 22.5384 21.1031 23.9982C21.3651 25.4579 22.1144 26.7878 23.2305 27.774C25.2767 29.5293 28.0853 29.5532 30.3241 28.3471C30.3963 28.3113 30.4725 28.2715 30.5447 28.2277L30.4926 28.2596C29.5136 26.1063 29.4895 23.4833 31.1185 21.6325C33.6341 18.7588 38.7978 20.92 39.4718 15.9925C39.7607 13.8949 37.9994 10.9098 39.9412 9.26593C40.5488 8.78483 41.3163 8.54761 42.0918 8.60124C42.8024 8.65173 43.4961 8.83968 44.134 9.15449C44.1326 9.14525 44.1326 9.13587 44.134 9.12663C44.6736 8.38995 45.4412 7.84849 46.3199 7.58477C47.1985 7.32105 48.1399 7.34954 49.0007 7.66588C49.7789 7.95451 50.457 8.45876 50.9547 9.11867C51.4334 9.83584 51.7382 10.6532 51.8454 11.5068C51.9938 12.3227 52.0981 13.2103 52.5876 13.8949C53.0281 14.481 53.6405 14.9176 54.3409 15.1447C55.1636 15.3933 56.039 15.414 56.8726 15.2044C57.8131 14.9887 58.7856 14.9469 59.7413 15.081C61.3462 15.3597 63.1677 16.2751 63.5328 18.0105C63.6692 18.6553 62.6702 18.9299 62.5338 18.2811C62.5017 18.1259 62.3492 18.2811 62.3412 18.3409C61.6311 21.732 62.1567 24.7888 62.7424 28.1521C63.3242 31.3801 64.0424 34.7354 63.5449 38.0191C63.3389 39.4655 62.8379 40.855 62.0724 42.1028C61.3326 43.2521 60.3924 44.2616 59.296 45.084C58.311 45.8537 57.2242 46.4858 56.0662 46.9627C54.8354 47.4201 53.563 47.7587 52.2666 47.9736C50.7376 48.2473 49.1863 48.3806 47.6326 48.3717C46.3028 48.4036 44.9768 48.2167 43.7087 47.8184H43.6766V47.7906C43.0788 46.485 42.0196 45.4263 40.9643 44.475C39.9091 43.5237 38.8178 42.5725 37.8429 41.5177C36.8147 40.413 35.8757 39.2299 35.0344 37.9793C33.2168 35.2767 31.7243 32.1522 31.5157 28.8646C30.2193 29.7583 28.6809 30.2425 27.1023 30.2537C26.7988 30.2531 26.4957 30.2305 26.1955 30.186C24.5546 31.8179 22.7731 33.5891 22.055 35.8459C21.397 37.9037 21.9306 39.9813 23.05 41.7804C24.2536 43.6869 25.9628 45.1556 27.6479 46.6124C29.3331 48.0692 31.2148 49.6095 32.2098 51.6315C32.7217 52.6321 32.8894 53.7714 32.6872 54.8754C32.504 55.7192 32.1972 56.5318 31.7765 57.2874C32.6417 57.8872 33.6286 58.2924 34.6681 58.4746C35.7076 58.6568 36.7747 58.6116 37.7947 58.3421C40.6313 57.5779 42.8862 55.2216 43.813 52.5031C44.1702 51.5021 44.2789 50.4303 44.13 49.3787C45.0953 49.5983 46.0807 49.7196 47.0709 49.7409H47.4962C47.5506 51.3137 47.9958 52.8488 48.7924 54.2098C49.5889 55.5708 50.7121 56.7155 52.062 57.5421C54.098 58.7041 56.4976 59.071 58.7918 58.5712C61.086 58.0714 63.1098 56.7408 64.4677 54.8395C65.755 55.2824 67.127 55.4287 68.4798 55.2673C69.8326 55.1059 71.1306 54.6411 72.2754 53.9082C73.5074 53.0891 74.5049 51.9677 75.1707 50.653C75.8365 49.3382 76.148 47.875 76.0749 46.4054C76.0249 45.0994 75.6808 43.821 75.0678 42.664C76.883 42.3597 78.5044 41.3588 79.5815 39.8779C80.2012 38.9814 80.5877 37.9468 80.7067 36.8662C80.8257 35.7857 80.6735 34.6927 80.2636 33.6846Z"
        fill="currentColor"
      ></path>
      <path
        d="M25.2326 45.892C23.5917 44.3954 22.0991 42.7078 21.2606 40.6182C20.8568 39.6332 20.666 38.5751 20.7006 37.5124C20.7351 36.4496 20.9942 35.4059 21.4612 34.4488C22.2636 32.7095 23.6197 31.2647 24.9718 29.8994C23.8469 29.5374 22.8315 28.901 22.0189 28.0486C20.8716 26.8235 20.1606 25.2592 19.9947 23.5951C19.8288 21.931 20.217 20.2588 21.1001 18.8344C21.9827 17.4172 23.2763 16.2976 24.8114 15.6224C26.1434 15.0412 27.7162 14.6154 28.5467 13.3258C29.4895 11.861 29.5537 10.0461 29.9309 8.39427C30.2076 7.0564 30.8455 5.81824 31.7765 4.81207C31.7166 4.72406 31.635 4.65266 31.5395 4.60461C31.4441 4.55656 31.3378 4.53343 31.2308 4.53743C28.741 4.52089 26.2799 5.06526 24.033 6.12952C21.9594 7.16198 20.1581 8.66134 18.773 10.5078C15.3547 14.9895 14.6244 20.9877 15.7478 26.3849C15.9003 27.1332 16.0167 27.8894 16.1491 28.6417C16.2258 29.0503 16.2094 29.4708 16.1011 29.8723C15.9928 30.2738 15.7954 30.6462 15.5232 30.9622C13.6254 33.2388 10.4076 32.9523 7.74757 33.3941C5.39789 33.7317 3.2757 34.9708 1.83764 36.8449C0.574507 38.5217 -0.073767 40.576 6.02151e-05 42.668C0.0400382 43.7958 0.305742 44.9045 0.781706 45.9295C1.25767 46.9544 1.93439 47.8753 2.77247 48.6383C4.71437 50.3578 7.30623 50.9907 9.84995 51.0902C10.203 51.0902 10.5601 51.0902 10.9132 51.0902C10.7045 54.5768 12.4859 58.0436 15.2824 60.1412C18.5283 62.5731 23.1022 62.5015 26.5526 60.5392C28.2513 59.5277 29.7277 58.1877 30.8938 56.5988C31.3743 55.7669 31.6493 54.834 31.6962 53.8763C31.6962 52.6584 31.0342 51.5519 30.2799 50.6324C28.8115 48.8573 26.9418 47.4522 25.2326 45.892Z"
        fill="currentColor"
      ></path>

      {full ? (
        <>
          <path
            d="M93.0284 29.7491C92.6673 29.7491 92.3563 29.6297 92.0955 29.3908C91.8347 29.1321 91.7043 28.8336 91.7043 28.4953V19.301C91.7043 18.7238 91.8849 18.2562 92.246 17.8979C92.6271 17.5397 93.1287 17.3606 93.7506 17.3606H96.7597C97.9834 17.3606 98.9664 17.7188 99.7086 18.4353C100.471 19.1517 100.852 20.0473 100.852 21.1219C100.852 21.7588 100.682 22.3558 100.341 22.913C99.9995 23.4703 99.508 23.918 98.8661 24.2563C99.1469 24.3957 99.3977 24.5847 99.6184 24.8235C99.8591 25.0623 100.05 25.3509 100.19 25.6892L101.183 27.958C101.283 28.1968 101.334 28.3958 101.334 28.555C101.334 28.9132 101.193 29.2117 100.912 29.4505C100.631 29.6695 100.32 29.7789 99.9795 29.7789C99.7588 29.7789 99.5381 29.7192 99.3174 29.5998C99.1168 29.4804 98.9564 29.2913 98.836 29.0326L97.6925 26.3161C97.4919 25.8385 97.2211 25.5002 96.8801 25.3012C96.5591 25.0822 96.1779 24.9728 95.7366 24.9728H94.9542C94.553 24.9728 94.3524 25.1718 94.3524 25.5698V28.4953C94.3524 28.8336 94.222 29.1321 93.9612 29.3908C93.7004 29.6297 93.3895 29.7491 93.0284 29.7491ZM94.8038 22.7339H96.6393C97.1408 22.7339 97.532 22.5946 97.8129 22.316C98.1138 22.0374 98.2643 21.6792 98.2643 21.2413C98.2643 20.7836 98.1138 20.4254 97.8129 20.1667C97.532 19.888 97.1408 19.7487 96.6393 19.7487H94.8038C94.5028 19.7487 94.3524 19.898 94.3524 20.1965V22.2861C94.3524 22.5847 94.5028 22.7339 94.8038 22.7339Z"
            fill="currentColor"
          ></path>
          <path
            d="M108.913 21.7787C108.913 21.4005 109.033 21.0921 109.274 20.8533C109.535 20.6144 109.856 20.495 110.237 20.495C110.618 20.495 110.929 20.6244 111.17 20.8831C111.431 21.1219 111.561 21.4204 111.561 21.7787V25.9877C111.561 26.8037 111.35 27.5002 110.929 28.0774C110.508 28.6346 109.966 29.0525 109.304 29.3311C108.642 29.6098 107.94 29.7491 107.198 29.7491C106.476 29.7491 105.784 29.6098 105.122 29.3311C104.46 29.0525 103.908 28.6346 103.467 28.0774C103.045 27.5002 102.835 26.8037 102.835 25.9877V21.7787C102.835 21.4005 102.955 21.0921 103.196 20.8533C103.456 20.6144 103.777 20.495 104.159 20.495C104.54 20.495 104.851 20.6244 105.091 20.8831C105.352 21.1219 105.483 21.4204 105.483 21.7787V25.8683C105.483 26.2863 105.643 26.6345 105.964 26.9132C106.285 27.1918 106.696 27.3311 107.198 27.3311C107.699 27.3311 108.111 27.1918 108.432 26.9132C108.753 26.6345 108.913 26.2863 108.913 25.8683V21.7787Z"
            fill="currentColor"
          ></path>
          <path
            d="M115.213 29.7491C114.832 29.7491 114.511 29.6396 114.25 29.4207C113.989 29.2018 113.859 28.9232 113.859 28.5848V17.48C113.859 17.1616 113.979 16.8929 114.22 16.674C114.48 16.4352 114.811 16.3158 115.213 16.3158C115.594 16.3158 115.905 16.4352 116.146 16.674C116.386 16.8929 116.507 17.1715 116.507 17.5099V28.555C116.507 28.8933 116.376 29.1819 116.115 29.4207C115.875 29.6396 115.574 29.7491 115.213 29.7491Z"
            fill="currentColor"
          ></path>
          <path
            d="M123.094 29.7491C122.232 29.7491 121.439 29.5501 120.717 29.152C119.995 28.754 119.413 28.2067 118.972 27.5102C118.55 26.7937 118.34 25.9877 118.34 25.0922C118.34 24.1767 118.55 23.3807 118.972 22.7041C119.413 22.0075 119.995 21.4702 120.717 21.0921C121.439 20.694 122.232 20.495 123.094 20.495C123.977 20.495 124.769 20.694 125.472 21.0921C126.194 21.4702 126.765 22.0075 127.187 22.7041C127.608 23.3807 127.819 24.1767 127.819 25.0922C127.819 25.9877 127.608 26.7937 127.187 27.5102C126.765 28.2067 126.194 28.754 125.472 29.152C124.769 29.5501 123.977 29.7491 123.094 29.7491ZM123.094 27.3311C123.716 27.3311 124.218 27.1221 124.599 26.7042C125 26.2664 125.201 25.729 125.201 25.0922C125.201 24.4355 125 23.9081 124.599 23.5101C124.218 23.112 123.716 22.913 123.094 22.913C122.492 22.913 121.981 23.112 121.56 23.5101C121.158 23.9081 120.958 24.4355 120.958 25.0922C120.958 25.729 121.158 26.2664 121.56 26.7042C121.981 27.1221 122.492 27.3311 123.094 27.3311Z"
            fill="currentColor"
          ></path>
          <path
            d="M132.768 29.7491C131.404 29.7491 130.28 29.4704 129.397 28.9132C129.217 28.7938 129.087 28.6545 129.006 28.4953C128.926 28.3162 128.886 28.147 128.886 27.9878C128.886 27.6495 128.996 27.341 129.217 27.0624C129.458 26.7838 129.749 26.6445 130.09 26.6445C130.25 26.6445 130.411 26.6843 130.571 26.7639C130.932 26.9231 131.343 27.0624 131.805 27.1818C132.266 27.2813 132.687 27.3311 133.069 27.3311C133.811 27.3311 134.182 27.1619 134.182 26.8236C134.182 26.6246 134.092 26.4554 133.911 26.3161C133.731 26.1569 133.309 26.0475 132.647 25.9877C132.387 25.9678 132.046 25.928 131.624 25.8683C131.223 25.8086 130.822 25.6992 130.421 25.54C130.019 25.3609 129.678 25.1021 129.397 24.7638C129.137 24.4255 129.006 23.9678 129.006 23.3907C129.006 22.4951 129.347 21.7886 130.029 21.2712C130.711 20.7537 131.624 20.495 132.768 20.495C133.43 20.495 134.052 20.5647 134.633 20.704C135.235 20.8433 135.687 21.0523 135.987 21.3309C136.268 21.5896 136.409 21.8881 136.409 22.2264C136.409 22.525 136.298 22.7936 136.078 23.0324C135.857 23.2712 135.576 23.3907 135.235 23.3907C135.055 23.3907 134.884 23.3508 134.724 23.2712C134.483 23.112 134.172 22.9926 133.791 22.913C133.43 22.8334 133.059 22.7936 132.677 22.7936C131.915 22.7936 131.534 22.9528 131.534 23.2712C131.534 23.4106 131.604 23.5399 131.745 23.6593C131.905 23.7588 132.256 23.8484 132.798 23.928C133.139 23.9678 133.53 24.0275 133.971 24.1071C134.413 24.1668 134.834 24.2862 135.235 24.4653C135.656 24.6245 136.008 24.8932 136.288 25.2713C136.569 25.6494 136.71 26.1669 136.71 26.8236C136.71 27.7191 136.349 28.4356 135.626 28.9729C134.904 29.4903 133.951 29.7491 132.768 29.7491Z"
            fill="currentColor"
          ></path>
          <path
            d="M92.1556 50.076C91.8346 50.076 91.5237 49.9566 91.2228 49.7177C90.9419 49.4789 90.8015 49.1705 90.8015 48.7923C90.8015 48.6331 90.8316 48.464 90.8918 48.2849L94.6833 38.4637C94.8237 38.1054 95.0544 37.8368 95.3754 37.6577C95.6964 37.4785 96.0274 37.389 96.3684 37.389C96.7295 37.389 97.0705 37.4785 97.3915 37.6577C97.7325 37.8368 97.9733 38.1054 98.1137 38.4637L102.176 48.2252C102.216 48.3048 102.236 48.3844 102.236 48.464C102.236 48.5436 102.236 48.6232 102.236 48.7028C102.236 49.1207 102.096 49.4491 101.815 49.6879C101.534 49.9267 101.223 50.0461 100.882 50.0461C100.641 50.0461 100.401 49.9765 100.16 49.8372C99.9392 49.7177 99.7788 49.5187 99.6784 49.2401L98.8058 46.9117C98.7857 46.7923 98.7055 46.7326 98.5651 46.7326H94.5027C94.3623 46.7326 94.272 46.7923 94.2319 46.9117L93.3894 49.27C93.2489 49.5287 93.0684 49.7277 92.8477 49.867C92.6271 50.0063 92.3964 50.076 92.1556 50.076ZM95.586 44.4041H97.3614C97.4818 44.4041 97.5721 44.3643 97.6322 44.2847C97.7125 44.1852 97.7325 44.0658 97.6924 43.9265L96.91 41.807C96.7897 41.4886 96.6392 41.3294 96.4587 41.3294C96.2781 41.3294 96.1277 41.4986 96.0073 41.8369L95.255 43.9564C95.2149 44.0758 95.2249 44.1852 95.2851 44.2847C95.3453 44.3643 95.4456 44.4041 95.586 44.4041Z"
            fill="currentColor"
          ></path>
          <path
            d="M105.25 49.9864C104.869 49.9864 104.548 49.877 104.287 49.658C104.026 49.4391 103.896 49.1605 103.896 48.8222V42.1354C103.896 41.817 104.016 41.5483 104.257 41.3294C104.518 41.0906 104.849 40.9712 105.25 40.9712C105.611 40.9712 105.902 41.0807 106.123 41.2996C106.363 41.4986 106.504 41.7473 106.544 42.0459C106.765 41.7075 107.066 41.419 107.447 41.1802C107.828 40.9413 108.229 40.8219 108.65 40.8219C108.911 40.8219 109.162 40.8518 109.403 40.9115C109.683 40.9911 109.914 41.1503 110.095 41.3891C110.275 41.608 110.366 41.8667 110.366 42.1653C110.366 42.5832 110.225 42.9315 109.944 43.2101C109.683 43.4688 109.373 43.5583 109.011 43.4787C108.751 43.419 108.49 43.3892 108.229 43.3892C107.768 43.3892 107.387 43.5484 107.086 43.8668C106.785 44.1852 106.604 44.832 106.544 45.8072V48.7923C106.544 49.1307 106.414 49.4192 106.153 49.658C105.912 49.877 105.611 49.9864 105.25 49.9864Z"
            fill="currentColor"
          ></path>
          <path
            d="M115.474 50.076C114.611 50.076 113.899 49.8272 113.338 49.3297C112.776 48.8321 112.495 48.066 112.495 47.0311V43.8071C112.495 43.6081 112.395 43.5086 112.194 43.5086H111.743C111.382 43.5086 111.111 43.3991 110.93 43.1802C110.75 42.9613 110.659 42.6827 110.659 42.3444C110.659 41.9862 110.75 41.6976 110.93 41.4787C111.111 41.2399 111.382 41.1205 111.743 41.1205H112.194C112.395 41.1205 112.495 41.021 112.495 40.8219V38.6129C112.495 38.2746 112.615 37.986 112.856 37.7472C113.097 37.5084 113.408 37.389 113.789 37.389C114.17 37.389 114.481 37.5084 114.722 37.7472C114.983 37.9661 115.113 38.2547 115.113 38.6129V40.8219C115.113 41.021 115.213 41.1205 115.414 41.1205H116.527C116.868 41.1205 117.149 41.2399 117.37 41.4787C117.611 41.7175 117.731 42.0061 117.731 42.3444C117.731 42.6827 117.611 42.9613 117.37 43.1802C117.149 43.3991 116.858 43.5086 116.497 43.5086H115.414C115.213 43.5086 115.113 43.6081 115.113 43.8071V46.6132C115.113 46.9714 115.173 47.2202 115.293 47.3595C115.434 47.4988 115.604 47.5684 115.805 47.5684C115.885 47.5684 116.046 47.5485 116.287 47.5087C116.527 47.449 116.678 47.4192 116.738 47.4192C117.059 47.4192 117.33 47.5386 117.55 47.7774C117.771 48.0162 117.881 48.3048 117.881 48.6431C117.881 48.9018 117.801 49.1406 117.641 49.3595C117.5 49.5784 117.269 49.7376 116.949 49.8372C116.688 49.9168 116.437 49.9765 116.196 50.0163C115.955 50.0561 115.715 50.076 115.474 50.076Z"
            fill="currentColor"
          ></path>
          <path
            d="M120.767 50.076C120.385 50.076 120.064 49.9665 119.804 49.7476C119.543 49.5287 119.412 49.2501 119.412 48.9118V42.1354C119.412 41.817 119.533 41.5483 119.774 41.3294C120.034 41.0906 120.365 40.9712 120.767 40.9712C121.168 40.9712 121.479 41.0906 121.699 41.3294C121.94 41.5483 122.061 41.8269 122.061 42.1653V48.8819C122.061 49.2202 121.93 49.5088 121.669 49.7476C121.429 49.9665 121.128 50.076 120.767 50.076ZM120.767 39.4786C120.345 39.4786 119.984 39.3493 119.683 39.0905C119.382 38.8119 119.232 38.4637 119.232 38.0457C119.232 37.6676 119.382 37.3392 119.683 37.0606C119.984 36.782 120.345 36.6427 120.767 36.6427C121.168 36.6427 121.509 36.782 121.79 37.0606C122.091 37.3392 122.241 37.6676 122.241 38.0457C122.241 38.4637 122.091 38.8119 121.79 39.0905C121.509 39.3493 121.168 39.4786 120.767 39.4786Z"
            fill="currentColor"
          ></path>
          <path
            d="M127.625 50.076C126.261 50.076 125.138 49.7974 124.255 49.2401C124.074 49.1207 123.944 48.9814 123.864 48.8222C123.783 48.6431 123.743 48.4739 123.743 48.3147C123.743 47.9764 123.854 47.6679 124.074 47.3893C124.315 47.1107 124.606 46.9714 124.947 46.9714C125.107 46.9714 125.268 47.0112 125.428 47.0908C125.789 47.25 126.201 47.3893 126.662 47.5087C127.124 47.6082 127.545 47.658 127.926 47.658C128.668 47.658 129.039 47.4888 129.039 47.1505C129.039 46.9515 128.949 46.7823 128.769 46.643C128.588 46.4838 128.167 46.3744 127.505 46.3147C127.244 46.2948 126.903 46.255 126.482 46.1952C126.08 46.1355 125.679 46.0261 125.278 45.8669C124.877 45.6878 124.536 45.4291 124.255 45.0907C123.994 44.7524 123.864 44.2947 123.864 43.7176C123.864 42.822 124.205 42.1155 124.887 41.5981C125.569 41.0807 126.482 40.8219 127.625 40.8219C128.287 40.8219 128.909 40.8916 129.491 41.0309C130.093 41.1702 130.544 41.3792 130.845 41.6578C131.126 41.9165 131.266 42.215 131.266 42.5533C131.266 42.8519 131.156 43.1205 130.935 43.3593C130.714 43.5981 130.434 43.7176 130.093 43.7176C129.912 43.7176 129.741 43.6778 129.581 43.5981C129.34 43.4389 129.029 43.3195 128.648 43.2399C128.287 43.1603 127.916 43.1205 127.535 43.1205C126.772 43.1205 126.391 43.2797 126.391 43.5981C126.391 43.7375 126.462 43.8668 126.602 43.9862C126.762 44.0857 127.113 44.1753 127.655 44.2549C127.996 44.2947 128.387 44.3544 128.829 44.434C129.27 44.4937 129.691 44.6131 130.093 44.7922C130.514 44.9514 130.865 45.2201 131.146 45.5982C131.427 45.9763 131.567 46.4938 131.567 47.1505C131.567 48.0461 131.206 48.7625 130.484 49.2998C129.762 49.8173 128.809 50.076 127.625 50.076Z"
            fill="currentColor"
          ></path>
          <path
            d="M136.985 50.076C136.122 50.076 135.41 49.8272 134.848 49.3297C134.286 48.8321 134.006 48.066 134.006 47.0311V43.8071C134.006 43.6081 133.905 43.5086 133.705 43.5086H133.253C132.892 43.5086 132.621 43.3991 132.441 43.1802C132.26 42.9613 132.17 42.6827 132.17 42.3444C132.17 41.9862 132.26 41.6976 132.441 41.4787C132.621 41.2399 132.892 41.1205 133.253 41.1205H133.705C133.905 41.1205 134.006 41.021 134.006 40.8219V38.6129C134.006 38.2746 134.126 37.986 134.367 37.7472C134.607 37.5084 134.918 37.389 135.3 37.389C135.681 37.389 135.992 37.5084 136.232 37.7472C136.493 37.9661 136.624 38.2547 136.624 38.6129V40.8219C136.624 41.021 136.724 41.1205 136.924 41.1205H138.038C138.379 41.1205 138.66 41.2399 138.88 41.4787C139.121 41.7175 139.241 42.0061 139.241 42.3444C139.241 42.6827 139.121 42.9613 138.88 43.1802C138.66 43.3991 138.369 43.5086 138.008 43.5086H136.924C136.724 43.5086 136.624 43.6081 136.624 43.8071V46.6132C136.624 46.9714 136.684 47.2202 136.804 47.3595C136.944 47.4988 137.115 47.5684 137.316 47.5684C137.396 47.5684 137.556 47.5485 137.797 47.5087C138.038 47.449 138.188 47.4192 138.248 47.4192C138.569 47.4192 138.84 47.5386 139.061 47.7774C139.282 48.0162 139.392 48.3048 139.392 48.6431C139.392 48.9018 139.312 49.1406 139.151 49.3595C139.011 49.5784 138.78 49.7376 138.459 49.8372C138.198 49.9168 137.948 49.9765 137.707 50.0163C137.466 50.0561 137.225 50.076 136.985 50.076Z"
            fill="currentColor"
          ></path>
          <path
            d="M142.277 50.076C141.896 50.076 141.575 49.9665 141.314 49.7476C141.053 49.5287 140.923 49.2501 140.923 48.9118V42.1354C140.923 41.817 141.043 41.5483 141.284 41.3294C141.545 41.0906 141.876 40.9712 142.277 40.9712C142.678 40.9712 142.989 41.0906 143.21 41.3294C143.451 41.5483 143.571 41.8269 143.571 42.1653V48.8819C143.571 49.2202 143.441 49.5088 143.18 49.7476C142.939 49.9665 142.638 50.076 142.277 50.076ZM142.277 39.4786C141.856 39.4786 141.495 39.3493 141.194 39.0905C140.893 38.8119 140.743 38.4637 140.743 38.0457C140.743 37.6676 140.893 37.3392 141.194 37.0606C141.495 36.782 141.856 36.6427 142.277 36.6427C142.678 36.6427 143.019 36.782 143.3 37.0606C143.601 37.3392 143.752 37.6676 143.752 38.0457C143.752 38.4637 143.601 38.8119 143.3 39.0905C143.019 39.3493 142.678 39.4786 142.277 39.4786Z"
            fill="currentColor"
          ></path>
          <path
            d="M150.189 50.076C149.346 50.076 148.554 49.8869 147.812 49.5088C147.089 49.1307 146.508 48.5834 146.066 47.8669C145.625 47.1505 145.404 46.2948 145.404 45.2997C145.424 43.9265 145.876 42.8419 146.758 42.0459C147.641 41.2299 148.785 40.8219 150.189 40.8219C150.73 40.8219 151.262 40.8816 151.784 41.001C152.305 41.1205 152.757 41.3394 153.138 41.6578C153.439 41.8966 153.589 42.2051 153.589 42.5832C153.589 42.9016 153.469 43.1902 153.228 43.4489C153.007 43.7076 152.727 43.837 152.385 43.837C152.165 43.837 151.964 43.7773 151.784 43.6579C151.483 43.4986 151.212 43.3892 150.971 43.3295C150.751 43.2698 150.5 43.2399 150.219 43.2399C149.557 43.2399 149.015 43.429 148.594 43.8071C148.173 44.1852 147.962 44.6927 147.962 45.3295C147.962 46.0659 148.193 46.643 148.654 47.0609C149.116 47.459 149.657 47.658 150.279 47.658C150.981 47.658 151.643 47.3993 152.265 46.8818C152.506 46.7027 152.737 46.6132 152.957 46.6132C153.278 46.6132 153.549 46.7425 153.77 47.0012C154.01 47.26 154.131 47.5585 154.131 47.8968C154.131 48.0361 154.101 48.1953 154.041 48.3744C153.98 48.5336 153.87 48.6928 153.71 48.852C153.168 49.2899 152.586 49.5983 151.964 49.7775C151.362 49.9765 150.771 50.076 150.189 50.076Z"
            fill="currentColor"
          ></path>
          <path
            d="M159.944 50.076C159.082 50.076 158.289 49.877 157.567 49.4789C156.845 49.0809 156.263 48.5336 155.822 47.8371C155.401 47.1206 155.19 46.3147 155.19 45.4191C155.19 44.5037 155.401 43.7076 155.822 43.031C156.263 42.3344 156.845 41.7971 157.567 41.419C158.289 41.021 159.082 40.8219 159.944 40.8219C160.827 40.8219 161.619 41.021 162.322 41.419C163.044 41.7971 163.615 42.3344 164.037 43.031C164.458 43.7076 164.669 44.5037 164.669 45.4191C164.669 46.3147 164.458 47.1206 164.037 47.8371C163.615 48.5336 163.044 49.0809 162.322 49.4789C161.619 49.877 160.827 50.076 159.944 50.076ZM159.944 47.658C160.566 47.658 161.068 47.449 161.449 47.0311C161.85 46.5933 162.051 46.0559 162.051 45.4191C162.051 44.7624 161.85 44.235 161.449 43.837C161.068 43.4389 160.566 43.2399 159.944 43.2399C159.342 43.2399 158.831 43.4389 158.41 43.837C158.008 44.235 157.808 44.7624 157.808 45.4191C157.808 46.0559 158.008 46.5933 158.41 47.0311C158.831 47.449 159.342 47.658 159.944 47.658Z"
            fill="currentColor"
          ></path>
          <path
            d="M169.618 50.076C168.254 50.076 167.13 49.7974 166.247 49.2401C166.067 49.1207 165.937 48.9814 165.856 48.8222C165.776 48.6431 165.736 48.4739 165.736 48.3147C165.736 47.9764 165.846 47.6679 166.067 47.3893C166.308 47.1107 166.599 46.9714 166.94 46.9714C167.1 46.9714 167.261 47.0112 167.421 47.0908C167.782 47.25 168.193 47.3893 168.655 47.5087C169.116 47.6082 169.537 47.658 169.919 47.658C170.661 47.658 171.032 47.4888 171.032 47.1505C171.032 46.9515 170.942 46.7823 170.761 46.643C170.581 46.4838 170.159 46.3744 169.497 46.3147C169.237 46.2948 168.896 46.255 168.474 46.1952C168.073 46.1355 167.672 46.0261 167.271 45.8669C166.869 45.6878 166.528 45.4291 166.247 45.0907C165.987 44.7524 165.856 44.2947 165.856 43.7176C165.856 42.822 166.197 42.1155 166.879 41.5981C167.561 41.0807 168.474 40.8219 169.618 40.8219C170.28 40.8219 170.902 40.8916 171.483 41.0309C172.085 41.1702 172.537 41.3792 172.837 41.6578C173.118 41.9165 173.259 42.215 173.259 42.5533C173.259 42.8519 173.148 43.1205 172.928 43.3593C172.707 43.5981 172.426 43.7176 172.085 43.7176C171.905 43.7176 171.734 43.6778 171.574 43.5981C171.333 43.4389 171.022 43.3195 170.641 43.2399C170.28 43.1603 169.909 43.1205 169.527 43.1205C168.765 43.1205 168.384 43.2797 168.384 43.5981C168.384 43.7375 168.454 43.8668 168.595 43.9862C168.755 44.0857 169.106 44.1753 169.648 44.2549C169.989 44.2947 170.38 44.3544 170.821 44.434C171.263 44.4937 171.684 44.6131 172.085 44.7922C172.506 44.9514 172.858 45.2201 173.138 45.5982C173.419 45.9763 173.56 46.4938 173.56 47.1505C173.56 48.0461 173.199 48.7625 172.476 49.2998C171.754 49.8173 170.801 50.076 169.618 50.076Z"
            fill="currentColor"
          ></path>
        </>
      ) : null}
    </svg>
  );
}